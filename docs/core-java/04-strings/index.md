---
title: "Chapter 4: Strings in Java"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/strings
---

# Chapter 4: Strings in Java

In Java, strings are first-class immutable objects backed by special JVM memory regions. Understanding String immutability, the String Constant Pool (SCP), mutable string builders, and modern compact string representation is essential for writing memory-efficient, performant enterprise code.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory Optimization</span>
    <span class="card-step">4.1</span>
  </div>
  <div class="card-icon">🪢</div>

### [4.1 String Immutability & the String Pool](./4.1-string-immutability-and-scp.md)

Why Strings are final & immutable, memory conservation via the String Constant Pool (SCP) in Heap, security implications, and thread-safety guarantees.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-strings%2F4.1-string-immutability-and-scp" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Performance & Mutability</span>
    <span class="card-step">4.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [4.2 String vs StringBuilder vs StringBuffer](./4.2-string-vs-stringbuilder-vs-stringbuffer.md)

Comparing mutability, internal `byte[]` buffer growth algorithms, thread-safety benchmarks, and when to avoid the `+` concatenation operator in loops.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-strings%2F4.2-string-vs-stringbuilder-vs-stringbuffer" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Equality & Interning</span>
    <span class="card-step">4.3</span>
  </div>
  <div class="card-icon">🔍</div>

### [4.3 String Equality & .intern() Mechanics](./4.3-string-comparison-and-interning.md)

The difference between `==` (reference identity) and `.equals()` (content equivalence), explicit pool caching with `.intern()`, and compile-time literal folding.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-strings%2F4.3-string-comparison-and-interning" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Standard API</span>
    <span class="card-step">4.4</span>
  </div>
  <div class="card-icon">🛠️</div>

### [4.4 Essential Modern String Methods](./4.4-essential-string-methods.md)

Modern String manipulation: `strip()`, `isBlank()`, `lines()`, `repeat()`, `join()`, `replace()`, and high-throughput regex matching patterns.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-strings%2F4.4-essential-string-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Modern JVM Features</span>
    <span class="card-step">4.5</span>
  </div>
  <div class="card-icon">📄</div>

### [4.5 Text Blocks & Compact Strings](./4.5-text-blocks-and-compact-strings.md)

Multi-line Text Blocks (`"""`) with automated whitespace stripping, and JVM internal Compact Strings (Latin-1 1-byte vs UTF-16 2-byte encoding flag).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-strings%2F4.5-text-blocks-and-compact-strings" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 4: Strings in Java** is a collapsible dropdown containing all subtopics from `4.1` to `4.5`.
2. In Obsidian, expand the `04-strings` folder inside `core-java` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 4 overview.
