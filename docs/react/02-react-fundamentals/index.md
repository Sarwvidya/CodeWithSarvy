---
title: "Chapter 2: React Fundamentals"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /react/react-fundamentals
---

# Chapter 2: React Fundamentals

React is a component-driven, declarative JavaScript library for building dynamic, modern user interfaces. By modeling UIs as pure functions of state, React eliminates manual DOM mutations, enabling predictable data flow and rapid UI development.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="js-fundamentals-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Declarative UI</span>
    <span class="card-step">2.1</span>
  </div>
  <div class="card-icon">⚛️</div>

### [2.1 JSX & Rendering Elements](./2.1-jsx-and-rendering-elements.md)

Explore JSX syntax rules, embedding JavaScript expressions with `{}`, React Fragment wrappers (`<>`), how compilers transform JSX to `React.createElement`, and DOM mounting with `createRoot`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.1-jsx-and-rendering-elements" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Component Architecture</span>
    <span class="card-step">2.2</span>
  </div>
  <div class="card-icon">🧱</div>

### [2.2 Components & Props](./2.2-components-and-props.md)

Functional components, top-down unidirectional data flow, props destructuring with default fallbacks, the `props.children` composition pattern, and the immutability of pure functions.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.2-components-and-props" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Component Memory</span>
    <span class="card-step">2.3</span>
  </div>
  <div class="card-icon">💾</div>

### [2.3 State Management with useState](./2.3-state-management-with-usestate.md)

Why local variables fail in React, declaring state with `useState`, automatic batching, functional updater patterns (`prev => next`), and updating state objects and arrays immutably.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.3-state-management-with-usestate" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">User Interactivity</span>
    <span class="card-step">2.4</span>
  </div>
  <div class="card-icon">🖱️</div>

### [2.4 Handling Events in React](./2.4-handling-events.md)

CamelCase event bindings in JSX, passing function references vs invoking, parameter forwarding via arrow functions, the cross-browser `SyntheticEvent` wrapper, and `preventDefault()` / `stopPropagation()`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.4-handling-events" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Dynamic UI Flow</span>
    <span class="card-step">2.5</span>
  </div>
  <div class="card-icon">🔀</div>

### [2.5 Conditional Rendering](./2.5-conditional-rendering.md)

Guard clauses with early returns, hiding components by returning `null`, inline ternary operators in JSX, logical `&&` short-circuiting, avoiding the numeric zero `0` trap, and multi-state lookup tables.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.5-conditional-rendering" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Collections & Diffing</span>
    <span class="card-step">2.6</span>
  </div>
  <div class="card-icon">📋</div>

### [2.6 Lists & Keys](./2.6-lists-and-keys.md)

Transforming data collections into JSX with `map()`, why React demands stable `key` props, how keys drive the reconciliation diffing algorithm, and the pitfalls of the index-as-key anti-pattern.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.6-lists-and-keys" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Form State</span>
    <span class="card-step">2.7</span>
  </div>
  <div class="card-icon">📝</div>

### [2.7 Forms & Controlled Components](./2.7-forms-and-controlled-components.md)

Controlled components with Single Source of Truth, handling multiple inputs with computed property names, checkboxes and select dropdowns, and uncontrolled file inputs with `useRef`.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.7-forms-and-controlled-components" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Effects & Synchronization</span>
    <span class="card-step">2.8</span>
  </div>
  <div class="card-icon">⚡</div>

### [2.8 Component Lifecycle & useEffect](./2.8-component-lifecycle-and-useeffect.md)

Component lifecycle phases (Mounting, Updating, Unmounting), synchronizing side-effects with `useEffect`, the 3 rules of the dependency array, and cleanup functions for timers, events, and subscriptions.

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=react%2F02-react-fundamentals%2F2.8-component-lifecycle-and-useeffect" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>

---

## 💡 Navigating Notes in Obsidian & Docusaurus

1. In the Docusaurus sidebar, **Chapter 2: React Fundamentals** is a collapsible dropdown containing all subtopics from `2.1` to `2.8`.
2. In Obsidian, expand the `02-react-fundamentals` folder inside `react` to browse and edit all notes in numerical order.
3. Use the top breadcrumb in any subtopic note to quickly return to this Chapter 2 overview.
