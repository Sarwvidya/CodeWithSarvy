---
title: "Chapter 2: Java Overview & Memory Model"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/java-overview
---

# Chapter 2: Java Overview & Memory Model

Java is a mature, high-performance, object-oriented language designed with the "Write Once, Run Anywhere" (WORA) philosophy. Understanding its runtime architecture, execution pipeline, type system, root Object lifecycle contracts, and the Java Memory Model (JMM) is foundational for modern backend engineering.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Runtime Architecture</span>
    <span class="card-step">2.1</span>
  </div>
  <div class="card-icon">☕</div>

### [2.1 JDK vs JRE vs JVM](./2.1-jdk-jre-jvm-architecture.md)

<div class="card-toc">

- [1. Architectural Relationship](./2.1-jdk-jre-jvm-architecture.md#1-architectural-relationship)
  - [Breakdown:](./2.1-jdk-jre-jvm-architecture.md#breakdown)
- [2. "Write Once, Run Anywhere" (WORA)](./2.1-jdk-jre-jvm-architecture.md#2-write-once-run-anywhere-wora)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.1-jdk-jre-jvm-architecture" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Execution Engine</span>
    <span class="card-step">2.2</span>
  </div>
  <div class="card-icon">⚙️</div>

### [2.2 Bytecode & Execution Engine](./2.2-bytecode-and-execution-engine.md)

<div class="card-toc">

- [1. Class Loading Mechanism (The 3 Phases)](./2.2-bytecode-and-execution-engine.md#1-class-loading-mechanism-the-3-phases)
- [2. The Execution Engine: Interpreter vs JIT Compiler](./2.2-bytecode-and-execution-engine.md#2-the-execution-engine-interpreter-vs-jit-compiler)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.2-bytecode-and-execution-engine" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Type System</span>
    <span class="card-step">2.3</span>
  </div>
  <div class="card-icon">🔢</div>

### [2.3 Data Types, Primitives & Wrappers](./2.3-data-types-and-variables.md)

<div class="card-toc">

- [1. The 8 Primitive Types in Java](./2.3-data-types-and-variables.md#1-the-8-primitive-types-in-java)
- [2. Autoboxing & The Integer Cache Trap](./2.3-data-types-and-variables.md#2-autoboxing--the-integer-cache-trap)
  - [The Integer Cache Gotcha (`-128` to `127`)](./2.3-data-types-and-variables.md#the-integer-cache-gotcha--128-to-127)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.3-data-types-and-variables" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Logic & Control Flow</span>
    <span class="card-step">2.4</span>
  </div>
  <div class="card-icon">🔀</div>

### [2.4 Operators & Modern Control Flow](./2.4-control-flow-and-operators.md)

<div class="card-toc">

- [1. Short-Circuit Logical Operators](./2.4-control-flow-and-operators.md#1-short-circuit-logical-operators)
- [2. Modern Switch Expressions (Java 14+)](./2.4-control-flow-and-operators.md#2-modern-switch-expressions-java-14)
- [3. Pattern Matching for Switch (Java 21 LTS)](./2.4-control-flow-and-operators.md#3-pattern-matching-for-switch-java-21-lts)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.4-control-flow-and-operators" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Call Semantics</span>
    <span class="card-step">2.5</span>
  </div>
  <div class="card-icon">📦</div>

### [2.5 Methods & Pass-by-Value Semantics](./2.5-methods-and-pass-by-value.md)

<div class="card-toc">

- [1. The Definitive Proof: References are Passed by Value](./2.5-methods-and-pass-by-value.md#1-the-definitive-proof-references-are-passed-by-value)
  - [Memory Trace:](./2.5-methods-and-pass-by-value.md#memory-trace)
- [2. Varargs (Variable-Length Arguments)](./2.5-methods-and-pass-by-value.md#2-varargs-variable-length-arguments)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.5-methods-and-pass-by-value" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Modern Features</span>
    <span class="card-step">2.6</span>
  </div>
  <div class="card-icon">🚀</div>

### [2.6 Java Evolution & LTS Features](./2.6-java-evolution-and-lts-features.md)

<div class="card-toc">

- [1. Landmark LTS Versions Overview](./2.6-java-evolution-and-lts-features.md#1-landmark-lts-versions-overview)
- [2. Core Breakthroughs in Recent Java](./2.6-java-evolution-and-lts-features.md#2-core-breakthroughs-in-recent-java)
  - [A. Records (Java 16)](./2.6-java-evolution-and-lts-features.md#a-records-java-16)
  - [B. Sealed Classes (Java 17)](./2.6-java-evolution-and-lts-features.md#b-sealed-classes-java-17)
  - [C. Sequenced Collections (Java 21)](./2.6-java-evolution-and-lts-features.md#c-sequenced-collections-java-21)
  - [D. Virtual Threads (Java 21 LTS - Project Loom)](./2.6-java-evolution-and-lts-features.md#d-virtual-threads-java-21-lts---project-loom)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.6-java-evolution-and-lts-features" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Root Hierarchy</span>
    <span class="card-step">2.7</span>
  </div>
  <div class="card-icon">👑</div>

### [2.7 java.lang.Object Core Methods](./2.7-object-class-methods.md)

<div class="card-toc">

- [1. Summary of All 11 Methods](./2.7-object-class-methods.md#1-summary-of-all-11-methods)
- [2. Shallow Copy vs Deep Copy with `clone()`](./2.7-object-class-methods.md#2-shallow-copy-vs-deep-copy-with-clone)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.7-object-class-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Object Equality</span>
    <span class="card-step">2.8</span>
  </div>
  <div class="card-icon">⚖️</div>

### [2.8 The equals() & hashCode() Contract](./2.8-equals-and-hashcode-contract.md)

<div class="card-toc">

- [1. The Mathematical Contract](./2.8-equals-and-hashcode-contract.md#1-the-mathematical-contract)
- [2. What Breaks If You Override `equals()` Without `hashCode()`?](./2.8-equals-and-hashcode-contract.md#2-what-breaks-if-you-override-equals-without-hashcode)
  - [The Catastrophic Bug:](./2.8-equals-and-hashcode-contract.md#the-catastrophic-bug)
- [3. Idiomatic Implementation with `java.util.Objects`](./2.8-equals-and-hashcode-contract.md#3-idiomatic-implementation-with-javautilobjects)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.8-equals-and-hashcode-contract" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Memory Layout</span>
    <span class="card-step">2.9</span>
  </div>
  <div class="card-icon">🧠</div>

### [2.9 JVM Memory Model Architecture](./2.9-jvm-memory-model-architecture.md)

<div class="card-toc">

- [1. JVM Runtime Data Areas Overview](./2.9-jvm-memory-model-architecture.md#1-jvm-runtime-data-areas-overview)
- [2. Deep Dive: Memory Regions](./2.9-jvm-memory-model-architecture.md#2-deep-dive-memory-regions)
  - [A. Java Heap](./2.9-jvm-memory-model-architecture.md#a-java-heap)
  - [B. Thread Stack (JVM Stack)](./2.9-jvm-memory-model-architecture.md#b-thread-stack-jvm-stack)
  - [C. Metaspace (Native Memory, Java 8+)](./2.9-jvm-memory-model-architecture.md#c-metaspace-native-memory-java-8)
  - [D. Program Counter (PC) Register](./2.9-jvm-memory-model-architecture.md#d-program-counter-pc-register)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.9-jvm-memory-model-architecture" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Concurrency & JMM</span>
    <span class="card-step">2.10</span>
  </div>
  <div class="card-icon">⚡</div>

### [2.10 JMM Concurrency, Volatile & Memory Barriers](./2.10-jmm-concurrency-and-volatile.md)

<div class="card-toc">

- [1. The Core Problem: Hardware Caches & Reordering](./2.10-jmm-concurrency-and-volatile.md#1-the-core-problem-hardware-caches--reordering)
- [2. The `volatile` Keyword](./2.10-jmm-concurrency-and-volatile.md#2-the-volatile-keyword)
- [3. The "Happens-Before" Relationship](./2.10-jmm-concurrency-and-volatile.md#3-the-happens-before-relationship)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F02-java-overview%2F2.10-jmm-concurrency-and-volatile" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
