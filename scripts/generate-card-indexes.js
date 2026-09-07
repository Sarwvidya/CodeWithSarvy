#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const GithubSlugger = require('github-slugger');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');

/**
 * Extracts H2 and H3 headings from a markdown file.
 * Returns array of { level: 2|3, title: string, slug: string }
 */
function extractHeadings(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const headings = [];
  const slugger = new GithubSlugger();
  let inFrontmatter = false;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Frontmatter check
    if (i === 0 && line.trim() === '---') {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (line.trim() === '---') inFrontmatter = false;
      continue;
    }

    // Codeblock check
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // Match ## or ###
    const match = line.match(/^(\s*)(#{2,3})\s+(.*)$/);
    if (match) {
      const level = match[2].length;
      let rawTitle = match[3].trim();
      // Avoid navigation headings like [← Back...]
      if (rawTitle.startsWith('[←') || rawTitle.toLowerCase().includes('back to chapter')) {
        continue;
      }
      const slug = slugger.slug(rawTitle);
      headings.push({ level, title: rawTitle, slug });
    }
  }

  return headings;
}

/**
 * Generates the .card-toc markdown block from headings.
 */
function generateCardToc(headings, targetRelativeFile) {
  if (!headings || headings.length === 0) return '';
  const lines = ['<div class="card-toc">\n'];

  for (const h of headings) {
    const link = `./${path.basename(targetRelativeFile)}#${h.slug}`;
    const indent = h.level === 3 ? '  - ' : '- ';
    lines.push(`${indent}[${h.title}](${link})`);
  }

  lines.push('\n</div>\n');
  return lines.join('\n');
}

/**
 * Updates an index.md file's subtopic cards with generated TOCs.
 * Returns true if content was modified.
 */
function updateIndexFile(indexFilePath) {
  if (!fs.existsSync(indexFilePath)) return false;
  let content = fs.readFileSync(indexFilePath, 'utf8');
  const dir = path.dirname(indexFilePath);

  // Regex to match subtopic card from ### [...] down to <div class="card-actions">
  const cardRegex = /(###\s+\[.*?\]\(((\.\/)?[^)]+\.md)\))([\s\S]*?)(\s*<div class="card-actions">)/g;

  let matchCount = 0;
  const newContent = content.replace(cardRegex, (fullMatch, headerPart, targetFile, _, oldBody, actionsPart) => {
    matchCount++;
    const resolvedTarget = path.resolve(dir, targetFile);
    const headings = extractHeadings(resolvedTarget);

    if (headings.length === 0) {
      return fullMatch;
    }

    const tocBlock = generateCardToc(headings, targetFile);
    return `${headerPart.trim()}\n\n${tocBlock.trim()}\n\n  ${actionsPart.trimStart()}`;
  });

  if (content !== newContent) {
    fs.writeFileSync(indexFilePath, newContent, 'utf8');
    console.log(`[auto-card-toc] ✅ Updated ${matchCount} cards in: ${path.relative(ROOT_DIR, indexFilePath)}`);
    return true;
  }
  return false;
}

/**
 * Recursively finds all index.md files under a directory.
 */
function findIndexFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findIndexFiles(full));
    } else if (entry.name === 'index.md') {
      results.push(full);
    }
  }
  return results;
}

/**
 * Updates all index.md files across docs/
 */
function updateAllIndexes() {
  const allIndexes = findIndexFiles(DOCS_DIR);
  let updatedCount = 0;
  for (const idx of allIndexes) {
    if (updateIndexFile(idx)) {
      updatedCount++;
    }
  }
  return updatedCount;
}

/**
 * Starts a live file watcher on docs/ that updates the relevant index.md
 * immediately whenever any .md file is created or modified.
 */
function startWatcher() {
  console.log('[auto-card-toc] 👁️  Watching docs/ for changes to sync subtopic cards...');

  // Run an initial sync
  updateAllIndexes();

  const debounceTimers = new Map();

  try {
    const watcher = fs.watch(DOCS_DIR, { recursive: true }, (eventType, filename) => {
      if (!filename || !filename.endsWith('.md')) return;

      const baseName = path.basename(filename);
      // Ignore index.md itself to prevent re-triggering
      if (baseName === 'index.md') return;

      const fullPath = path.join(DOCS_DIR, filename);
      const dir = path.dirname(fullPath);
      const indexPath = path.join(dir, 'index.md');

      if (!fs.existsSync(indexPath)) return;

      // Debounce updates for this specific index.md by 150ms
      if (debounceTimers.has(indexPath)) {
        clearTimeout(debounceTimers.get(indexPath));
      }

      debounceTimers.set(
        indexPath,
        setTimeout(() => {
          debounceTimers.delete(indexPath);
          try {
            updateIndexFile(indexPath);
          } catch (err) {
            console.error(`[auto-card-toc] Error updating ${indexPath}:`, err.message);
          }
        }, 150)
      );
    });

    return watcher;
  } catch (err) {
    console.error('[auto-card-toc] Failed to start native watcher:', err);
    return null;
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes('--watch') || args.includes('-w')) {
    startWatcher();
  } else if (args[0] && args[0] !== 'all') {
    const targetPath = path.resolve(ROOT_DIR, args[0]);
    const indexPath = targetPath.endsWith('index.md') ? targetPath : path.join(targetPath, 'index.md');
    updateIndexFile(indexPath);
  } else {
    const count = updateAllIndexes();
    console.log(`[auto-card-toc] Synced cards in ${count} index files.`);
  }
}

module.exports = {
  extractHeadings,
  generateCardToc,
  updateIndexFile,
  updateAllIndexes,
  startWatcher,
};
