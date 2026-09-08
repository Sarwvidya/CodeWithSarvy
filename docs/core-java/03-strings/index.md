---
title: "Chapter 3: Strings in Java"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/strings
---

# Chapter 3: Strings in Java

In Java, strings are first-class immutable objects backed by special JVM memory regions. Understanding String immutability, the String Constant Pool (SCP), mutable string builders, and modern compact string representation is essential for writing memory-efficient, performant enterprise code.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory Optimization</span>
    <span class="card-step">3.1</span>
  </div>
  <div class="card-icon">🪢</div>

### [3.1 String Immutability & the String Pool](./3.1-string-immutability-and-scp.md)

<div class="card-toc">

- [1. Why is String Immutable in Java?](./3.1-string-immutability-and-scp.md#1-why-is-string-immutable-in-java)
- [2. The String Constant Pool (SCP) Architecture](./3.1-string-immutability-and-scp.md#2-the-string-constant-pool-scp-architecture)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-strings%2F3.1-string-immutability-and-scp" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Performance & Mutability</span>
    <span class="card-step">3.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [3.2 String vs StringBuilder vs StringBuffer](./3.2-string-vs-stringbuilder-vs-stringbuffer.md)

<div class="card-toc">

- [1. Feature Comparison Matrix](./3.2-string-vs-stringbuilder-vs-stringbuffer.md#1-feature-comparison-matrix)
- [2. The String Concatenation Anti-Pattern in Loops](./3.2-string-vs-stringbuilder-vs-stringbuffer.md#2-the-string-concatenation-anti-pattern-in-loops)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-strings%2F3.2-string-vs-stringbuilder-vs-stringbuffer" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Equality & Interning</span>
    <span class="card-step">3.3</span>
  </div>
  <div class="card-icon">🔍</div>

### [3.3 String Equality & .intern() Mechanics](./3.3-string-comparison-and-interning.md)

<div class="card-toc">

- [1. `==` vs `.equals()` vs `.compareTo()`](./3.3-string-comparison-and-interning.md#1--vs-equals-vs-compareto)
- [2. Compile-Time Literal Folding](./3.3-string-comparison-and-interning.md#2-compile-time-literal-folding)
- [3. The `.intern()` Method](./3.3-string-comparison-and-interning.md#3-the-intern-method)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-strings%2F3.3-string-comparison-and-interning" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Standard API</span>
    <span class="card-step">3.4</span>
  </div>
  <div class="card-icon">🛠️</div>

### [3.4 Essential Modern String Methods](./3.4-essential-string-methods.md)

<div class="card-toc">

- [1. Modern String Inspection (Java 11+)](./3.4-essential-string-methods.md#1-modern-string-inspection-java-11)
- [2. Advanced Whitespace Stripping: `strip()` vs `trim()`](./3.4-essential-string-methods.md#2-advanced-whitespace-stripping-strip-vs-trim)
- [3. Transformations & Multi-line Operations](./3.4-essential-string-methods.md#3-transformations--multi-line-operations)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-strings%2F3.4-essential-string-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Modern JVM Features</span>
    <span class="card-step">3.5</span>
  </div>
  <div class="card-icon">📄</div>

### [3.5 Text Blocks & Compact Strings](./3.5-text-blocks-and-compact-strings.md)

<div class="card-toc">

- [1. Text Blocks (Java 15 LTS)](./3.5-text-blocks-and-compact-strings.md#1-text-blocks-java-15-lts)
  - [Incidental Whitespace Stripping](./3.5-text-blocks-and-compact-strings.md#incidental-whitespace-stripping)
  - [Escape Sequences in Text Blocks](./3.5-text-blocks-and-compact-strings.md#escape-sequences-in-text-blocks)
- [2. Compact Strings (Java 9 JVM Optimization)](./3.5-text-blocks-and-compact-strings.md#2-compact-strings-java-9-jvm-optimization)
  - [The Compact Strings Solution (JEP 254)](./3.5-text-blocks-and-compact-strings.md#the-compact-strings-solution-jep-254)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-strings%2F3.5-text-blocks-and-compact-strings" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
