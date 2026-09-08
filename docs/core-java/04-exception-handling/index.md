---
title: "Chapter 4: Exception Handling"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/exception-handling
---

# Chapter 4: Exception Handling

Exception handling in Java provides a robust, type-safe mechanism to intercept, propagate, isolate, and recover from anomalous runtime conditions. Writing enterprise-grade backend microservices demands mastery over the exception hierarchy, resource management, and clean error translation.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Type Hierarchy</span>
    <span class="card-step">4.1</span>
  </div>
  <div class="card-icon">🌲</div>

### [4.1 The Throwable Class Hierarchy](./4.1-exception-hierarchy.md)

<div class="card-toc">

- [1. Complete Throwable Inheritance Tree](./4.1-exception-hierarchy.md#1-complete-throwable-inheritance-tree)
- [2. `Error` vs `Exception`](./4.1-exception-hierarchy.md#2-error-vs-exception)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-exception-handling%2F4.1-exception-hierarchy" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Compiler Semantics</span>
    <span class="card-step">4.2</span>
  </div>
  <div class="card-icon">🛡️</div>

### [4.2 Checked vs Unchecked Exceptions](./4.2-checked-vs-unchecked-exceptions.md)

<div class="card-toc">

- [1. Architectural Comparison](./4.2-checked-vs-unchecked-exceptions.md#1-architectural-comparison)
- [2. When to Use Each in Real Systems](./4.2-checked-vs-unchecked-exceptions.md#2-when-to-use-each-in-real-systems)
  - [When to Use Checked Exceptions:](./4.2-checked-vs-unchecked-exceptions.md#when-to-use-checked-exceptions)
  - [When to Use Unchecked Exceptions:](./4.2-checked-vs-unchecked-exceptions.md#when-to-use-unchecked-exceptions)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-exception-handling%2F4.2-checked-vs-unchecked-exceptions" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Control Flow</span>
    <span class="card-step">4.3</span>
  </div>
  <div class="card-icon">🔄</div>

### [4.3 try-catch-finally Execution Flow](./4.3-try-catch-finally-execution-flow.md)

<div class="card-toc">

- [1. Execution Flow Rules](./4.3-try-catch-finally-execution-flow.md#1-execution-flow-rules)
- [2. Return Precedence Gotcha in `finally`](./4.3-try-catch-finally-execution-flow.md#2-return-precedence-gotcha-in-finally)
- [3. When Will `finally` NOT Execute?](./4.3-try-catch-finally-execution-flow.md#3-when-will-finally-not-execute)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-exception-handling%2F4.3-try-catch-finally-execution-flow" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Resource Management</span>
    <span class="card-step">4.4</span>
  </div>
  <div class="card-icon">🔒</div>

### [4.4 Try-with-Resources & AutoCloseable](./4.4-try-with-resources.md)

<div class="card-toc">

- [1. The Legacy Problem vs Try-with-Resources](./4.4-try-with-resources.md#1-the-legacy-problem-vs-try-with-resources)
  - [Legacy Java 6 Cleanup (Clunky & Prone to Leakage):](./4.4-try-with-resources.md#legacy-java-6-cleanup-clunky--prone-to-leakage)
  - [Modern Try-with-Resources:](./4.4-try-with-resources.md#modern-try-with-resources)
- [2. The `AutoCloseable` Interface Contract](./4.4-try-with-resources.md#2-the-autocloseable-interface-contract)
  - [Custom Resource Example:](./4.4-try-with-resources.md#custom-resource-example)
  - [Closing Order Rule](./4.4-try-with-resources.md#closing-order-rule)
- [3. Suppressed Exceptions](./4.4-try-with-resources.md#3-suppressed-exceptions)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-exception-handling%2F4.4-try-with-resources" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Enterprise Best Practices</span>
    <span class="card-step">4.5</span>
  </div>
  <div class="card-icon">💎</div>

### [4.5 Custom Exceptions & API Design](./4.5-custom-exceptions-and-best-practices.md)

<div class="card-toc">

- [1. Crafting Domain-Specific Custom Exceptions](./4.5-custom-exceptions-and-best-practices.md#1-crafting-domain-specific-custom-exceptions)
- [2. Exception Chaining: Preserving Root Causes](./4.5-custom-exceptions-and-best-practices.md#2-exception-chaining-preserving-root-causes)
- [3. Top 5 Enterprise Exception Best Practices](./4.5-custom-exceptions-and-best-practices.md#3-top-5-enterprise-exception-best-practices)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F04-exception-handling%2F4.5-custom-exceptions-and-best-practices" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
