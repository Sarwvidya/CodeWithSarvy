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

<div class="card-toc">

- [1. What is JSX?](./2.1-jsx-and-rendering-elements.md#1-what-is-jsx)
  - [Behind the Scenes: The JSX Transform](./2.1-jsx-and-rendering-elements.md#behind-the-scenes-the-jsx-transform)
- [2. Rules of Writing JSX](./2.1-jsx-and-rendering-elements.md#2-rules-of-writing-jsx)
  - [Rule 1: Return a Single Root Element](./2.1-jsx-and-rendering-elements.md#rule-1-return-a-single-root-element)
  - [Rule 2: Close All Tags](./2.1-jsx-and-rendering-elements.md#rule-2-close-all-tags)
  - [Rule 3: `camelCase` Most Attributes](./2.1-jsx-and-rendering-elements.md#rule-3-camelcase-most-attributes)
- [3. Embedding JavaScript Expressions with `{}`](./2.1-jsx-and-rendering-elements.md#3-embedding-javascript-expressions-with-)
- [4. Rendering Elements into the DOM](./2.1-jsx-and-rendering-elements.md#4-rendering-elements-into-the-dom)
  - [React.StrictMode](./2.1-jsx-and-rendering-elements.md#reactstrictmode)
- [5. Summary Checklist](./2.1-jsx-and-rendering-elements.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Functional Components](./2.2-components-and-props.md#1-functional-components)
- [2. What are Props?](./2.2-components-and-props.md#2-what-are-props)
  - [Passing and Consuming Props](./2.2-components-and-props.md#passing-and-consuming-props)
- [3. `props.children`: The Power of Composition](./2.2-components-and-props.md#3-propschildren-the-power-of-composition)
- [4. Props are Read-Only (Pure Functions)](./2.2-components-and-props.md#4-props-are-read-only-pure-functions)
- [5. Summary Checklist](./2.2-components-and-props.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Why Normal Variables Don't Work](./2.3-state-management-with-usestate.md#1-why-normal-variables-dont-work)
- [2. The `useState` Hook](./2.3-state-management-with-usestate.md#2-the-usestate-hook)
- [3. Automatic Batching & Asynchronous Updates](./2.3-state-management-with-usestate.md#3-automatic-batching--asynchronous-updates)
  - [The Solution: Functional State Updates](./2.3-state-management-with-usestate.md#the-solution-functional-state-updates)
- [4. State with Objects & Arrays](./2.3-state-management-with-usestate.md#4-state-with-objects--arrays)
  - [Updating an Object](./2.3-state-management-with-usestate.md#updating-an-object)
  - [Updating an Array](./2.3-state-management-with-usestate.md#updating-an-array)
- [5. Summary Checklist](./2.3-state-management-with-usestate.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Syntax: Passing Function References](./2.4-handling-events.md#1-syntax-passing-function-references)
- [2. Passing Arguments to Event Handlers](./2.4-handling-events.md#2-passing-arguments-to-event-handlers)
- [3. The SyntheticEvent Object](./2.4-handling-events.md#3-the-syntheticevent-object)
- [4. Stopping Event Propagation](./2.4-handling-events.md#4-stopping-event-propagation)
- [5. Summary Checklist](./2.4-handling-events.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Early Return Pattern (Guard Clauses)](./2.5-conditional-rendering.md#1-early-return-pattern-guard-clauses)
  - [Returning `null` to Prevent Rendering](./2.5-conditional-rendering.md#returning-null-to-prevent-rendering)
- [2. Inline Ternary Operator (`condition ? true : false`)](./2.5-conditional-rendering.md#2-inline-ternary-operator-condition--true--false)
- [3. Logical AND Operator (`condition && <Element />`)](./2.5-conditional-rendering.md#3-logical-and-operator-condition--element-)
- [4. Multi-Branch Rendering (Lookup Objects)](./2.5-conditional-rendering.md#4-multi-branch-rendering-lookup-objects)
- [5. Summary Checklist](./2.5-conditional-rendering.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Rendering Lists with `map()`](./2.6-lists-and-keys.md#1-rendering-lists-with-map)
- [2. Why React Demands `key`](./2.6-lists-and-keys.md#2-why-react-demands-key)
- [3. The Index as Key Anti-Pattern](./2.6-lists-and-keys.md#3-the-index-as-key-anti-pattern)
  - [Why Index as Key Breaks](./2.6-lists-and-keys.md#why-index-as-key-breaks)
- [4. Rules of Keys](./2.6-lists-and-keys.md#4-rules-of-keys)
- [5. Summary Checklist](./2.6-lists-and-keys.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. Controlled vs Uncontrolled Components](./2.7-forms-and-controlled-components.md#1-controlled-vs-uncontrolled-components)
- [2. The Controlled Input Pattern](./2.7-forms-and-controlled-components.md#2-the-controlled-input-pattern)
- [3. Handling Multiple Inputs with a Single State Object](./2.7-forms-and-controlled-components.md#3-handling-multiple-inputs-with-a-single-state-object)
- [4. Uncontrolled Inputs with `useRef`](./2.7-forms-and-controlled-components.md#4-uncontrolled-inputs-with-useref)
- [5. Summary Checklist](./2.7-forms-and-controlled-components.md#5-summary-checklist)

</div>

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

<div class="card-toc">

- [1. The Three Lifecycle Phases](./2.8-component-lifecycle-and-useeffect.md#1-the-three-lifecycle-phases)
- [2. What is a Side-Effect?](./2.8-component-lifecycle-and-useeffect.md#2-what-is-a-side-effect)
- [3. The Anatomy of `useEffect`](./2.8-component-lifecycle-and-useeffect.md#3-the-anatomy-of-useeffect)
  - [The 3 Rules of the Dependency Array:](./2.8-component-lifecycle-and-useeffect.md#the-3-rules-of-the-dependency-array)
- [4. The Cleanup Function](./2.8-component-lifecycle-and-useeffect.md#4-the-cleanup-function)
  - [Why Cleanup Matters in React 18 & 19](./2.8-component-lifecycle-and-useeffect.md#why-cleanup-matters-in-react-18--19)
- [5. Summary Checklist](./2.8-component-lifecycle-and-useeffect.md#5-summary-checklist)

</div>

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
