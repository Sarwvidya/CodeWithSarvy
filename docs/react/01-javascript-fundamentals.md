---
title: JavaScript Fundamentals
sidebar_position: 1
id: javascript-fundamentals
---

# JavaScript Fundamentals

Mastering modern JavaScript is the foundational prerequisite for React, state management architectures, and full-stack web applications. Understanding how the JavaScript engine executes code, allocates memory, handles asynchronous operations, and delegates events will turn you into an elite engineer.

:::tip 🔮 Obsidian Vault Integration
This documentation vault is directly compatible with **Obsidian**.
- When opening this page inside **Obsidian**, clicking any card title or **"Open / Create Note"** link will automatically create that note file in your `docs/react/` folder ready for note-taking!
- If viewing from a web browser, clicking **"🔮 Create in Obsidian"** launches Obsidian and scaffolds the note instantly via Obsidian URI.
:::

---

## 🧭 Topic Curriculum

Click any card below to open or create that subtopic note in Obsidian:

<div class="js-fundamentals-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Memory & Scope</span>
    <span class="card-step">01</span>
  </div>
  <div class="card-icon">📦</div>

### [Variables, Scope & Data Types](./02-variables-and-data-types.md)

Deep-dive into `var` vs `let` vs `const`, Primitive vs Reference types in stack/heap memory, Hoisting, Temporal Dead Zone (TDZ), and Type Coercion rules.

  <div class="card-actions">
    <a href="./02-variables-and-data-types.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F02-variables-and-data-types" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Core Engine</span>
    <span class="card-step">02</span>
  </div>
  <div class="card-icon">⚡</div>

### [Functions, Closures & Context](./03-functions-and-closures.md)

Execution context, Call stack, Lexical scope, Closures, Arrow functions, Currying, and practical memory implications for React hooks and state persistence.

  <div class="card-actions">
    <a href="./03-functions-and-closures.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F03-functions-and-closures" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Object Architecture</span>
    <span class="card-step">03</span>
  </div>
  <div class="card-icon">🧩</div>

### [Objects, Prototypes & 'this'](./04-objects-and-prototypes.md)

Object creation patterns, Prototypal inheritance, Prototype chain (`__proto__` vs `prototype`), and the 4 rules of dynamic `'this'` binding (`call`, `apply`, `bind`).

  <div class="card-actions">
    <a href="./04-objects-and-prototypes.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F04-objects-and-prototypes" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Concurrency & Async</span>
    <span class="card-step">04</span>
  </div>
  <div class="card-icon">⏳</div>

### [Async JS & Event Loop](./05-asynchronous-javascript.md)

Single-threaded JavaScript concurrency, Microtasks (Promises) vs Macrotasks (`setTimeout`), Event loop cycle, `async`/`await`, and robust parallel error handling.

  <div class="card-actions">
    <a href="./05-asynchronous-javascript.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F05-asynchronous-javascript" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Modern Syntax</span>
    <span class="card-step">05</span>
  </div>
  <div class="card-icon">🚀</div>

### [Modern ES6+ Syntax for React](./06-modern-es6-plus.md)

Destructuring arrays and objects, Rest and Spread operators, Optional Chaining (`?.`), Nullish Coalescing (`??`), Template literals, and ES Modules (`import`/`export`).

  <div class="card-actions">
    <a href="./06-modern-es6-plus.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F06-modern-es6-plus" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Functional Patterns</span>
    <span class="card-step">06</span>
  </div>
  <div class="card-icon">🔄</div>

### [Array & Object Methods](./07-array-and-object-methods.md)

Higher-order array operations (`map`, `filter`, `reduce`, `find`, `some`, `every`), Object transformations (`keys`, `values`, `entries`), and immutability techniques.

  <div class="card-actions">
    <a href="./07-array-and-object-methods.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F07-array-and-object-methods" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Browser Runtime</span>
    <span class="card-step">07</span>
  </div>
  <div class="card-icon">🌐</div>

### [DOM Manipulation & Events](./08-dom-and-events.md)

DOM tree navigation, Event Bubbling & Capturing, Event Delegation patterns, `preventDefault` vs `stopPropagation`, and the connection to React Virtual DOM.

  <div class="card-actions">
    <a href="./08-dom-and-events.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F08-dom-and-events" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Resilience & Quality</span>
    <span class="card-step">08</span>
  </div>
  <div class="card-icon">🛡️</div>

### [Error Handling & Debugging](./09-error-handling-and-debugging.md)

`try...catch...finally`, Custom Error hierarchies, Unhandled promise rejections, Browser DevTools debugging, Breakpoints, and Defensive programming techniques.

  <div class="card-actions">
    <a href="./09-error-handling-and-debugging.md" class="card-btn btn-primary">📝 Open / Create Note</a>
    <a href="obsidian://new?vault=docs&file=react%2F09-error-handling-and-debugging" class="card-btn btn-obsidian" title="Create & Open in Obsidian App">🔮 Create in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 How Note Creation Works in Obsidian

1. Open this workspace in **Obsidian** (by opening the `docs/` folder as a Vault).
2. Navigate to `react` ➔ `01-javascript-fundamentals`.
3. Click on any of the subtopic titles or action buttons above.
4. If the file does not exist yet, Obsidian will immediately generate the `.md` file inside `docs/react/` with your cursor focused, ready for you to take notes!
5. Any updates you save in Obsidian are instantly reflected across your Docusaurus development server and documentation website.
