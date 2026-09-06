---
title: "Chapter 6: Collections & Multithreading"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/collections-and-multithreading
---

# Chapter 6: Collections & Multithreading

The Java Collections Framework and Concurrency utilities form the computational engine of scalable enterprise backends. Master in-memory data structures, HashMap bucket collision trees, thread synchronization mechanisms, thread pools, and Java 21's groundbreaking Virtual Threads.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Data Structures</span>
    <span class="card-step">6.1</span>
  </div>
  <div class="card-icon">📚</div>

### [6.1 Collections Framework Architecture](./6.1-collections-framework-overview.md)

Analyze `Iterable`, `Collection`, `List` (ArrayList vs LinkedList), `Set` (HashSet vs TreeSet), and `Queue`/`Deque` with time and space complexity tradeoffs.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.1-collections-framework-overview" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Data Internals</span>
    <span class="card-step">6.2</span>
  </div>
  <div class="card-icon">🗺️</div>

### [6.2 HashMap Internals & ConcurrentHashMap](./6.2-hashmap-internals-and-concurrenthashmap.md)

Buckets, load factors, collision resolution, Java 8 Red-Black TreeBin conversion (TREEIFY_THRESHOLD = 8), and `ConcurrentHashMap` CAS/synchronized striping.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.2-hashmap-internals-and-concurrenthashmap" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Thread Primitives</span>
    <span class="card-step">6.3</span>
  </div>
  <div class="card-icon">🧵</div>

### [6.3 Thread Lifecycle & Creation](./6.3-thread-creation-and-lifecycle.md)

OS threads vs JVM threads, the 6 lifecycle states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED), and `Runnable` vs `Callable<V>`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.3-thread-creation-and-lifecycle" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Concurrency Control</span>
    <span class="card-step">6.4</span>
  </div>
  <div class="card-icon">🔐</div>

### [6.4 Synchronization, Locks & Deadlocks](./6.4-thread-synchronization-and-locks.md)

Intrinsic monitor locks (`synchronized`), explicit lock mechanics (`ReentrantLock`, `ReadWriteLock`), race condition prevention, and deadlock diagnostics.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.4-thread-synchronization-and-locks" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Executor Framework</span>
    <span class="card-step">6.5</span>
  </div>
  <div class="card-icon">⚙️</div>

### [6.5 Thread Pools & ExecutorService](./6.5-concurrent-utilities-and-executors.md)

Why manual thread spawning fails at scale, `ThreadPoolExecutor` internal worker queues, sizing formulas, and synchronizers (`CountDownLatch`, `CompletableFuture`).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.5-concurrent-utilities-and-executors" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Modern Concurrency</span>
    <span class="card-step">6.6</span>
  </div>
  <div class="card-icon">🚀</div>

### [6.6 Virtual Threads (Java 21 Project Loom)](./6.6-virtual-threads-java-21.md)

High-throughput lightweight concurrency: Platform threads vs Virtual threads, Carrier threads, Continuation unmounting on blocking IO, and spring integration.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-collections-and-multithreading%2F6.6-virtual-threads-java-21" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 6: Collections & Multithreading** is a collapsible dropdown containing all subtopics from `6.1` to `6.6`.
2. In Obsidian, expand the `06-collections-and-multithreading` folder inside `core-java` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 6 overview.
