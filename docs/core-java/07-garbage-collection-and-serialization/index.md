---
title: "Chapter 7: Garbage Collection & Serialization"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/garbage-collection-and-serialization
---

# Chapter 7: Garbage Collection & Serialization

Master the dual mechanisms of automatic memory reclamation and state persistence: the JVM Generational Garbage Collection hypothesis, modern ultra-low latency collectors (G1, ZGC), reference reachability types, and object serialization protocols.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory Reclamation</span>
    <span class="card-step">7.1</span>
  </div>
  <div class="card-icon">♻️</div>

### [7.1 Garbage Collection Fundamentals](./7.1-garbage-collection-fundamentals.md)

The Weak Generational Hypothesis, GC Root tracing, Mark-Sweep-Compact algorithms, Stop-The-World (STW) pauses, and Young vs Tenured generational cycles.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.1-garbage-collection-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Collector Algorithms</span>
    <span class="card-step">7.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [7.2 Modern Garbage Collectors (G1 to ZGC)](./7.2-modern-gc-algorithms.md)

From Serial and Parallel GC to G1 (regional partitioning) and ZGC (concurrent load-barrier GC achieving sub-millisecond maximum pause times).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.2-modern-gc-algorithms" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Reference Types</span>
    <span class="card-step">7.3</span>
  </div>
  <div class="card-icon">🔗</div>

### [7.3 Reachability & Reference Types](./7.3-object-reachability-and-references.md)

Deconstruct Strong, Soft (`SoftReference`), Weak (`WeakReference`), and Phantom (`PhantomReference`) with memory-sensitive caching patterns.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.3-object-reachability-and-references" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">State Persistence</span>
    <span class="card-step">7.4</span>
  </div>
  <div class="card-icon">💾</div>

### [7.4 Java Serialization & serialVersionUID](./7.4-serialization-fundamentals.md)

Object graph serialization to byte streams, the `Serializable` marker interface, `serialVersionUID` compatibility contracts, and security vulnerabilities.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.4-serialization-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Custom Serialization</span>
    <span class="card-step">7.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [7.5 Transient Fields & Custom Protocols](./7.5-transient-and-custom-serialization.md)

Excluding sensitive fields via `transient`, implementing `writeObject()` / `readObject()`, high-speed `Externalizable`, and modern JSON/Protobuf alternatives.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F07-garbage-collection-and-serialization%2F7.5-transient-and-custom-serialization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 7: Garbage Collection & Serialization** is a collapsible dropdown containing all subtopics from `7.1` to `7.5`.
2. In Obsidian, expand the `07-garbage-collection-and-serialization` folder inside `core-java` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 7 overview.
