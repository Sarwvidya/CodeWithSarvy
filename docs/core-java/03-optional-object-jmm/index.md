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

<div class="card-toc">

- [1. Summary of All 11 Methods](./3.1-object-class-methods.md#1-summary-of-all-11-methods)
- [2. Shallow Copy vs Deep Copy with `clone()`](./3.1-object-class-methods.md#2-shallow-copy-vs-deep-copy-with-clone)

</div>

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

<div class="card-toc">

- [1. The Mathematical Contract](./3.2-equals-and-hashcode-contract.md#1-the-mathematical-contract)
- [2. What Breaks If You Override `equals()` Without `hashCode()`?](./3.2-equals-and-hashcode-contract.md#2-what-breaks-if-you-override-equals-without-hashcode)
  - [The Catastrophic Bug:](./3.2-equals-and-hashcode-contract.md#the-catastrophic-bug)
- [3. Idiomatic Implementation with `java.util.Objects`](./3.2-equals-and-hashcode-contract.md#3-idiomatic-implementation-with-javautilobjects)

</div>

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

<div class="card-toc">

- [1. Creating Optional Instances](./3.3-optional-class-in-depth.md#1-creating-optional-instances)
- [2. Functional Transformation Pipeline](./3.3-optional-class-in-depth.md#2-functional-transformation-pipeline)
- [3. `orElse()` vs `orElseGet()`: A Costly Trap](./3.3-optional-class-in-depth.md#3-orelse-vs-orelseget-a-costly-trap)
- [4. Critical Anti-Patterns to Avoid](./3.3-optional-class-in-depth.md#4-critical-anti-patterns-to-avoid)

</div>

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

<div class="card-toc">

- [1. JVM Runtime Data Areas Overview](./3.4-jvm-memory-model-architecture.md#1-jvm-runtime-data-areas-overview)
- [2. Deep Dive: Memory Regions](./3.4-jvm-memory-model-architecture.md#2-deep-dive-memory-regions)
  - [A. Java Heap](./3.4-jvm-memory-model-architecture.md#a-java-heap)
  - [B. Thread Stack (JVM Stack)](./3.4-jvm-memory-model-architecture.md#b-thread-stack-jvm-stack)
  - [C. Metaspace (Native Memory, Java 8+)](./3.4-jvm-memory-model-architecture.md#c-metaspace-native-memory-java-8)
  - [D. Program Counter (PC) Register](./3.4-jvm-memory-model-architecture.md#d-program-counter-pc-register)

</div>

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

<div class="card-toc">

- [1. The Core Problem: Hardware Caches & Reordering](./3.5-jmm-concurrency-and-volatile.md#1-the-core-problem-hardware-caches--reordering)
- [2. The `volatile` Keyword](./3.5-jmm-concurrency-and-volatile.md#2-the-volatile-keyword)
- [3. The "Happens-Before" Relationship](./3.5-jmm-concurrency-and-volatile.md#3-the-happens-before-relationship)

</div>

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
