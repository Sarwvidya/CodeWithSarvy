---
title: "Chapter 7: Multithreading & Concurrency"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/multithreading
---

# Chapter 7: Multithreading & Concurrency

Concurrency enables modern high-throughput Java applications to exploit multi-core CPUs and manage asynchronous tasks. Understanding OS thread lifecycles, memory visibility, synchronization monitors, executor pools, coordinate synchronizers, and modern Java 21 virtual threads is essential for building scalable backend systems.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Foundations & Lifecycle</span>
    <span class="card-step">7.1</span>
  </div>
  <div class="card-icon">🧵</div>

### [7.1 Thread Creation & 6 Lifecycle States](./7.1-thread-creation-and-lifecycle.md)

Processes vs threads, `Thread` vs `Runnable` vs `Callable<V>`, the 6 JVM thread lifecycle states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED), and daemon threads.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.1-thread-creation-and-lifecycle" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Locking & Mutual Exclusion</span>
    <span class="card-step">7.2</span>
  </div>
  <div class="card-icon">🔐</div>

### [7.2 Thread Synchronization & Locks](./7.2-thread-synchronization-and-locks.md)

Critical sections, intrinsic monitor locks (`synchronized`), `wait()`, `notify()`, `notifyAll()`, `ReentrantLock`, `ReadWriteLock`, and deadlock prevention algorithms.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.2-thread-synchronization-and-locks" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Hardware & Memory</span>
    <span class="card-step">7.3</span>
  </div>
  <div class="card-icon">👁️</div>

### [7.3 Volatile & Atomic Variables](./7.3-volatile-and-atomic-variables.md)

CPU cache coherence, instruction reordering, `volatile` memory barriers (happens-before visibility), and hardware-level lock-free CAS (`AtomicInteger`, `AtomicReference`).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.3-volatile-and-atomic-variables" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Thread Pooling & Sizing</span>
    <span class="card-step">7.4</span>
  </div>
  <div class="card-icon">⚙️</div>

### [7.4 Executors & Thread Pools](./7.4-executors-and-thread-pools.md)

`ExecutorService`, `ThreadPoolExecutor` internal tuning (corePoolSize, maxPoolSize, blocking queues, rejection handlers), CPU vs I/O pool sizing, and clean shutdown.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.4-executors-and-thread-pools" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Coordination Utilities</span>
    <span class="card-step">7.5</span>
  </div>
  <div class="card-icon">🚦</div>

### [7.5 Synchronizers & Concurrent Tools](./7.5-synchronizers-and-concurrent-tools.md)

Thread coordination with `CountDownLatch` (one-shot release), `CyclicBarrier` (multi-phase barriers), `Semaphore` (rate limiting), and `BlockingQueue` (producer-consumer).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.5-synchronizers-and-concurrent-tools" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Next-Gen Concurrency</span>
    <span class="card-step">7.6</span>
  </div>
  <div class="card-icon">🚀</div>

### [7.6 Virtual Threads & Structured Concurrency](./7.6-virtual-threads-and-structured-concurrency.md)

Java 21 Project Loom: 1:1 OS threads vs M:N Virtual Threads, Carrier Thread continuation unmounting during blocking I/O, and Structured Task Scopes.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-multithreading%2F7.6-virtual-threads-and-structured-concurrency" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
