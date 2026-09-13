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

- [What is a Spring Bean?](./2.1-bean-stereotypes-and-component-scan.md#what-is-a-spring-bean)
- [`@Component` vs `@bean`](./2.1-bean-stereotypes-and-component-scan.md#component-vs-bean)
  - [`@Component`](./2.1-bean-stereotypes-and-component-scan.md#component)
  - [`@Bean`](./2.1-bean-stereotypes-and-component-scan.md#bean)
- [Stereotype Annotations Hierarchy](./2.1-bean-stereotypes-and-component-scan.md#stereotype-annotations-hierarchy)
  - [**`@Component`**](./2.1-bean-stereotypes-and-component-scan.md#component-1)
  - [**`@Service`**](./2.1-bean-stereotypes-and-component-scan.md#service)
  - [**`@Repository`**](./2.1-bean-stereotypes-and-component-scan.md#repository)
  - [**`@Controller`**](./2.1-bean-stereotypes-and-component-scan.md#controller)
  - [**`@RestController`**](./2.1-bean-stereotypes-and-component-scan.md#restcontroller)
- [@Configuration and @Bean Mechanics](./2.1-bean-stereotypes-and-component-scan.md#configuration-and-bean-mechanics)
- [Component Scanning Mechanics](./2.1-bean-stereotypes-and-component-scan.md#component-scanning-mechanics)

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

### [2.2 Dependency Injection](./2.2-dependency-injection.md)

<div class="card-toc">

- [What is Dependency Injection?](./2.2-dependency-injection.md#what-is-dependency-injection)
- [Without Dependency Injection](./2.2-dependency-injection.md#without-dependency-injection)
- [With Dependency Injection](./2.2-dependency-injection.md#with-dependency-injection)
- [The Three Forms of Injection](./2.2-dependency-injection.md#the-three-forms-of-injection)
  - [1. Constructor Injection (Industry Best Practice) ✅](./2.2-dependency-injection.md#1-constructor-injection-industry-best-practice-)
  - [2. Setter Injection (For Optional Dependencies)](./2.2-dependency-injection.md#2-setter-injection-for-optional-dependencies)
  - [3. Field Injection (Discouraged / Anti-Pattern) ❌](./2.2-dependency-injection.md#3-field-injection-discouraged--anti-pattern-)
- [Why Field Injection is an Anti-Pattern](./2.2-dependency-injection.md#why-field-injection-is-an-anti-pattern)
- [Circular Dependencies & Resolution](./2.2-dependency-injection.md#circular-dependencies--resolution)
  - [What Happens in Spring Boot?](./2.2-dependency-injection.md#what-happens-in-spring-boot)
  - [Production Fixes:](./2.2-dependency-injection.md#production-fixes)
- [DI vs Factory Pattern](./2.2-dependency-injection.md#di-vs-factory-pattern)
  - [Factory](./2.2-dependency-injection.md#factory)
  - [Dependency Injection](./2.2-dependency-injection.md#dependency-injection)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.2-dependency-injection" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-indigo">
  <div class="card-meta">
    <span class="card-badge">Wiring & Injection</span>
    <span class="card-step">2.3</span>
  </div>
  <div class="card-icon">⚡</div>

### [2.3 Autowiring](./2.3-autowiring.md)

<div class="card-toc">

- [What is Autowiring?](./2.3-autowiring.md#what-is-autowiring)
  - [What does @Autowired do?](./2.3-autowiring.md#what-does-autowired-do)
  - [Dependency Injection vs Autowiring](./2.3-autowiring.md#dependency-injection-vs-autowiring)
  - [The Autowiring Process](./2.3-autowiring.md#the-autowiring-process)
- [Types of Autowiring](./2.3-autowiring.md#types-of-autowiring)
  - [1. Constructor Injection (Recommended)](./2.3-autowiring.md#1-constructor-injection-recommended)
  - [2. Setter / Method Injection](./2.3-autowiring.md#2-setter--method-injection)
  - [3. Field Injection (Discouraged Anti-Pattern)](./2.3-autowiring.md#3-field-injection-discouraged-anti-pattern)
- [How Spring Resolves Autowired Beans Under the Hood](./2.3-autowiring.md#how-spring-resolves-autowired-beans-under-the-hood)
  - [`@Primary`](./2.3-autowiring.md#primary)
  - [`@Qualifier`](./2.3-autowiring.md#qualifier)
  - [`@Primary` vs `@Qualifier`](./2.3-autowiring.md#primary-vs-qualifier)
- [4. Handling Optional Dependencies](./2.3-autowiring.md#4-handling-optional-dependencies)
  - [Approach 1: `@Autowired(required = false)`](./2.3-autowiring.md#approach-1-autowiredrequired--false)
  - [Approach 2: Java 8 `java.util.Optional<T>` (Recommended)](./2.3-autowiring.md#approach-2-java-8-javautiloptionalt-recommended)
  - [Approach 3: `@Nullable`](./2.3-autowiring.md#approach-3-nullable)
- [5. Legacy XML Autowiring Modes](./2.3-autowiring.md#5-legacy-xml-autowiring-modes)
- [6. `@Autowired` vs `@Resource` vs `@Inject`](./2.3-autowiring.md#6-autowired-vs-resource-vs-inject)
  - [Detailed Comparison Matrix](./2.3-autowiring.md#detailed-comparison-matrix)
  - [Example Using `@Resource`:](./2.3-autowiring.md#example-using-resource)
- [7. Real-World Gotchas & Interview Traps](./2.3-autowiring.md#7-real-world-gotchas--interview-traps)
  - [1. The `new` Operator Trap](./2.3-autowiring.md#1-the-new-operator-trap)
  - [2. Autowiring `static` Fields Fails](./2.3-autowiring.md#2-autowiring-static-fields-fails)
  - [3. Missing Default Constructor with Multiple Constructors](./2.3-autowiring.md#3-missing-default-constructor-with-multiple-constructors)
- [8. Summary Checklist](./2.3-autowiring.md#8-summary-checklist)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.3-autowiring" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Lifecycle & Memory</span>
    <span class="card-step">2.4</span>
  </div>
  <div class="card-icon">🔄</div>

### [2.4 Bean Scopes & Lifecycle](./2.4-bean-lifecycle-and-scopes.md)

<div class="card-toc">

- [What is Bean scope?](./2.4-bean-lifecycle-and-scopes.md#what-is-bean-scope)
  - [1. Singleton Scope — Most Important](./2.4-bean-lifecycle-and-scopes.md#1-singleton-scope--most-important)
  - [2. Prototype Scope](./2.4-bean-lifecycle-and-scopes.md#2-prototype-scope)
  - [3. Request Scope](./2.4-bean-lifecycle-and-scopes.md#3-request-scope)
  - [4. Session Scope](./2.4-bean-lifecycle-and-scopes.md#4-session-scope)
  - [5. Application Scope](./2.4-bean-lifecycle-and-scopes.md#5-application-scope)
  - [6. WebSocket Scope](./2.4-bean-lifecycle-and-scopes.md#6-websocket-scope)
- [Spring Bean Scopes Matrix](./2.4-bean-lifecycle-and-scopes.md#spring-bean-scopes-matrix)
  - [What happens when Prototype is injected into Singleton?](./2.4-bean-lifecycle-and-scopes.md#what-happens-when-prototype-is-injected-into-singleton)
  - [Is Singleton Bean Thread-Safe?](./2.4-bean-lifecycle-and-scopes.md#is-singleton-bean-thread-safe)
- [Complete Bean Lifecycle Hook Sequence](./2.4-bean-lifecycle-and-scopes.md#complete-bean-lifecycle-hook-sequence)
  - [`@PostConstruct`](./2.4-bean-lifecycle-and-scopes.md#postconstruct)
  - [`@PreDestroy`](./2.4-bean-lifecycle-and-scopes.md#predestroy)
- [BeanPostProcessor Real-World Power](./2.4-bean-lifecycle-and-scopes.md#beanpostprocessor-real-world-power)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.4-bean-lifecycle-and-scopes" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Candidate Selection</span>
    <span class="card-step">2.5</span>
  </div>
  <div class="card-icon">🎯</div>

### [2.5 Disambiguation & Qualifiers](./2.5-bean-disambiguation-and-qualifiers.md)

<div class="card-toc">

- [1. The Disambiguation Problem](./2.5-bean-disambiguation-and-qualifiers.md#1-the-disambiguation-problem)
- [2. Solutions: @Primary vs @Qualifier](./2.5-bean-disambiguation-and-qualifiers.md#2-solutions-primary-vs-qualifier)
  - [A. `@Primary` (Default Priority)](./2.5-bean-disambiguation-and-qualifiers.md#a-primary-default-priority)
  - [B. `@Qualifier` (Explicit Target Selection)](./2.5-bean-disambiguation-and-qualifiers.md#b-qualifier-explicit-target-selection)
- [3. Custom Qualifier Annotations](./2.5-bean-disambiguation-and-qualifiers.md#3-custom-qualifier-annotations)
- [4. Injecting Collections of Beans & @Order](./2.5-bean-disambiguation-and-qualifiers.md#4-injecting-collections-of-beans--order)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.5-bean-disambiguation-and-qualifiers" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Cross-Cutting Concerns</span>
    <span class="card-step">2.6</span>
  </div>
  <div class="card-icon">🛡️</div>

### [2.6 Spring AOP & Proxies](./2.6-spring-aop-and-proxies.md)

<div class="card-toc">

- [1. Core AOP Terminology](./2.6-spring-aop-and-proxies.md#1-core-aop-terminology)
- [2. Advice Types & Code Example](./2.6-spring-aop-and-proxies.md#2-advice-types--code-example)
  - [Advice Kinds:](./2.6-spring-aop-and-proxies.md#advice-kinds)
- [3. CGLIB vs JDK Dynamic Proxies](./2.6-spring-aop-and-proxies.md#3-cglib-vs-jdk-dynamic-proxies)
  - [The Self-Invocation Gotcha:](./2.6-spring-aop-and-proxies.md#the-self-invocation-gotcha)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F02-spring-beans-and-di%2F2.6-spring-aop-and-proxies" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
