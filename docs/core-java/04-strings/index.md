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

<div class="card-toc">

- [1. Why is String Immutable in Java?](./4.1-string-immutability-and-scp.md#1-why-is-string-immutable-in-java)
- [2. The String Constant Pool (SCP) Architecture](./4.1-string-immutability-and-scp.md#2-the-string-constant-pool-scp-architecture)

</div>

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

<div class="card-toc">

- [1. Feature Comparison Matrix](./4.2-string-vs-stringbuilder-vs-stringbuffer.md#1-feature-comparison-matrix)
- [2. The String Concatenation Anti-Pattern in Loops](./4.2-string-vs-stringbuilder-vs-stringbuffer.md#2-the-string-concatenation-anti-pattern-in-loops)

</div>

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

<div class="card-toc">

- [1. `==` vs `.equals()` vs `.compareTo()`](./4.3-string-comparison-and-interning.md#1--vs-equals-vs-compareto)
- [2. Compile-Time Literal Folding](./4.3-string-comparison-and-interning.md#2-compile-time-literal-folding)
- [3. The `.intern()` Method](./4.3-string-comparison-and-interning.md#3-the-intern-method)

</div>

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

<div class="card-toc">

- [1. Modern String Inspection (Java 11+)](./4.4-essential-string-methods.md#1-modern-string-inspection-java-11)
- [2. Advanced Whitespace Stripping: `strip()` vs `trim()`](./4.4-essential-string-methods.md#2-advanced-whitespace-stripping-strip-vs-trim)
- [3. Transformations & Multi-line Operations](./4.4-essential-string-methods.md#3-transformations--multi-line-operations)

</div>

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

<div class="card-toc">

- [1. Text Blocks (Java 15 LTS)](./4.5-text-blocks-and-compact-strings.md#1-text-blocks-java-15-lts)
  - [Incidental Whitespace Stripping](./4.5-text-blocks-and-compact-strings.md#incidental-whitespace-stripping)
  - [Escape Sequences in Text Blocks](./4.5-text-blocks-and-compact-strings.md#escape-sequences-in-text-blocks)
- [2. Compact Strings (Java 9 JVM Optimization)](./4.5-text-blocks-and-compact-strings.md#2-compact-strings-java-9-jvm-optimization)
  - [The Compact Strings Solution (JEP 254)](./4.5-text-blocks-and-compact-strings.md#the-compact-strings-solution-jep-254)

</div>

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
