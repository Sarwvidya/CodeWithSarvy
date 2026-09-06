---
title: "Chapter 3: Optional Class, Object Class & JMM"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/optional-object-jmm
---

# Chapter 3: Optional Class, Object Class & JMM

Deepen your engineering understanding of Java's foundational building blocks: the root `Object` class contracts, modern null-safe functional design with `Optional<T>`, and the internal mechanics of the JVM Memory Model (JMM).

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Root Hierarchy</span>
    <span class="card-step">3.1</span>
  </div>
  <div class="card-icon">👑</div>

### [3.1 java.lang.Object Core Methods](./3.1-object-class-methods.md)

Master the root of the Java class hierarchy: `toString()`, `clone()` mechanics, shallow vs deep copying, `getClass()`, and monitor synchronization primitives.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-optional-object-jmm%2F3.1-object-class-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Data Equality</span>
    <span class="card-step">3.2</span>
  </div>
  <div class="card-icon">⚖️</div>

### [3.2 The equals() & hashCode() Contract](./3.2-equals-and-hashcode-contract.md)

Mathematical rules of equivalence (reflexive, symmetric, transitive, consistent), hash bucket indexing, and memory leaks in `HashMap`/`HashSet`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-optional-object-jmm%2F3.2-equals-and-hashcode-contract" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Null Safety</span>
    <span class="card-step">3.3</span>
  </div>
  <div class="card-icon">🛡️</div>

### [3.3 Optional&lt;T&gt; Class & Best Practices](./3.3-optional-class-in-depth.md)

Functional null defense: `map`, `flatMap`, `filter`, `orElse` vs `orElseGet`, and critical anti-patterns (never use as field or parameter).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-optional-object-jmm%2F3.3-optional-class-in-depth" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Memory Topology</span>
    <span class="card-step">3.4</span>
  </div>
  <div class="card-icon">🧠</div>

### [3.4 JVM Memory Model Architecture](./3.4-jvm-memory-model-architecture.md)

Runtime Data Areas breakdown: Thread Stacks, Heap (Young: Eden/Survivor, Old: Tenured), Metaspace vs PermGen, PC Registers, and Native Stacks.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-optional-object-jmm%2F3.4-jvm-memory-model-architecture" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Concurrency Semantics</span>
    <span class="card-step">3.5</span>
  </div>
  <div class="card-icon">⚡</div>

### [3.5 JMM Concurrency, Volatile & Barriers](./3.5-jmm-concurrency-and-volatile.md)

Multithreaded memory semantics: CPU caches, Cache lines, False Sharing, the `volatile` keyword, Memory Barriers, and the Happens-Before relationship.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F03-optional-object-jmm%2F3.5-jmm-concurrency-and-volatile" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 3: Optional Class, Object Class & JMM** is a collapsible dropdown containing all subtopics from `3.1` to `3.5`.
2. In Obsidian, expand the `03-optional-object-jmm` folder inside `core-java` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 3 overview.
