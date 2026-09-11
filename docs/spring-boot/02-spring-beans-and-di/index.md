---
title: "Chapter 2: Spring Beans & Dependency Injection"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/spring-beans-and-di
---

# Chapter 2: Spring Beans & Dependency Injection

Spring's IoC container is the core engine managing component lifecycles, dependency graphs, and enterprise cross-cutting concerns. Mastering bean stereotypes, constructor injection, scoping rules, disambiguation, and runtime proxies empowers you to build robust, scalable architectures.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Component Discovery</span>
    <span class="card-step">2.1</span>
  </div>
  <div class="card-icon">📦</div>

### [2.1 Bean Stereotypes & Component Scan](./2.1-bean-stereotypes-and-component-scan.md)

<div class="card-toc">

- [1. Stereotype Annotations Hierarchy](./2.1-bean-stereotypes-and-component-scan.md#1-stereotype-annotations-hierarchy)
  - [Purpose of Each Layer:](./2.1-bean-stereotypes-and-component-scan.md#purpose-of-each-layer)
- [2. @Configuration and @Bean Mechanics](./2.1-bean-stereotypes-and-component-scan.md#2-configuration-and-bean-mechanics)
- [3. Component Scanning Mechanics](./2.1-bean-stereotypes-and-component-scan.md#3-component-scanning-mechanics)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.1-bean-stereotypes-and-component-scan" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Wiring & Inversion</span>
    <span class="card-step">2.2</span>
  </div>
  <div class="card-icon">🔌</div>

### [2.2 Dependency Injection & Wiring](./2.2-dependency-injection-and-wiring.md)

<div class="card-toc">

- [1. The Three Forms of Injection](./2.2-dependency-injection-and-wiring.md#1-the-three-forms-of-injection)
  - [A. Constructor Injection (Industry Best Practice)](./2.2-dependency-injection-and-wiring.md#a-constructor-injection-industry-best-practice)
  - [B. Setter Injection (For Optional Dependencies)](./2.2-dependency-injection-and-wiring.md#b-setter-injection-for-optional-dependencies)
  - [C. Field Injection (Discouraged / Anti-Pattern)](./2.2-dependency-injection-and-wiring.md#c-field-injection-discouraged--anti-pattern)
- [2. Why Field Injection is an Anti-Pattern](./2.2-dependency-injection-and-wiring.md#2-why-field-injection-is-an-anti-pattern)
- [3. Circular Dependencies & Resolution](./2.2-dependency-injection-and-wiring.md#3-circular-dependencies--resolution)
  - [What Happens in Spring Boot?](./2.2-dependency-injection-and-wiring.md#what-happens-in-spring-boot)
  - [Production Fixes:](./2.2-dependency-injection-and-wiring.md#production-fixes)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.2-dependency-injection-and-wiring" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Lifecycle & Memory</span>
    <span class="card-step">2.3</span>
  </div>
  <div class="card-icon">🔄</div>

### [2.3 Bean Scopes & Lifecycle](./2.3-bean-lifecycle-and-scopes.md)

<div class="card-toc">

- [1. Spring Bean Scopes Matrix](./2.3-bean-lifecycle-and-scopes.md#1-spring-bean-scopes-matrix)
  - [Prototype Inside Singleton Pitfall:](./2.3-bean-lifecycle-and-scopes.md#prototype-inside-singleton-pitfall)
- [2. Complete Bean Lifecycle Hook Sequence](./2.3-bean-lifecycle-and-scopes.md#2-complete-bean-lifecycle-hook-sequence)
- [3. BeanPostProcessor Real-World Power](./2.3-bean-lifecycle-and-scopes.md#3-beanpostprocessor-real-world-power)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.3-bean-lifecycle-and-scopes" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Candidate Selection</span>
    <span class="card-step">2.4</span>
  </div>
  <div class="card-icon">🎯</div>

### [2.4 Disambiguation & Qualifiers](./2.4-bean-disambiguation-and-qualifiers.md)

<div class="card-toc">

- [1. The Disambiguation Problem](./2.4-bean-disambiguation-and-qualifiers.md#1-the-disambiguation-problem)
- [2. Solutions: @Primary vs @Qualifier](./2.4-bean-disambiguation-and-qualifiers.md#2-solutions-primary-vs-qualifier)
  - [A. `@Primary` (Default Priority)](./2.4-bean-disambiguation-and-qualifiers.md#a-primary-default-priority)
  - [B. `@Qualifier` (Explicit Target Selection)](./2.4-bean-disambiguation-and-qualifiers.md#b-qualifier-explicit-target-selection)
- [3. Custom Qualifier Annotations](./2.4-bean-disambiguation-and-qualifiers.md#3-custom-qualifier-annotations)
- [4. Injecting Collections of Beans & @Order](./2.4-bean-disambiguation-and-qualifiers.md#4-injecting-collections-of-beans--order)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.4-bean-disambiguation-and-qualifiers" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Cross-Cutting Concerns</span>
    <span class="card-step">2.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [2.5 Spring AOP & Proxies](./2.5-spring-aop-and-proxies.md)

<div class="card-toc">

- [1. Core AOP Terminology](./2.5-spring-aop-and-proxies.md#1-core-aop-terminology)
- [2. Advice Types & Code Example](./2.5-spring-aop-and-proxies.md#2-advice-types--code-example)
  - [Advice Kinds:](./2.5-spring-aop-and-proxies.md#advice-kinds)
- [3. CGLIB vs JDK Dynamic Proxies](./2.5-spring-aop-and-proxies.md#3-cglib-vs-jdk-dynamic-proxies)
  - [The Self-Invocation Gotcha:](./2.5-spring-aop-and-proxies.md#the-self-invocation-gotcha)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.5-spring-aop-and-proxies" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
