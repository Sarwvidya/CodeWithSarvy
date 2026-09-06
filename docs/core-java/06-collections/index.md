---
title: "Chapter 6: Collections Framework"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/collections
---

# Chapter 6: Collections Framework

The Java Collections Framework (`java.util`) provides a standardized architecture for representing and manipulating groups of objects. Mastering its interfaces, dynamic arrays, hash tables, balanced binary search trees, queues, and thread-safe concurrent variants is vital for building performant enterprise backend systems.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Architecture & Hierarchy</span>
    <span class="card-step">6.1</span>
  </div>
  <div class="card-icon">🗂️</div>

### [6.1 Collections Framework Overview](./6.1-collections-framework-overview.md)

`Iterable`, `Collection`, `List`, `Set`, `Queue`, `Deque` hierarchies, core interface contracts, and Big-O computational time & space complexity comparisons.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.1-collections-framework-overview" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Ordered Sequences</span>
    <span class="card-step">6.2</span>
  </div>
  <div class="card-icon">📋</div>

### [6.2 List Implementations](./6.2-list-implementations.md)

`ArrayList` (dynamic array resizing, amortized O(1), `System.arraycopy`), `LinkedList` (doubly-linked nodes, cache locality trade-offs), `Vector` and `Stack`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.2-list-implementations" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Uniqueness & Sets</span>
    <span class="card-step">6.3</span>
  </div>
  <div class="card-icon">🎯</div>

### [6.3 Set Implementations & Uniqueness](./6.3-set-implementations-and-uniqueness.md)

`HashSet` (backed by HashMap, hashing contract), `LinkedHashSet` (insertion-ordered doubly-linked buckets), and `TreeSet` (`NavigableSet`, Red-Black tree sorting).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.3-set-implementations-and-uniqueness" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Queues & Buffers</span>
    <span class="card-step">6.4</span>
  </div>
  <div class="card-icon">⏳</div>

### [6.4 Queue & Deque Implementations](./6.4-queue-and-deque-implementations.md)

FIFO queues, double-ended queues (`Deque`), `PriorityQueue` (binary min-heap array), and `ArrayDeque` (resizing circular array preferred over Stack & LinkedList).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.4-queue-and-deque-implementations" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Key-Value Internals</span>
    <span class="card-step">6.5</span>
  </div>
  <div class="card-icon">🗺️</div>

### [6.5 Map Hierarchy & HashMap Internals](./6.5-map-hierarchy-and-hashmap-internals.md)

`Map` contract, `HashMap` internal architecture (buckets, hash bit spreading, treeification threshold 8, load factor 0.75), `LinkedHashMap` (LRU cache), and `TreeMap`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.5-map-hierarchy-and-hashmap-internals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Thread-Safety & Immutable</span>
    <span class="card-step">6.6</span>
  </div>
  <div class="card-icon">⚡</div>

### [6.6 Concurrent & Specialized Collections](./6.6-concurrent-and-specialized-collections.md)

`ConcurrentHashMap` (CAS + synchronized buckets, no global table lock), `CopyOnWriteArrayList`, `Collections.synchronizedMap` vs Concurrent, and Java 9+ `List.of()` / `Set.of()` / `Map.of()`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections%2F6.6-concurrent-and-specialized-collections" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
