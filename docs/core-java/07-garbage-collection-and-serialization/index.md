---
title: "Chapter 7: Garbage Collection & Serialization"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/garbage-collection-and-serialization
---

# Chapter 7: Garbage Collection & Serialization

Automatic memory management and object persistence form the foundation of JVM runtime stability. Understanding Generational GC mechanics, production GC collector algorithms (G1, ZGC), memory leak identification, and secure object serialization guarantees resilient backend services.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory Management</span>
    <span class="card-step">7.1</span>
  </div>
  <div class="card-icon">♻️</div>

### [7.1 Garbage Collection Fundamentals](./7.1-garbage-collection-fundamentals.md)

<div class="card-toc">

- [What is Garbage Collection?](./7.1-garbage-collection-fundamentals.md#what-is-garbage-collection)
- [What exactly is "Garbage"?](./7.1-garbage-collection-fundamentals.md#what-exactly-is-garbage)
- [Why do we need Garbage Collection?](./7.1-garbage-collection-fundamentals.md#why-do-we-need-garbage-collection)
- [Stack vs Heap](./7.1-garbage-collection-fundamentals.md#stack-vs-heap)
  - [Stack contains :](./7.1-garbage-collection-fundamentals.md#stack-contains-)
  - [Heap contains :](./7.1-garbage-collection-fundamentals.md#heap-contains-)
- [How does Java know an object is unused?](./7.1-garbage-collection-fundamentals.md#how-does-java-know-an-object-is-unused)
- [What are GC Roots?](./7.1-garbage-collection-fundamentals.md#what-are-gc-roots)
- [Does System.gc() perform Garbage Collection?](./7.1-garbage-collection-fundamentals.md#does-systemgc-perform-garbage-collection)
- [Can we force Garbage Collection?](./7.1-garbage-collection-fundamentals.md#can-we-force-garbage-collection)
- [How does Garbage Collection actually work?](./7.1-garbage-collection-fundamentals.md#how-does-garbage-collection-actually-work)
- [Generational Garbage Collection](./7.1-garbage-collection-fundamentals.md#generational-garbage-collection)
  - [Heap Division](./7.1-garbage-collection-fundamentals.md#heap-division)
  - [Young Generation](./7.1-garbage-collection-fundamentals.md#young-generation)
  - [Old Generation](./7.1-garbage-collection-fundamentals.md#old-generation)
- [GC Phases (Steps of GC)](./7.1-garbage-collection-fundamentals.md#gc-phases-steps-of-gc)
- [Stop-The-World (STW)](./7.1-garbage-collection-fundamentals.md#stop-the-world-stw)
  - [Why is Stop-The-World a problem?](./7.1-garbage-collection-fundamentals.md#why-is-stop-the-world-a-problem)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.1-garbage-collection-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Production Collectors</span>
    <span class="card-step">7.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [7.2 Types of Garbage Collectors](./7.2-modern-gc-algorithms.md)

<div class="card-toc">

- [1. Evolution of HotSpot GC Collectors](./7.2-modern-gc-algorithms.md#1-evolution-of-hotspot-gc-collectors)
- [Serial Garbage Collector](./7.2-modern-gc-algorithms.md#serial-garbage-collector)
- [Parallel Garbage Collector](./7.2-modern-gc-algorithms.md#parallel-garbage-collector)
- [G1 Garbage Collector](./7.2-modern-gc-algorithms.md#g1-garbage-collector)
  - [Why is G1 useful?](./7.2-modern-gc-algorithms.md#why-is-g1-useful)
- [ZGC](./7.2-modern-gc-algorithms.md#zgc)
- [Shenandoah GC](./7.2-modern-gc-algorithms.md#shenandoah-gc)
- [Ways of Garbage Collection :](./7.2-modern-gc-algorithms.md#ways-of-garbage-collection-)
  - [finalize() (Deprecated)](./7.2-modern-gc-algorithms.md#finalize-deprecated)
  - [Try-with-resources — preferred](./7.2-modern-gc-algorithms.md#try-with-resources--preferred)
- [AutoCloseable](./7.2-modern-gc-algorithms.md#autocloseable)
- [Cleaner](./7.2-modern-gc-algorithms.md#cleaner)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.2-modern-gc-algorithms" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Memory Leak</span>
    <span class="card-step">7.3</span>
  </div>
  <div class="card-icon">⚠️</div>

### [7.3 Memory Leak](./7.3-memory-leak.md)

<div class="card-toc">

- [What is memory Leak in Java?](./7.3-memory-leak.md#what-is-memory-leak-in-java)
- [Common causes of Memory Leaks](./7.3-memory-leak.md#common-causes-of-memory-leaks)
  - [1. Static collections](./7.3-memory-leak.md#1-static-collections)
  - [2. Objects stored unnecessarily in caches](./7.3-memory-leak.md#2-objects-stored-unnecessarily-in-caches)
  - [3. Listeners/callbacks not removed](./7.3-memory-leak.md#3-listenerscallbacks-not-removed)
  - [4. ThreadLocal misuse](./7.3-memory-leak.md#4-threadlocal-misuse)
  - [5. Long-lived objects holding references to short-lived objects](./7.3-memory-leak.md#5-long-lived-objects-holding-references-to-short-lived-objects)
- [finalize() and Garbage Collection](./7.3-memory-leak.md#finalize-and-garbage-collection)
- [Can an object become eligible for GC without assigning null? ✅](./7.3-memory-leak.md#can-an-object-become-eligible-for-gc-without-assigning-null-)
- [Can two objects reference each other and still be garbage? ✅](./7.3-memory-leak.md#can-two-objects-reference-each-other-and-still-be-garbage-)
- [What is OutOfMemoryError?](./7.3-memory-leak.md#what-is-outofmemoryerror)
- [Does OutOfMemoryError always mean a memory leak? ❌](./7.3-memory-leak.md#does-outofmemoryerror-always-mean-a-memory-leak-)
- [What is StackOverflowError?](./7.3-memory-leak.md#what-is-stackoverflowerror)
- [-Xms and -Xmx](./7.3-memory-leak.md#-xms-and--xmx)
  - [-Xms](./7.3-memory-leak.md#-xms)
  - [-Xmx](./7.3-memory-leak.md#-xmx)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.3-memory-leak" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Object Persistence</span>
    <span class="card-step">7.4</span>
  </div>
  <div class="card-icon">💾</div>

### [7.4 Serialization Fundamentals & UID](./7.4-serialization-fundamentals.md)

<div class="card-toc">

- [What is Serialization?](./7.4-serialization-fundamentals.md#what-is-serialization)
- [Why do we need Serialization?](./7.4-serialization-fundamentals.md#why-do-we-need-serialization)
  - [1. Store an object](./7.4-serialization-fundamentals.md#1-store-an-object)
  - [2. Transfer an object](./7.4-serialization-fundamentals.md#2-transfer-an-object)
- [How do we serialize an object?](./7.4-serialization-fundamentals.md#how-do-we-serialize-an-object)
- [Writing and Reading Streams](./7.4-serialization-fundamentals.md#writing-and-reading-streams)
- [What is serialVersionUID?](./7.4-serialization-fundamentals.md#what-is-serialversionuid)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.4-serialization-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Custom Serialization</span>
    <span class="card-step">7.5</span>
  </div>
  <div class="card-icon">🔒</div>

### [7.5 Transient Fields & Custom Serialization](./7.5-transient-and-custom-serialization.md)

<div class="card-toc">

- [What is Transient?](./7.5-transient-and-custom-serialization.md#what-is-transient)
- [Why use `transient`?](./7.5-transient-and-custom-serialization.md#why-use-transient)
- [Serialization vs Deserialization](./7.5-transient-and-custom-serialization.md#serialization-vs-deserialization)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.5-transient-and-custom-serialization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
