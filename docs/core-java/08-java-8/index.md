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

- [What is a Lambda Expression?](./8.1-lambda-expressions.md#what-is-a-lambda-expression)
- [Different Lambda forms](./8.1-lambda-expressions.md#different-lambda-forms)
  - [No/Zero Parameter](./8.1-lambda-expressions.md#nozero-parameter)
  - [Single Parameter](./8.1-lambda-expressions.md#single-parameter)
  - [Multiple Parameters](./8.1-lambda-expressions.md#multiple-parameters)
  - [Multiple Parameters with Inferred Types](./8.1-lambda-expressions.md#multiple-parameters-with-inferred-types)
  - [Multi-line Body](./8.1-lambda-expressions.md#multi-line-body)
- [Lambda does NOT have a type by itself](./8.1-lambda-expressions.md#lambda-does-not-have-a-type-by-itself)
- [Why Functional Interface is required](./8.1-lambda-expressions.md#why-functional-interface-is-required)
- [Lambda and Variable Scope](./8.1-lambda-expressions.md#lambda-and-variable-scope)
  - [What does effectively final mean?](./8.1-lambda-expressions.md#what-does-effectively-final-mean)
- [Modern Java 8 Lambda:](./8.1-lambda-expressions.md#modern-java-8-lambda)
- [Version wise updates](./8.1-lambda-expressions.md#version-wise-updates)

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

- [What is a Functional Interface?](./8.2-functional-interfaces.md#what-is-a-functional-interface)
- [Why do we need Functional Interface?](./8.2-functional-interfaces.md#why-do-we-need-functional-interface)
- [Why exactly ONE abstract method?](./8.2-functional-interfaces.md#why-exactly-one-abstract-method)
- [But can Functional Interface have other methods?](./8.2-functional-interfaces.md#but-can-functional-interface-have-other-methods)
- [What is @FunctionalInterface?](./8.2-functional-interfaces.md#what-is-functionalinterface)
  - [Is @FunctionalInterface mandatory?](./8.2-functional-interfaces.md#is-functionalinterface-mandatory)
- [Common Functional Interfaces provided by Java](./8.2-functional-interfaces.md#common-functional-interfaces-provided-by-java)
  - [1. `Predicate<T>`](./8.2-functional-interfaces.md#1-predicatet)
  - [2. `Function<T, R>`](./8.2-functional-interfaces.md#2-functiont-r)
  - [3. `Consumer<T>`](./8.2-functional-interfaces.md#3-consumert)
  - [4. `Supplier<T>`](./8.2-functional-interfaces.md#4-suppliert)

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

- [What is a Method Reference?](./8.3-method-references.md#what-is-a-method-reference)
- [Why was Method Reference introduced?](./8.3-method-references.md#why-was-method-reference-introduced)
- [Four Kinds of Method References](./8.3-method-references.md#four-kinds-of-method-references)
  - [1. Reference to a `Static Method`](./8.3-method-references.md#1-reference-to-a-static-method)
  - [2. Reference to an `Instance Method of a Particular Object`](./8.3-method-references.md#2-reference-to-an-instance-method-of-a-particular-object)
  - [3. Reference to an `Instance Method of an Arbitrary Object of a Specific Type`](./8.3-method-references.md#3-reference-to-an-instance-method-of-an-arbitrary-object-of-a-specific-type)
  - [4. Reference to a `Constructor`](./8.3-method-references.md#4-reference-to-a-constructor)
- [Lambda vs Method Reference: When to Use What?](./8.3-method-references.md#lambda-vs-method-reference-when-to-use-what)

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

- [What is Streams?](./8.4-stream-api.md#what-is-streams)
- [Why was Stream API introduced?](./8.4-stream-api.md#why-was-stream-api-introduced)
- [Streams vs Collections](./8.4-stream-api.md#streams-vs-collections)
- [Stream Pipeline](./8.4-stream-api.md#stream-pipeline)
- [Intermediate Operations (Lazy)](./8.4-stream-api.md#intermediate-operations-lazy)
  - [`map()` vs `flatMap()`:](./8.4-stream-api.md#map-vs-flatmap)
- [Terminal Operations (Eager)](./8.4-stream-api.md#terminal-operations-eager)
- [Version wise Updates](./8.4-stream-api.md#version-wise-updates)
- [Parallel Streams (Multithreading)](./8.4-stream-api.md#parallel-streams-multithreading)

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

- [What is Optional Class?](./8.5-optional-class.md#what-is-optional-class)
- [Creating Optional Instances](./8.5-optional-class.md#creating-optional-instances)
  - [`Optional.of()`](./8.5-optional-class.md#optionalof)
  - [`Optional.ofNullable()`](./8.5-optional-class.md#optionalofnullable)
  - [`Optional.empty()`](./8.5-optional-class.md#optionalempty)
- [Optional class method](./8.5-optional-class.md#optional-class-method)

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
