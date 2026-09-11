---
title: "Chapter 4: Exception Handling, Logging & Production Support"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/exception-handling-and-logging
---

# Chapter 4: Exception Handling, Logging & Production Support

Operating reliable enterprise services demands predictable error contracts, structured traceability across concurrent threads, proactive health monitoring, and deep telemetry metrics.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Centralized Interceptors</span>
    <span class="card-step">4.1</span>
  </div>
  <div class="card-icon">🚨</div>

### [4.1 Global Exception Handling](./4.1-global-exception-handling.md)

<div class="card-toc">

- [1. RFC 7807 ProblemDetail in Spring Boot 3](./4.1-global-exception-handling.md#1-rfc-7807-problemdetail-in-spring-boot-3)
- [2. Implementing @RestControllerAdvice](./4.1-global-exception-handling.md#2-implementing-restcontrolleradvice)
- [3. Security Considerations](./4.1-global-exception-handling.md#3-security-considerations)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F04-exception-handling-and-logging%2F4.1-global-exception-handling" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Business Modeling</span>
    <span class="card-step">4.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [4.2 Custom Domain Exceptions](./4.2-custom-domain-exceptions.md)

<div class="card-toc">

- [1. Clean Domain Exception Hierarchy](./4.2-custom-domain-exceptions.md#1-clean-domain-exception-hierarchy)
- [2. Designing the Base Exception Class](./4.2-custom-domain-exceptions.md#2-designing-the-base-exception-class)
  - [Specialized Concrete Exceptions](./4.2-custom-domain-exceptions.md#specialized-concrete-exceptions)
- [3. Best Practices & Anti-Patterns](./4.2-custom-domain-exceptions.md#3-best-practices--anti-patterns)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F04-exception-handling-and-logging%2F4.2-custom-domain-exceptions" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Traceability</span>
    <span class="card-step">4.3</span>
  </div>
  <div class="card-icon">📝</div>

### [4.3 Logging with SLF4J & Logback](./4.3-logging-architecture-and-slf4j.md)

<div class="card-toc">

- [1. Logging Levels & Thresholds](./4.3-logging-architecture-and-slf4j.md#1-logging-levels--thresholds)
  - [Configuring Levels in `application.yml`:](./4.3-logging-architecture-and-slf4j.md#configuring-levels-in-applicationyml)
- [2. Structured Logging with MDC (Mapped Diagnostic Context)](./4.3-logging-architecture-and-slf4j.md#2-structured-logging-with-mdc-mapped-diagnostic-context)
- [3. Logback Configuration (`logback-spring.xml`)](./4.3-logging-architecture-and-slf4j.md#3-logback-configuration-logback-springxml)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F04-exception-handling-and-logging%2F4.3-logging-architecture-and-slf4j" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Health & Ops</span>
    <span class="card-step">4.4</span>
  </div>
  <div class="card-icon">🩺</div>

### [4.4 Spring Boot Actuator](./4.4-spring-boot-actuator.md)

<div class="card-toc">

- [1. Key Actuator Endpoints](./4.4-spring-boot-actuator.md#1-key-actuator-endpoints)
- [2. Exposing & Securing Actuator in `application.yml`](./4.4-spring-boot-actuator.md#2-exposing--securing-actuator-in-applicationyml)
- [3. Custom Health Indicators](./4.4-spring-boot-actuator.md#3-custom-health-indicators)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F04-exception-handling-and-logging%2F4.4-spring-boot-actuator" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Telemetry & APM</span>
    <span class="card-step">4.5</span>
  </div>
  <div class="card-icon">📊</div>

### [4.5 Metrics & Observability](./4.5-metrics-and-observability.md)

<div class="card-toc">

- [1. Micrometer Core Meter Types](./4.5-metrics-and-observability.md#1-micrometer-core-meter-types)
- [2. Programmatic Metrics with MeterRegistry](./4.5-metrics-and-observability.md#2-programmatic-metrics-with-meterregistry)
- [3. Prometheus & Distributed Tracing Integration](./4.5-metrics-and-observability.md#3-prometheus--distributed-tracing-integration)
  - [Prometheus Scraping](./4.5-metrics-and-observability.md#prometheus-scraping)
  - [Distributed Tracing in Spring Boot 3](./4.5-metrics-and-observability.md#distributed-tracing-in-spring-boot-3)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F04-exception-handling-and-logging%2F4.5-metrics-and-observability" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
