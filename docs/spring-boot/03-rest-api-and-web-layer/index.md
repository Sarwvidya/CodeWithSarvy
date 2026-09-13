---
title: "Chapter 3: REST API & Web Layer"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/rest-api-and-web-layer
---

# Chapter 3: REST API & Web Layer

Building high-throughput, maintainable RESTful services requires mastering Spring MVC's front-controller pipeline, resource endpoint mapping, payload serialization, declarative validation, and standard HTTP response semantics.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Pipeline Architecture</span>
    <span class="card-step">3.1</span>
  </div>
  <div class="card-icon">🌐</div>

### [3.1 Spring MVC Architecture & Request Flow](./3.1-spring-mvc-architecture.md)

<div class="card-toc">

- [End-to-End Request Processing Flow](./3.1-spring-mvc-architecture.md#end-to-end-request-processing-flow)
- [Core Architectural Components](./3.1-spring-mvc-architecture.md#core-architectural-components)
- [Filters vs HandlerInterceptors](./3.1-spring-mvc-architecture.md#filters-vs-handlerinterceptors)
- [What is Statelessness in REST?](./3.1-spring-mvc-architecture.md#what-is-statelessness-in-rest)
- [Rest vs Soap](./3.1-spring-mvc-architecture.md#rest-vs-soap)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F03-rest-api-and-web-layer%2F3.1-spring-mvc-architecture" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Endpoint Design</span>
    <span class="card-step">3.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [3.2 REST Controllers & Endpoint Mapping](./3.2-rest-controllers-and-mapping.md)

<div class="card-toc">

- [@Controller vs @RestController](./3.2-rest-controllers-and-mapping.md#controller-vs-restcontroller)
- [HTTP Method Mappings & REST Semantics](./3.2-rest-controllers-and-mapping.md#http-method-mappings--rest-semantics)
- [Indempotency](./3.2-rest-controllers-and-mapping.md#indempotency)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F03-rest-api-and-web-layer%2F3.2-rest-controllers-and-mapping" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Payload Ingestion</span>
    <span class="card-step">3.3</span>
  </div>
  <div class="card-icon">📥</div>

### [3.3 Request Parameters & Payloads](./3.3-request-parameters-and-body.md)

<div class="card-toc">

- [1. Parameter Extraction Annotations Matrix](./3.3-request-parameters-and-body.md#1-parameter-extraction-annotations-matrix)
- [2. Practical Endpoint Example](./3.3-request-parameters-and-body.md#2-practical-endpoint-example)
- [3. Best Practice: Java Records as Immutable DTOs](./3.3-request-parameters-and-body.md#3-best-practice-java-records-as-immutable-dtos)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F03-rest-api-and-web-layer%2F3.3-request-parameters-and-body" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">HTTP Protocols</span>
    <span class="card-step">3.4</span>
  </div>
  <div class="card-icon">📤</div>

### [3.4 ResponseEntity & Content Negotiation](./3.4-response-entity-and-status-codes.md)

<div class="card-toc">

- [1. HTTP Status Code Conventions](./3.4-response-entity-and-status-codes.md#1-http-status-code-conventions)
- [2. Constructing Responses with Fluent API](./3.4-response-entity-and-status-codes.md#2-constructing-responses-with-fluent-api)
- [3. Content Negotiation](./3.4-response-entity-and-status-codes.md#3-content-negotiation)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F03-rest-api-and-web-layer%2F3.4-response-entity-and-status-codes" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Data Integrity</span>
    <span class="card-step">3.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [3.5 Request Validation & Hibernate Validator](./3.5-request-validation.md)

<div class="card-toc">

- [Bean Validation](./3.5-request-validation.md#bean-validation)
  - [`@NotNull` vs `@NotBlank` vs `@NotEmpty`](./3.5-request-validation.md#notnull-vs-notblank-vs-notempty)
- [Core Validation Annotations](./3.5-request-validation.md#core-validation-annotations)
- [What is `@Valid`](./3.5-request-validation.md#what-is-valid)
- [What is `@Validated`](./3.5-request-validation.md#what-is-validated)
  - [`@Valid` vs `@Validated`](./3.5-request-validation.md#valid-vs-validated)
- [Triggering Validation in the Controller](./3.5-request-validation.md#triggering-validation-in-the-controller)
- [Custom Constraint Validator](./3.5-request-validation.md#custom-constraint-validator)
  - [1. Define the Annotation](./3.5-request-validation.md#1-define-the-annotation)
  - [2. Implement the ConstraintValidator](./3.5-request-validation.md#2-implement-the-constraintvalidator)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F03-rest-api-and-web-layer%2F3.5-request-validation" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
