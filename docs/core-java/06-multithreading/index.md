---
title: "Chapter 6: Multithreading & Concurrency"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/multithreading
---

# Chapter 6: Multithreading & Concurrency

Concurrency enables modern high-throughput Java applications to exploit multi-core CPUs and manage asynchronous tasks. Understanding OS thread lifecycles, memory visibility, synchronization monitors, executor pools, coordinate synchronizers, and modern Java 21 virtual threads is essential for building scalable backend systems.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Foundations & Lifecycle</span>
    <span class="card-step">6.1</span>
  </div>
  <div class="card-icon">🧵</div>

### [6.1 Thread Creation & 6 Lifecycle States](./6.1-thread-creation-and-lifecycle.md)

<div class="card-toc">

- [1. Process vs Thread](./6.1-thread-creation-and-lifecycle.md#1-process-vs-thread)
- [2. Ways to Define and Launch Threads](./6.1-thread-creation-and-lifecycle.md#2-ways-to-define-and-launch-threads)
  - [2.1. Approach 1: Extending Thread class](./6.1-thread-creation-and-lifecycle.md#21-approach-1-extending-thread-class)
  - [2.2. Approach 2: Implementing Runnable (Preferred over extending Thread)](./6.1-thread-creation-and-lifecycle.md#22-approach-2-implementing-runnable-preferred-over-extending-thread)
  - [2.3 Approach 3: `Callable<V>` with `Future<V>` (Returns a value, throws checked exceptions)](./6.1-thread-creation-and-lifecycle.md#23-approach-3-callablev-with-futurev-returns-a-value-throws-checked-exceptions)
- [3. Daemon vs User Threads](./6.1-thread-creation-and-lifecycle.md#3-daemon-vs-user-threads)
- [4. Runnable, Callable, & Future](./6.1-thread-creation-and-lifecycle.md#4-runnable-callable--future)
  - [Runnable -](./6.1-thread-creation-and-lifecycle.md#runnable--)
  - [Callable -](./6.1-thread-creation-and-lifecycle.md#callable--)
  - [Future -](./6.1-thread-creation-and-lifecycle.md#future--)
- [5. The 6 JVM Thread Lifecycle States (`Thread.State`)](./6.1-thread-creation-and-lifecycle.md#5-the-6-jvm-thread-lifecycle-states-threadstate)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.1-thread-creation-and-lifecycle" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Locking & Mutual Exclusion</span>
    <span class="card-step">6.2</span>
  </div>
  <div class="card-icon">🔐</div>

### [6.2 Thread Synchronization & Locks](./6.2-thread-synchronization-and-locks.md)

<div class="card-toc">

- [Synchronization](./6.2-thread-synchronization-and-locks.md#synchronization)
- [Problems that Synchronization solves](./6.2-thread-synchronization-and-locks.md#problems-that-synchronization-solves)
  - [1. Race Condition — the biggest problem ✅](./6.2-thread-synchronization-and-locks.md#1-race-condition--the-biggest-problem-)
  - [2. Data Inconsistency ✅](./6.2-thread-synchronization-and-locks.md#2-data-inconsistency-)
  - [3. Lost Update ✅](./6.2-thread-synchronization-and-locks.md#3-lost-update-)
  - [4. Visibility Problem ✅](./6.2-thread-synchronization-and-locks.md#4-visibility-problem-)
  - [5. Atomicity Problem ✅](./6.2-thread-synchronization-and-locks.md#5-atomicity-problem-)
  - [6. Deadlock — Synchronization doesn't solve it ❌](./6.2-thread-synchronization-and-locks.md#6-deadlock--synchronization-doesnt-solve-it-)
  - [7. Starvation ❌](./6.2-thread-synchronization-and-locks.md#7-starvation-)
  - [8. Livelock ❌](./6.2-thread-synchronization-and-locks.md#8-livelock-)
- [Locks](./6.2-thread-synchronization-and-locks.md#locks)
  - [What does a lock actually provide?](./6.2-thread-synchronization-and-locks.md#what-does-a-lock-actually-provide)
- [Lock vs synchronized](./6.2-thread-synchronization-and-locks.md#lock-vs-synchronized)
  - [Inter-Thread Signaling: `wait()`, `notify()`, and `notifyAll()`](./6.2-thread-synchronization-and-locks.md#inter-thread-signaling-wait-notify-and-notifyall)
  - [Explicit Locks: `java.util.concurrent.locks`](./6.2-thread-synchronization-and-locks.md#explicit-locks-javautilconcurrentlocks)
  - [`ReentrantLock` Capabilities](./6.2-thread-synchronization-and-locks.md#reentrantlock-capabilities)
  - [`ReentrantReadWriteLock`](./6.2-thread-synchronization-and-locks.md#reentrantreadwritelock)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.2-thread-synchronization-and-locks" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Hardware & Memory</span>
    <span class="card-step">6.3</span>
  </div>
  <div class="card-icon">👁️</div>

### [6.3 Volatile & Atomic Variables](./6.3-volatile-and-atomic-variables.md)

<div class="card-toc">

- [1. The `volatile` Keyword: Visibility & Reordering](./6.3-volatile-and-atomic-variables.md#1-the-volatile-keyword-visibility--reordering)
  - [What `volatile` Guarantees:](./6.3-volatile-and-atomic-variables.md#what-volatile-guarantees)
  - [What `volatile` Does NOT Guarantee:](./6.3-volatile-and-atomic-variables.md#what-volatile-does-not-guarantee)
- [2. Atomicity (`java.util.concurrent.atomic`)](./6.3-volatile-and-atomic-variables.md#2-atomicity-javautilconcurrentatomic)
  - [How do we solve the atomicity problem?](./6.3-volatile-and-atomic-variables.md#how-do-we-solve-the-atomicity-problem)
  - [How Compare-And-Swap (CAS) Works](./6.3-volatile-and-atomic-variables.md#how-compare-and-swap-cas-works)
- [volatile vs Atomic](./6.3-volatile-and-atomic-variables.md#volatile-vs-atomic)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.3-volatile-and-atomic-variables" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Thread Pooling & Sizing</span>
    <span class="card-step">6.4</span>
  </div>
  <div class="card-icon">⚙️</div>

### [6.4 Executors & Thread Pools](./6.4-executors-and-thread-pools.md)

<div class="card-toc">

- [What is Thread Pool?](./6.4-executors-and-thread-pools.md#what-is-thread-pool)
- [What is ExecutorService?](./6.4-executors-and-thread-pools.md#what-is-executorservice)
  - [Why we need Thread Pool? Why can't we simply do new Thread()?](./6.4-executors-and-thread-pools.md#why-we-need-thread-pool-why-cant-we-simply-do-new-thread)
- [Different common Thread Pools :](./6.4-executors-and-thread-pools.md#different-common-thread-pools-)
  - [1. newFixedThreadPool()](./6.4-executors-and-thread-pools.md#1-newfixedthreadpool)
  - [2. newCachedThreadPool()](./6.4-executors-and-thread-pools.md#2-newcachedthreadpool)
  - [3. newSingleThreadExecutor()](./6.4-executors-and-thread-pools.md#3-newsinglethreadexecutor)
- [How is this related to Spring Boot?](./6.4-executors-and-thread-pools.md#how-is-this-related-to-spring-boot)
- [Thread Pool Sizing Formulas](./6.4-executors-and-thread-pools.md#thread-pool-sizing-formulas)
- [4. Graceful Shutdown Protocol](./6.4-executors-and-thread-pools.md#4-graceful-shutdown-protocol)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.4-executors-and-thread-pools" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Coordination Utilities</span>
    <span class="card-step">6.5</span>
  </div>
  <div class="card-icon">🚦</div>

### [6.5 Synchronizers & Concurrent Tools](./6.5-synchronizers-and-concurrent-tools.md)

<div class="card-toc">

- [1. CountDownLatch: One-Time Countdown Gate](./6.5-synchronizers-and-concurrent-tools.md#1-countdownlatch-one-time-countdown-gate)
- [2. CyclicBarrier: Multi-Thread Meeting Point](./6.5-synchronizers-and-concurrent-tools.md#2-cyclicbarrier-multi-thread-meeting-point)
- [3. Semaphore: Resource Rate Limiting & Permits](./6.5-synchronizers-and-concurrent-tools.md#3-semaphore-resource-rate-limiting--permits)
- [4. BlockingQueue: Producer-Consumer Engine](./6.5-synchronizers-and-concurrent-tools.md#4-blockingqueue-producer-consumer-engine)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.5-synchronizers-and-concurrent-tools" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Next-Gen Concurrency</span>
    <span class="card-step">6.6</span>
  </div>
  <div class="card-icon">🚀</div>

### [6.6 Virtual Threads & Structured Concurrency](./6.6-virtual-threads-and-structured-concurrency.md)

<div class="card-toc">

- [1. Platform (OS) Threads vs Virtual Threads](./6.6-virtual-threads-and-structured-concurrency.md#1-platform-os-threads-vs-virtual-threads)
- [2. Launching Virtual Threads](./6.6-virtual-threads-and-structured-concurrency.md#2-launching-virtual-threads)
- [3. The Thread Pinning Caveat](./6.6-virtual-threads-and-structured-concurrency.md#3-the-thread-pinning-caveat)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.6-virtual-threads-and-structured-concurrency" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Concurrent Collections</span>
    <span class="card-step">6.7</span>
  </div>
  <div class="card-icon">🛡️</div>

### [6.7 Thread-Safe Collections](./6.7-thread-safe-collections.md)

<div class="card-toc">

- [What are thread-safe collection?](./6.7-thread-safe-collections.md#what-are-thread-safe-collection)
- [Thread-Safe collection and Corresponding normal collection](./6.7-thread-safe-collections.md#thread-safe-collection-and-corresponding-normal-collection)
- [CopyOnWriteArrayList ("ArrayList")](./6.7-thread-safe-collections.md#copyonwritearraylist-arraylist)
  - [When to use `CopyOnWriteArrayList`?](./6.7-thread-safe-collections.md#when-to-use-copyonwritearraylist)
- [ConcurrentHashMap ("Hashmap")](./6.7-thread-safe-collections.md#concurrenthashmap-hashmap)
- [CopyOnWriteArraySet ("HashSet")](./6.7-thread-safe-collections.md#copyonwritearrayset-hashset)
- [ConcurrentSkipListMap ("TreeMap")](./6.7-thread-safe-collections.md#concurrentskiplistmap-treemap)
- [ConcurrentSkipListSet ("TreeSet")](./6.7-thread-safe-collections.md#concurrentskiplistset-treeset)
- [ConcurrentLinkedQueue ("LinkedList")](./6.7-thread-safe-collections.md#concurrentlinkedqueue-linkedlist)
- [ConcurrentLinkedDeque ("ArrayDeque")](./6.7-thread-safe-collections.md#concurrentlinkeddeque-arraydeque)
- [What about Vector?](./6.7-thread-safe-collections.md#what-about-vector)
  - [Problem with Vector](./6.7-thread-safe-collections.md#problem-with-vector)
- [Collections.synchronizedList()](./6.7-thread-safe-collections.md#collectionssynchronizedlist)
  - [Problem with Synchronized Collection](./6.7-thread-safe-collections.md#problem-with-synchronized-collection)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F06-multithreading%2F6.7-thread-safe-collections" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
