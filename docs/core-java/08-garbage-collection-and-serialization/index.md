---
title: "Chapter 8: Garbage Collection & Serialization"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/garbage-collection-and-serialization
---

# Chapter 8: Garbage Collection & Serialization

Automatic memory management and object persistence form the foundation of JVM runtime stability. Understanding Generational GC mechanics, production GC collector algorithms (G1, ZGC), reference strength types, and secure object serialization guarantees resilient backend services.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory Management</span>
    <span class="card-step">8.1</span>
  </div>
  <div class="card-icon">♻️</div>

### [8.1 Garbage Collection Fundamentals](./8.1-garbage-collection-fundamentals.md)

<div class="card-toc">

- [1. The Weak Generational Hypothesis](./8.1-garbage-collection-fundamentals.md#1-the-weak-generational-hypothesis)
- [2. The Core GC Phases](./8.1-garbage-collection-fundamentals.md#2-the-core-gc-phases)
- [3. GC Stop-The-World (STW) Pauses](./8.1-garbage-collection-fundamentals.md#3-gc-stop-the-world-stw-pauses)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.1-garbage-collection-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Production Collectors</span>
    <span class="card-step">8.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [8.2 Modern GC Collectors (G1, ZGC & Shenandoah)](./8.2-modern-gc-algorithms.md)

<div class="card-toc">

- [1. Evolution of HotSpot GC Collectors](./8.2-modern-gc-algorithms.md#1-evolution-of-hotspot-gc-collectors)
- [2. G1 GC: Region-Based Memory Partitioning](./8.2-modern-gc-algorithms.md#2-g1-gc-region-based-memory-partitioning)
- [3. ZGC: Ultra-Low Latency Scalable Collector](./8.2-modern-gc-algorithms.md#3-zgc-ultra-low-latency-scalable-collector)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.2-modern-gc-algorithms" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Reachability & References</span>
    <span class="card-step">8.3</span>
  </div>
  <div class="card-icon">🔗</div>

### [8.3 Object Reachability & Reference Types](./8.3-object-reachability-and-references.md)

<div class="card-toc">

- [1. Reference Strength Hierarchy](./8.3-object-reachability-and-references.md#1-reference-strength-hierarchy)
- [2. Real-World Architectural Use Cases](./8.3-object-reachability-and-references.md#2-real-world-architectural-use-cases)
  - [SoftReference: Memory-Sensitive In-Memory Caches](./8.3-object-reachability-and-references.md#softreference-memory-sensitive-in-memory-caches)
  - [WeakReference: `WeakHashMap` & Metadata Registries](./8.3-object-reachability-and-references.md#weakreference-weakhashmap--metadata-registries)
  - [PhantomReference & `java.lang.ref.Cleaner`](./8.3-object-reachability-and-references.md#phantomreference--javalangrefcleaner)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.3-object-reachability-and-references" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Object Persistence</span>
    <span class="card-step">8.4</span>
  </div>
  <div class="card-icon">💾</div>

### [8.4 Serialization Fundamentals & UID](./8.4-serialization-fundamentals.md)

<div class="card-toc">

- [1. The `Serializable` Marker Interface](./8.4-serialization-fundamentals.md#1-the-serializable-marker-interface)
- [2. Writing and Reading Streams](./8.4-serialization-fundamentals.md#2-writing-and-reading-streams)
- [3. The `serialVersionUID` Contract](./8.4-serialization-fundamentals.md#3-the-serialversionuid-contract)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.4-serialization-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Custom Serialization</span>
    <span class="card-step">8.5</span>
  </div>
  <div class="card-icon">🔒</div>

### [8.5 Transient Fields & Custom Serialization](./8.5-transient-and-custom-serialization.md)

<div class="card-toc">

- [1. The `transient` Keyword](./8.5-transient-and-custom-serialization.md#1-the-transient-keyword)
- [2. Custom Serialization Hooks: `writeObject` & `readObject`](./8.5-transient-and-custom-serialization.md#2-custom-serialization-hooks-writeobject--readobject)
- [3. `Externalizable`: Full Manual Stream Control](./8.5-transient-and-custom-serialization.md#3-externalizable-full-manual-stream-control)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.5-transient-and-custom-serialization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
