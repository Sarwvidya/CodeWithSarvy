---
title: "Chapter 5: Exception Handling"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/exception-handling
---

# Chapter 5: Exception Handling

Exception handling in Java provides a robust, type-safe mechanism to intercept, propagate, isolate, and recover from anomalous runtime conditions. Writing enterprise-grade backend microservices demands mastery over the exception hierarchy, resource management, and clean error translation.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Type Hierarchy</span>
    <span class="card-step">5.1</span>
  </div>
  <div class="card-icon">🌲</div>

### [5.1 The Throwable Class Hierarchy](./5.1-exception-hierarchy.md)

Deconstruct `Throwable`, `Error` (unrecoverable system faults like OOM and StackOverflow), and `Exception` (application-level recoverable conditions).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-exception-handling%2F5.1-exception-hierarchy" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Compiler Semantics</span>
    <span class="card-step">5.2</span>
  </div>
  <div class="card-icon">🛡️</div>

### [5.2 Checked vs Unchecked Exceptions](./5.2-checked-vs-unchecked-exceptions.md)

Compile-time checked exceptions (`IOException`, `SQLException`) vs runtime unchecked exceptions (`RuntimeException`, `NullPointerException`), and when to use each.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-exception-handling%2F5.2-checked-vs-unchecked-exceptions" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Control Flow</span>
    <span class="card-step">5.3</span>
  </div>
  <div class="card-icon">🔄</div>

### [5.3 try-catch-finally Execution Flow](./5.3-try-catch-finally-execution-flow.md)

Multi-catch blocks, catch block ordering hierarchy, return value precedence in `finally`, and edge cases where `finally` will not execute (`System.exit`).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-exception-handling%2F5.3-try-catch-finally-execution-flow" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Resource Management</span>
    <span class="card-step">5.4</span>
  </div>
  <div class="card-icon">🔒</div>

### [5.4 Try-with-Resources & AutoCloseable](./5.4-try-with-resources.md)

Automated deterministic resource deallocation, the `AutoCloseable` interface contract, multi-resource reverse-closing order, and suppressed exceptions.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-exception-handling%2F5.4-try-with-resources" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Enterprise Best Practices</span>
    <span class="card-step">5.5</span>
  </div>
  <div class="card-icon">💎</div>

### [5.5 Custom Exceptions & API Design](./5.5-custom-exceptions-and-best-practices.md)

Architecting domain-specific custom exceptions, exception chaining (`initCause`), preserving stack traces, and centralized Spring Boot `@RestControllerAdvice` patterns.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F05-exception-handling%2F5.5-custom-exceptions-and-best-practices" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 5: Exception Handling** is a collapsible dropdown containing all subtopics from `5.1` to `5.5`.
2. In Obsidian, expand the `05-exception-handling` folder inside `core-java` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 5 overview.
