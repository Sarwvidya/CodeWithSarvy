---
title: "Chapter 8: Java 8 Features"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /core-java/java-8
---

# Chapter 8: Java 8 Features

Java 8 was the most monumental release in Java history, transitioning the language from strictly imperative and object-oriented paradigms into modern functional programming. With Lambda Expressions, Functional Interfaces, the Stream API, Optional null safety, and the Date/Time API, Java code became concise, expressive, and parallel-friendly.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="core-java-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Functional Core</span>
    <span class="card-step">8.1</span>
  </div>
  <div class="card-icon">λ</div>

### [8.1 Lambda Expressions](./8.1-lambda-expressions.md)

<div class="card-toc">

- [1. What is a Lambda Expression?](./8.1-lambda-expressions.md#1-what-is-a-lambda-expression)
- [2. Syntax Variations](./8.1-lambda-expressions.md#2-syntax-variations)
- [3. Anonymous Inner Class vs Lambda Expression](./8.1-lambda-expressions.md#3-anonymous-inner-class-vs-lambda-expression)
  - [Legacy Anonymous Inner Class:](./8.1-lambda-expressions.md#legacy-anonymous-inner-class)
  - [Modern Java 8 Lambda:](./8.1-lambda-expressions.md#modern-java-8-lambda)
- [4. Capturing Variables: Effectively Final Rule](./8.1-lambda-expressions.md#4-capturing-variables-effectively-final-rule)
  - [Effectively Final Concept:](./8.1-lambda-expressions.md#effectively-final-concept)
- [5. Practical Examples](./8.1-lambda-expressions.md#5-practical-examples)
  - [Sorting a Collection:](./8.1-lambda-expressions.md#sorting-a-collection)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.1-lambda-expressions" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Contracts</span>
    <span class="card-step">8.2</span>
  </div>
  <div class="card-icon">🧩</div>

### [8.2 Functional Interfaces](./8.2-functional-interfaces.md)

<div class="card-toc">

- [1. The `@FunctionalInterface` Annotation](./8.2-functional-interfaces.md#1-the-functionalinterface-annotation)
- [2. Core Built-In Functional Interfaces (`java.util.function`)](./8.2-functional-interfaces.md#2-core-built-in-functional-interfaces-javautilfunction)
- [3. Deep Dive into Core Interfaces](./8.2-functional-interfaces.md#3-deep-dive-into-core-interfaces)
  - [1. `Predicate<T>`](./8.2-functional-interfaces.md#1-predicatet)
  - [2. `Function<T, R>`](./8.2-functional-interfaces.md#2-functiont-r)
  - [3. `Consumer<T>`](./8.2-functional-interfaces.md#3-consumert)
  - [4. `Supplier<T>`](./8.2-functional-interfaces.md#4-suppliert)
- [4. Binary Variants & Primitive Specializations](./8.2-functional-interfaces.md#4-binary-variants--primitive-specializations)
  - [Two-Argument Interfaces:](./8.2-functional-interfaces.md#two-argument-interfaces)
  - [Primitive Specializations (High Performance):](./8.2-functional-interfaces.md#primitive-specializations-high-performance)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.2-functional-interfaces" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-orange">
  <div class="card-meta">
    <span class="card-badge">Clean Syntax</span>
    <span class="card-step">8.3</span>
  </div>
  <div class="card-icon">🔗</div>

### [8.3 Method References](./8.3-method-references.md)

<div class="card-toc">

- [1. What is a Method Reference?](./8.3-method-references.md#1-what-is-a-method-reference)
- [2. Four Kinds of Method References](./8.3-method-references.md#2-four-kinds-of-method-references)
- [3. Detailed Breakdown & Code Examples](./8.3-method-references.md#3-detailed-breakdown--code-examples)
  - [1. Reference to a Static Method](./8.3-method-references.md#1-reference-to-a-static-method)
  - [2. Reference to an Instance Method of a Particular Object](./8.3-method-references.md#2-reference-to-an-instance-method-of-a-particular-object)
  - [3. Reference to an Instance Method of an Arbitrary Object of a Specific Type](./8.3-method-references.md#3-reference-to-an-instance-method-of-an-arbitrary-object-of-a-specific-type)
  - [4. Reference to a Constructor](./8.3-method-references.md#4-reference-to-a-constructor)
- [4. Lambda vs Method Reference: When to Use What?](./8.3-method-references.md#4-lambda-vs-method-reference-when-to-use-what)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.3-method-references" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-green">
  <div class="card-meta">
    <span class="card-badge">Data Pipelines</span>
    <span class="card-step">8.4</span>
  </div>
  <div class="card-icon">🌊</div>

### [8.4 Stream API](./8.4-stream-api.md)

<div class="card-toc">

- [1. Streams vs Collections](./8.4-stream-api.md#1-streams-vs-collections)
- [2. Anatomy of a Stream Pipeline](./8.4-stream-api.md#2-anatomy-of-a-stream-pipeline)
  - [1. Creating Streams (Source):](./8.4-stream-api.md#1-creating-streams-source)
- [3. Intermediate Operations (Lazy)](./8.4-stream-api.md#3-intermediate-operations-lazy)
  - [`map()` vs `flatMap()`:](./8.4-stream-api.md#map-vs-flatmap)
- [4. Terminal Operations (Eager)](./8.4-stream-api.md#4-terminal-operations-eager)
- [5. Collectors & Grouping (`java.util.stream.Collectors`)](./8.4-stream-api.md#5-collectors--grouping-javautilstreamcollectors)
- [6. Parallel Streams](./8.4-stream-api.md#6-parallel-streams)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.4-stream-api" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Null Safety</span>
    <span class="card-step">8.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [8.5 Optional Class & Null Safety](./8.5-optional-class.md)

<div class="card-toc">

- [1. Creating Optional Instances](./8.5-optional-class.md#1-creating-optional-instances)
- [2. Functional Transformation Pipeline](./8.5-optional-class.md#2-functional-transformation-pipeline)
- [3. `orElse()` vs `orElseGet()`: A Costly Trap](./8.5-optional-class.md#3-orelse-vs-orelseget-a-costly-trap)
- [4. Critical Anti-Patterns to Avoid](./8.5-optional-class.md#4-critical-anti-patterns-to-avoid)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.5-optional-class" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-pink">
  <div class="card-meta">
    <span class="card-badge">Modern Utilities</span>
    <span class="card-step">8.6</span>
  </div>
  <div class="card-icon">⚙️</div>

### [8.6 Default & Static Methods, Date/Time API & Other Features](./8.6-default-and-static-methods-and-more.md)

<div class="card-toc">

- [1. Default & Static Methods in Interfaces](./8.6-default-and-static-methods-and-more.md#1-default--static-methods-in-interfaces)
  - [Default Methods (`default` keyword)](./8.6-default-and-static-methods-and-more.md#default-methods-default-keyword)
  - [The Multiple Inheritance Conflict (Diamond Problem):](./8.6-default-and-static-methods-and-more.md#the-multiple-inheritance-conflict-diamond-problem)
  - [Static Methods in Interfaces:](./8.6-default-and-static-methods-and-more.md#static-methods-in-interfaces)
- [2. Modern Date and Time API (`java.time` / JSR-310)](./8.6-default-and-static-methods-and-more.md#2-modern-date-and-time-api-javatime--jsr-310)
  - [Practical Usage:](./8.6-default-and-static-methods-and-more.md#practical-usage)
- [3. Native Base64 Encoding & Decoding (`java.util.Base64`)](./8.6-default-and-static-methods-and-more.md#3-native-base64-encoding--decoding-javautilbase64)
- [4. Other Notable Java 8 Enhancements](./8.6-default-and-static-methods-and-more.md#4-other-notable-java-8-enhancements)
  - [`String.join()`](./8.6-default-and-static-methods-and-more.md#stringjoin)
  - [Repeating Annotations (`@Repeatable`)](./8.6-default-and-static-methods-and-more.md#repeating-annotations-repeatable)
  - [Concurrency Upgrades:](./8.6-default-and-static-methods-and-more.md#concurrency-upgrades)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=core-java%2F08-java-8%2F8.6-default-and-static-methods-and-more" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
