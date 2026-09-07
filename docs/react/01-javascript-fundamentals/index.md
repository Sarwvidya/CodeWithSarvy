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

<div class="card-toc">

- [1. Variable Declarations: `var` vs `let` vs `const`](./1.1-variables-and-data-types.md#1-variable-declarations-var-vs-let-vs-const)
- [2. Scope in JavaScript: Global, Function, & Block](./1.1-variables-and-data-types.md#2-scope-in-javascript-global-function--block)
  - [A. Global Scope](./1.1-variables-and-data-types.md#a-global-scope)
  - [B. Function Scope (Local Scope)](./1.1-variables-and-data-types.md#b-function-scope-local-scope)
  - [C. Block Scope (`let` and `const`)](./1.1-variables-and-data-types.md#c-block-scope-let-and-const)
  - [D. The Scope Chain](./1.1-variables-and-data-types.md#d-the-scope-chain)
- [3. Hoisting & The Temporal Dead Zone (TDZ)](./1.1-variables-and-data-types.md#3-hoisting--the-temporal-dead-zone-tdz)
- [4. Data Types: Primitives vs Reference Types](./1.1-variables-and-data-types.md#4-data-types-primitives-vs-reference-types)
  - [Stack vs Heap Memory Allocation](./1.1-variables-and-data-types.md#stack-vs-heap-memory-allocation)
- [5. Type Coercion & Strict Equality (`===` vs `==`)](./1.1-variables-and-data-types.md#5-type-coercion--strict-equality--vs-)
  - [Implicit vs Explicit Coercion](./1.1-variables-and-data-types.md#implicit-vs-explicit-coercion)
  - [Strict (`===`) vs Loose (`==`) Equality](./1.1-variables-and-data-types.md#strict--vs-loose--equality)
  - [Falsy Values in JavaScript](./1.1-variables-and-data-types.md#falsy-values-in-javascript)
- [6. Summary Checklist](./1.1-variables-and-data-types.md#6-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Function Types & Variations](./1.2-functions-and-closures.md#1-function-types--variations)
  - [A. Function Declaration](./1.2-functions-and-closures.md#a-function-declaration)
  - [B. Function Expression](./1.2-functions-and-closures.md#b-function-expression)
  - [C. Arrow Function (ES6)](./1.2-functions-and-closures.md#c-arrow-function-es6)
- [2. Execution Context & Call Stack](./1.2-functions-and-closures.md#2-execution-context--call-stack)
- [3. Lexical Scope (Static Scoping)](./1.2-functions-and-closures.md#3-lexical-scope-static-scoping)
- [4. What is a Closure?](./1.2-functions-and-closures.md#4-what-is-a-closure)
- [5. Practical Applications of Closures](./1.2-functions-and-closures.md#5-practical-applications-of-closures)
  - [1. Function Currying & Partial Application](./1.2-functions-and-closures.md#1-function-currying--partial-application)
  - [2. Memoization (Caching Expensive Operations)](./1.2-functions-and-closures.md#2-memoization-caching-expensive-operations)
- [6. Closures in React & The "Stale Closure" Problem](./1.2-functions-and-closures.md#6-closures-in-react--the-stale-closure-problem)
  - [The Stale Closure Bug](./1.2-functions-and-closures.md#the-stale-closure-bug)
  - [The Solutions:](./1.2-functions-and-closures.md#the-solutions)
- [7. Summary Checklist](./1.2-functions-and-closures.md#7-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Object Creation Patterns](./1.3-objects-and-prototypes.md#1-object-creation-patterns)
  - [A. Object Literals](./1.3-objects-and-prototypes.md#a-object-literals)
  - [B. Constructor Functions & `new`](./1.3-objects-and-prototypes.md#b-constructor-functions--new)
  - [C. ES6 Classes (Syntactic Sugar over Prototypes)](./1.3-objects-and-prototypes.md#c-es6-classes-syntactic-sugar-over-prototypes)
- [2. Prototypal Inheritance & The Prototype Chain](./1.3-objects-and-prototypes.md#2-prototypal-inheritance--the-prototype-chain)
- [3. The 4 Rules of Dynamic `'this'` Binding](./1.3-objects-and-prototypes.md#3-the-4-rules-of-dynamic-this-binding)
  - [Rule 1: Default Binding (Standalone Function Call)](./1.3-objects-and-prototypes.md#rule-1-default-binding-standalone-function-call)
  - [Rule 2: Implicit Binding (Method Call on an Object)](./1.3-objects-and-prototypes.md#rule-2-implicit-binding-method-call-on-an-object)
  - [Rule 3: Explicit Binding (`call`, `apply`, `bind`)](./1.3-objects-and-prototypes.md#rule-3-explicit-binding-call-apply-bind)
  - [Rule 4: `new` Binding (Constructor Calls)](./1.3-objects-and-prototypes.md#rule-4-new-binding-constructor-calls)
- [4. Arrow Functions & Lexical `'this'`](./1.3-objects-and-prototypes.md#4-arrow-functions--lexical-this)
- [5. Summary Checklist](./1.3-objects-and-prototypes.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Destructuring Assignment](./1.4-modern-es6-plus.md#1-destructuring-assignment)
  - [Object Destructuring](./1.4-modern-es6-plus.md#object-destructuring)
  - [Array Destructuring](./1.4-modern-es6-plus.md#array-destructuring)
- [2. Spread (`...`) & Rest (`...`) Operators](./1.4-modern-es6-plus.md#2-spread---rest--operators)
  - [Spread for Immutability & Cloning](./1.4-modern-es6-plus.md#spread-for-immutability--cloning)
  - [Rest Parameter in Functions](./1.4-modern-es6-plus.md#rest-parameter-in-functions)
- [3. Default Parameters](./1.4-modern-es6-plus.md#3-default-parameters)
  - [Key Behaviors:](./1.4-modern-es6-plus.md#key-behaviors)
- [4. The Ternary Operator (`condition ? trueExpr : falseExpr`)](./1.4-modern-es6-plus.md#4-the-ternary-operator-condition--trueexpr--falseexpr)
  - [Conditional Rendering in React JSX](./1.4-modern-es6-plus.md#conditional-rendering-in-react-jsx)
- [5. Optional Chaining (`?.`) & Nullish Coalescing (`??`)](./1.4-modern-es6-plus.md#5-optional-chaining---nullish-coalescing-)
  - [Optional Chaining (`?.`)](./1.4-modern-es6-plus.md#optional-chaining-)
  - [Nullish Coalescing (`??`) vs Logical OR (`||`)](./1.4-modern-es6-plus.md#nullish-coalescing--vs-logical-or-)
- [6. Template Literals & Tagged Templates](./1.4-modern-es6-plus.md#6-template-literals--tagged-templates)
  - [Tagged Templates](./1.4-modern-es6-plus.md#tagged-templates)
- [7. ES Modules (ESM) — `import` & `export`](./1.4-modern-es6-plus.md#7-es-modules-esm--import--export)
  - [Dynamic Imports & React Code Splitting](./1.4-modern-es6-plus.md#dynamic-imports--react-code-splitting)
- [8. Summary Checklist](./1.4-modern-es6-plus.md#8-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Higher-Order Array Methods](./1.5-array-and-object-methods.md#1-higher-order-array-methods)
  - [A. `map()`: Transforming Elements](./1.5-array-and-object-methods.md#a-map-transforming-elements)
  - [B. `filter()`: Selecting Subsets](./1.5-array-and-object-methods.md#b-filter-selecting-subsets)
  - [C. `reduce()`: Aggregating to Any Structure](./1.5-array-and-object-methods.md#c-reduce-aggregating-to-any-structure)
  - [D. `forEach()` vs `map()`](./1.5-array-and-object-methods.md#d-foreach-vs-map)
  - [E. Search & Verification Methods](./1.5-array-and-object-methods.md#e-search--verification-methods)
- [2. Object Methods](./1.5-array-and-object-methods.md#2-object-methods)
  - [A. `Object.keys()`, `Object.values()`, and `Object.entries()`](./1.5-array-and-object-methods.md#a-objectkeys-objectvalues-and-objectentries)
  - [B. `Object.fromEntries()`: Rebuilding Objects](./1.5-array-and-object-methods.md#b-objectfromentries-rebuilding-objects)
  - [C. `Object.assign()`](./1.5-array-and-object-methods.md#c-objectassign)
  - [D. `Object.freeze()` vs `Object.seal()`](./1.5-array-and-object-methods.md#d-objectfreeze-vs-objectseal)
- [3. Shallow Copy vs Deep Copy](./1.5-array-and-object-methods.md#3-shallow-copy-vs-deep-copy)
  - [The Shallow Copy Trap](./1.5-array-and-object-methods.md#the-shallow-copy-trap)
  - [Deep Copy Solutions:](./1.5-array-and-object-methods.md#deep-copy-solutions)
- [4. Immutable Operations in React](./1.5-array-and-object-methods.md#4-immutable-operations-in-react)
  - [Why Immutability is Mandatory](./1.5-array-and-object-methods.md#why-immutability-is-mandatory)
  - [The React Immutable Toolkit](./1.5-array-and-object-methods.md#the-react-immutable-toolkit)
- [5. Summary Checklist](./1.5-array-and-object-methods.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. JavaScript Concurrency Architecture](./1.6-asynchronous-javascript.md#1-javascript-concurrency-architecture)
- [2. The Event Loop Cycle & Priority](./1.6-asynchronous-javascript.md#2-the-event-loop-cycle--priority)
- [3. Promises: Lifecycle & Combinators](./1.6-asynchronous-javascript.md#3-promises-lifecycle--combinators)
  - [Promise States](./1.6-asynchronous-javascript.md#promise-states)
  - [Chaining & Error Handling](./1.6-asynchronous-javascript.md#chaining--error-handling)
  - [Promise Combinator Methods](./1.6-asynchronous-javascript.md#promise-combinator-methods)
- [4. `async` / `await` Syntax](./1.6-asynchronous-javascript.md#4-async--await-syntax)
- [5. React Asynchronous Patterns & Race Conditions](./1.6-asynchronous-javascript.md#5-react-asynchronous-patterns--race-conditions)
  - [Solution: Cancellation with `AbortController`](./1.6-asynchronous-javascript.md#solution-cancellation-with-abortcontroller)
- [6. Summary Checklist](./1.6-asynchronous-javascript.md#6-summary-checklist)

</div>

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

<div class="card-toc">

- [1. The DOM Tree & Querying Elements](./1.7-dom-and-events.md#1-the-dom-tree--querying-elements)
  - [Modern DOM Query Methods](./1.7-dom-and-events.md#modern-dom-query-methods)
- [2. Event Propagation: Capturing, Target & Bubbling](./1.7-dom-and-events.md#2-event-propagation-capturing-target--bubbling)
  - [Controlling Event Flow](./1.7-dom-and-events.md#controlling-event-flow)
- [3. Event Delegation Pattern](./1.7-dom-and-events.md#3-event-delegation-pattern)
  - [Benefits of Event Delegation:](./1.7-dom-and-events.md#benefits-of-event-delegation)
- [4. Browser Rendering: Reflow vs Repaint](./1.7-dom-and-events.md#4-browser-rendering-reflow-vs-repaint)
- [5. Performance Optimization: Debouncing & Throttling](./1.7-dom-and-events.md#5-performance-optimization-debouncing--throttling)
  - [A. Debouncing (Wait for the Pause)](./1.7-dom-and-events.md#a-debouncing-wait-for-the-pause)
  - [B. Throttling (Enforce a Maximum Rate)](./1.7-dom-and-events.md#b-throttling-enforce-a-maximum-rate)
  - [C. Debounce vs Throttle Comparison](./1.7-dom-and-events.md#c-debounce-vs-throttle-comparison)
- [6. React Virtual DOM & Synthetic Events](./1.7-dom-and-events.md#6-react-virtual-dom--synthetic-events)
  - [1. Virtual DOM Reconciliation](./1.7-dom-and-events.md#1-virtual-dom-reconciliation)
  - [2. Synthetic Event System](./1.7-dom-and-events.md#2-synthetic-event-system)
- [7. Summary Checklist](./1.7-dom-and-events.md#7-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Built-in Error Types in JavaScript](./1.8-error-handling-and-debugging.md#1-built-in-error-types-in-javascript)
  - [Anatomy of an Error Object](./1.8-error-handling-and-debugging.md#anatomy-of-an-error-object)
- [2. Structured Exception Handling: `try...catch...finally`](./1.8-error-handling-and-debugging.md#2-structured-exception-handling-trycatchfinally)
- [3. Creating Custom Error Hierarchies](./1.8-error-handling-and-debugging.md#3-creating-custom-error-hierarchies)
- [4. Debugging Techniques & Browser DevTools](./1.8-error-handling-and-debugging.md#4-debugging-techniques--browser-devtools)
  - [A. The `debugger;` Statement](./1.8-error-handling-and-debugging.md#a-the-debugger-statement)
  - [B. Advanced `console` Methods](./1.8-error-handling-and-debugging.md#b-advanced-console-methods)
- [5. React Error Boundaries](./1.8-error-handling-and-debugging.md#5-react-error-boundaries)
- [6. Summary Checklist](./1.8-error-handling-and-debugging.md#6-summary-checklist)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F01-javascript-fundamentals%2F1.8-error-handling-and-debugging" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

