---
title: "Chapter 1: JavaScript Fundamentals"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /react/javascript-fundamentals
---

# Chapter 1: JavaScript Fundamentals

Mastering modern JavaScript is the foundational prerequisite for React, state management architectures, and full-stack web applications. Understanding how the JavaScript engine executes code, allocates memory, handles asynchronous operations, and delegates events will turn you into an elite engineer.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="js-fundamentals-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory & Scope</span>
    <span class="card-step">1.1</span>
  </div>
  <div class="card-icon">📦</div>

### [1.1 Variables, Scope & Data Types](./1.1-variables-and-data-types.md)

Deep-dive into `var` vs `let` vs `const`, Primitive vs Reference types in stack/heap memory, Hoisting, Temporal Dead Zone (TDZ), and Type Coercion rules.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.1-variables-and-data-types" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Core Engine</span>
    <span class="card-step">1.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [1.2 Functions, Closures & Context](./1.2-functions-and-closures.md)

Execution context, Call stack, Lexical scope, Closures, Arrow functions, Currying, and practical memory implications for React hooks and state persistence.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.2-functions-and-closures" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Object Architecture</span>
    <span class="card-step">1.3</span>
  </div>
  <div class="card-icon">🧩</div>

### [1.3 Objects, Prototypes & 'this'](./1.3-objects-and-prototypes.md)

Object creation patterns, Prototypal inheritance, Prototype chain (`__proto__` vs `prototype`), and the 4 rules of dynamic `'this'` binding (`call`, `apply`, `bind`).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.3-objects-and-prototypes" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Modern Syntax</span>
    <span class="card-step">1.4</span>
  </div>
  <div class="card-icon">🚀</div>

### [1.4 Modern ES6+ Syntax for React](./1.4-modern-es6-plus.md)

Destructuring arrays and objects, Rest and Spread operators, Default parameters, Ternary operators in JSX, Optional Chaining (`?.`), Nullish Coalescing (`??`), and ES Modules (`import`/`export`).

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.4-modern-es6-plus" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Functional Patterns</span>
    <span class="card-step">1.5</span>
  </div>
  <div class="card-icon">🔄</div>

### [1.5 Array & Object Methods & Immutability](./1.5-array-and-object-methods.md)

Higher-order array operations (`map`, `filter`, `reduce`, `find`, `some`, `every`), `forEach` vs `map`, Object methods, Shallow vs Deep copying (`structuredClone`), and Immutable state updates for React.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.5-array-and-object-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Concurrency & Async</span>
    <span class="card-step">1.6</span>
  </div>
  <div class="card-icon">⏳</div>

### [1.6 Async JS & Event Loop](./1.6-asynchronous-javascript.md)

Single-threaded JavaScript concurrency, Microtasks (Promises) vs Macrotasks (`setTimeout`), Event loop cycle, `async`/`await`, Promise combinators (`all`, `allSettled`, `race`), and async cancellation with `AbortController`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.6-asynchronous-javascript" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Browser Runtime & Performance</span>
    <span class="card-step">1.7</span>
  </div>
  <div class="card-icon">🌐</div>

### [1.7 DOM Manipulation & Events](./1.7-dom-and-events.md)

DOM tree navigation, Event Bubbling & Capturing, Event Delegation patterns, Performance optimization via Debouncing and Throttling, and connection to React Virtual DOM and Synthetic Events.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.7-dom-and-events" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Resilience & Quality</span>
    <span class="card-step">1.8</span>
  </div>
  <div class="card-icon">🛡️</div>

### [1.8 Error Handling & Debugging](./1.8-error-handling-and-debugging.md)

`try...catch...finally`, Custom Error hierarchies, Unhandled promise rejections, Browser DevTools debugging, Breakpoints, and Defensive programming techniques.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.8-error-handling-and-debugging" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

