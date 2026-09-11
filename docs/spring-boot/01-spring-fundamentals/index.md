---
title: "Chapter 1: Spring & Spring Boot Fundamentals"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/spring-fundamentals
---

# Chapter 1: Spring & Spring Boot Fundamentals

Spring Boot revolutionized modern enterprise Java by taking the foundational inversion-of-control paradigm and pairing it with opinionated defaults, auto-configuration, and standalone production runtimes. Mastering its bootstrap lifecycle, starters, conditional beans, and configuration profiles is essential for modern cloud-native engineering.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Foundations & IoC</span>
    <span class="card-step">1.1</span>
  </div>
  <div class="card-icon">🌱</div>

### [1.1 Spring Framework & IoC Container](./1.1-spring-framework-and-ioc-container.md)

<div class="card-toc">

- [1. Inversion of Control (IoC) Principle](./1.1-spring-framework-and-ioc-container.md#1-inversion-of-control-ioc-principle)
  - [Architectural Benefits:](./1.1-spring-framework-and-ioc-container.md#architectural-benefits)
- [2. BeanFactory vs ApplicationContext](./1.1-spring-framework-and-ioc-container.md#2-beanfactory-vs-applicationcontext)
  - [BeanFactory](./1.1-spring-framework-and-ioc-container.md#beanfactory)
  - [ApplicationContext](./1.1-spring-framework-and-ioc-container.md#applicationcontext)
- [3. Spring Container Lifecycle Stages](./1.1-spring-framework-and-ioc-container.md#3-spring-container-lifecycle-stages)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F01-spring-fundamentals%2F1.1-spring-framework-and-ioc-container" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Architecture & Starters</span>
    <span class="card-step">1.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [1.2 Spring Boot Architecture & Starters](./1.2-spring-boot-architecture-and-starters.md)

<div class="card-toc">

- [What is Auto-Configuration?](./1.2-spring-boot-architecture-and-starters.md#what-is-auto-configuration)
- [1. Spring Boot additional feature](./1.2-spring-boot-architecture-and-starters.md#1-spring-boot-additional-feature)
- [2. Different types of Starter Dependency](./1.2-spring-boot-architecture-and-starters.md#2-different-types-of-starter-dependency)
  - [Popular Official Starters:](./1.2-spring-boot-architecture-and-starters.md#popular-official-starters)
- [3. Embedded Web Servers](./1.2-spring-boot-architecture-and-starters.md#3-embedded-web-servers)
  - [Switching Embedded Servers](./1.2-spring-boot-architecture-and-starters.md#switching-embedded-servers)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F01-spring-fundamentals%2F1.2-spring-boot-architecture-and-starters" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Auto-Configuration</span>
    <span class="card-step">1.3</span>
  </div>
  <div class="card-icon">⚙️</div>

### [1.3 Auto-Configuration & Conditions](./1.3-auto-configuration-and-conditions.md)

<div class="card-toc">

- [1. How @EnableAutoConfiguration Operates](./1.3-auto-configuration-and-conditions.md#1-how-enableautoconfiguration-operates)
- [2. Spring Boot 3 AutoConfiguration.imports](./1.3-auto-configuration-and-conditions.md#2-spring-boot-3-autoconfigurationimports)
- [3. Conditional Annotations Deep Dive](./1.3-auto-configuration-and-conditions.md#3-conditional-annotations-deep-dive)
  - [Code Example: Custom Auto-Configuration](./1.3-auto-configuration-and-conditions.md#code-example-custom-auto-configuration)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F01-spring-fundamentals%2F1.3-auto-configuration-and-conditions" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Startup Internals</span>
    <span class="card-step">1.4</span>
  </div>
  <div class="card-icon">🚀</div>

### [1.4 Application Startup & Internals](./1.4-application-startup-and-internals.md)

<div class="card-toc">

- [1. Anatomy of @SpringBootApplication](./1.4-application-startup-and-internals.md#1-anatomy-of-springbootapplication)
- [2. SpringApplication.run() Execution Flow](./1.4-application-startup-and-internals.md#2-springapplicationrun-execution-flow)
- [3. FailureAnalyzers and Custom Listeners](./1.4-application-startup-and-internals.md#3-failureanalyzers-and-custom-listeners)
  - [FailureAnalyzers](./1.4-application-startup-and-internals.md#failureanalyzers)
  - [ApplicationRunner vs CommandLineRunner](./1.4-application-startup-and-internals.md#applicationrunner-vs-commandlinerunner)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F01-spring-fundamentals%2F1.4-application-startup-and-internals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Configuration & Profiles</span>
    <span class="card-step">1.5</span>
  </div>
  <div class="card-icon">🔧</div>

### [1.5 Externalized Configuration & Profiles](./1.5-externalized-configuration-and-profiles.md)

<div class="card-toc">

- [1. Configuration Precedence Matrix](./1.5-externalized-configuration-and-profiles.md#1-configuration-precedence-matrix)
- [2. @Value vs @ConfigurationProperties](./1.5-externalized-configuration-and-profiles.md#2-value-vs-configurationproperties)
  - [Type-Safe Configuration Example (Java Record)](./1.5-externalized-configuration-and-profiles.md#type-safe-configuration-example-java-record)
- [3. Environment Profiles Management](./1.5-externalized-configuration-and-profiles.md#3-environment-profiles-management)
  - [Activating Profiles:](./1.5-externalized-configuration-and-profiles.md#activating-profiles)
  - [Conditional Beans per Profile](./1.5-externalized-configuration-and-profiles.md#conditional-beans-per-profile)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F01-spring-fundamentals%2F1.5-externalized-configuration-and-profiles" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
