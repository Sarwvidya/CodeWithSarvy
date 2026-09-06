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

Weak Generational Hypothesis, Eden, Survivor (S0/S1), Tenured generation, Mark-Sweep-Compact, and Stop-The-World (STW) pause metrics.

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

Serial vs Parallel vs G1 GC (region-based memory partitioning), and ultra-low latency concurrent collectors (ZGC & Shenandoah sub-millisecond pauses).

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

Strong, Soft (`SoftReference`), Weak (`WeakReference` & `WeakHashMap`), Phantom (`PhantomReference`), and `Cleaner` / `ReferenceQueue` post-mortem cleanup.

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

`Serializable` marker interface, binary byte stream conversion (`ObjectOutputStream`), `serialVersionUID` evolution compatibility, and security exploits.

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

The `transient` keyword for security and caching exclusion, private `writeObject`/`readObject` custom hooks, and `Externalizable` direct stream control.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-garbage-collection-and-serialization%2F8.5-transient-and-custom-serialization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
