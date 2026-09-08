---
title: "Chapter 5: Collections Framework"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/collections
---

# Chapter 5: Collections Framework

The Java Collections Framework (`java.util`) provides a standardized architecture for representing and manipulating groups of objects. Mastering its interfaces, dynamic arrays, hash tables, balanced binary search trees, queues, and thread-safe concurrent variants is vital for building performant enterprise backend systems.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Architecture & Hierarchy</span>
    <span class="card-step">5.1</span>
  </div>
  <div class="card-icon">🗂️</div>

### [5.1 Collections Framework Overview](./5.1-collections-framework-overview.md)

<div class="card-toc">

- [1. Top-Level Hierarchy Architecture](./5.1-collections-framework-overview.md#1-top-level-hierarchy-architecture)
- [2. Core Interfaces & Characteristics](./5.1-collections-framework-overview.md#2-core-interfaces--characteristics)
- [3. Algorithmic Complexity Comparison](./5.1-collections-framework-overview.md#3-algorithmic-complexity-comparison)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.1-collections-framework-overview" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Ordered Sequences</span>
    <span class="card-step">5.2</span>
  </div>
  <div class="card-icon">📋</div>

### [5.2 List Implementations](./5.2-list-implementations.md)

<div class="card-toc">

- [1. ArrayList: Dynamic Resizable Array](./5.2-list-implementations.md#1-arraylist-dynamic-resizable-array)
  - [Internal Growth Policy (Java 8–21)](./5.2-list-implementations.md#internal-growth-policy-java-821)
- [2. LinkedList: Doubly-Linked List](./5.2-list-implementations.md#2-linkedlist-doubly-linked-list)
  - [Memory Overhead & CPU Cache Locality](./5.2-list-implementations.md#memory-overhead--cpu-cache-locality)
- [3. Vector and Stack: Legacy Synchronization](./5.2-list-implementations.md#3-vector-and-stack-legacy-synchronization)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.2-list-implementations" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Uniqueness & Sets</span>
    <span class="card-step">5.3</span>
  </div>
  <div class="card-icon">🎯</div>

### [5.3 Set Implementations & Uniqueness](./5.3-set-implementations-and-uniqueness.md)

<div class="card-toc">

- [1. HashSet: Internal Backing by HashMap](./5.3-set-implementations-and-uniqueness.md#1-hashset-internal-backing-by-hashmap)
- [2. LinkedHashSet: Predictable Insertion Order](./5.3-set-implementations-and-uniqueness.md#2-linkedhashset-predictable-insertion-order)
- [3. TreeSet: Sorted & Navigable (Red-Black Tree)](./5.3-set-implementations-and-uniqueness.md#3-treeset-sorted--navigable-red-black-tree)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.3-set-implementations-and-uniqueness" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Queues & Buffers</span>
    <span class="card-step">5.4</span>
  </div>
  <div class="card-icon">⏳</div>

### [5.4 Queue & Deque Implementations](./5.4-queue-and-deque-implementations.md)

<div class="card-toc">

- [1. Queue vs Deque Interface Contracts](./5.4-queue-and-deque-implementations.md#1-queue-vs-deque-interface-contracts)
- [2. ArrayDeque: High-Performance Resizing Circular Array](./5.4-queue-and-deque-implementations.md#2-arraydeque-high-performance-resizing-circular-array)
- [3. PriorityQueue: Binary Min-Heap](./5.4-queue-and-deque-implementations.md#3-priorityqueue-binary-min-heap)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.4-queue-and-deque-implementations" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Key-Value Internals</span>
    <span class="card-step">5.5</span>
  </div>
  <div class="card-icon">🗺️</div>

### [5.5 Map Hierarchy & HashMap Internals](./5.5-map-hierarchy-and-hashmap-internals.md)

<div class="card-toc">

- [1. Internal Architecture: Buckets & Treeification (Java 8+)](./5.5-map-hierarchy-and-hashmap-internals.md#1-internal-architecture-buckets--treeification-java-8)
  - [Key Internal Parameters](./5.5-map-hierarchy-and-hashmap-internals.md#key-internal-parameters)
- [2. Hash Calculation & Index Bitmasking](./5.5-map-hierarchy-and-hashmap-internals.md#2-hash-calculation--index-bitmasking)
- [3. LinkedHashMap & TreeMap](./5.5-map-hierarchy-and-hashmap-internals.md#3-linkedhashmap--treemap)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.5-map-hierarchy-and-hashmap-internals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Thread-Safety & Immutable</span>
    <span class="card-step">5.6</span>
  </div>
  <div class="card-icon">⚡</div>

### [5.6 Concurrent & Specialized Collections](./5.6-concurrent-and-specialized-collections.md)

<div class="card-toc">

- [1. ConcurrentHashMap: Lock-Free Reads & Fine-Grained Locking](./5.6-concurrent-and-specialized-collections.md#1-concurrenthashmap-lock-free-reads--fine-grained-locking)
- [2. CopyOnWriteArrayList: Thread-Safe Read-Heavy Lists](./5.6-concurrent-and-specialized-collections.md#2-copyonwritearraylist-thread-safe-read-heavy-lists)
- [3. Java 9+ Immutable Factory Methods](./5.6-concurrent-and-specialized-collections.md#3-java-9-immutable-factory-methods)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-collections%2F5.6-concurrent-and-specialized-collections" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
