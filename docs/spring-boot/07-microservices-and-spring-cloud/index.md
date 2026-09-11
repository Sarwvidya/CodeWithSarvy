---
title: "Chapter 7: Microservices & Spring Cloud"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/microservices-and-spring-cloud
---

# Chapter 7: Microservices & Spring Cloud

Decomposing complex domains into microservices requires robust distributed engineering: dynamic service discovery, unified reactive edge routing, declarative inter-service RPC, circuit breaker fault tolerance, and asynchronous event streaming.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Distributed Architecture</span>
    <span class="card-step">7.1</span>
  </div>
  <div class="card-icon">🏗️</div>

### [7.1 Microservices Architecture Principles](./7.1-microservices-architecture-principles.md)

<div class="card-toc">

- [1. Monolith vs Microservices](./7.1-microservices-architecture-principles.md#1-monolith-vs-microservices)
- [2. The Database-per-Service Pattern](./7.1-microservices-architecture-principles.md#2-the-database-per-service-pattern)
  - [Why Direct DB Sharing Fails:](./7.1-microservices-architecture-principles.md#why-direct-db-sharing-fails)
- [3. Distributed Transactions & The Saga Pattern](./7.1-microservices-architecture-principles.md#3-distributed-transactions--the-saga-pattern)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.1-microservices-architecture-principles" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Dynamic Registry</span>
    <span class="card-step">7.2</span>
  </div>
  <div class="card-icon">🧭</div>

### [7.2 Service Discovery with Netflix Eureka](./7.2-service-discovery-eureka.md)

<div class="card-toc">

- [1. Eureka Architecture & Heartbeat Loop](./7.2-service-discovery-eureka.md#1-eureka-architecture--heartbeat-loop)
- [2. Setting Up Eureka Server](./7.2-service-discovery-eureka.md#2-setting-up-eureka-server)
  - [1. Dependency](./7.2-service-discovery-eureka.md#1-dependency)
  - [2. Main Application Class](./7.2-service-discovery-eureka.md#2-main-application-class)
  - [3. Server Configuration (`application.yml`)](./7.2-service-discovery-eureka.md#3-server-configuration-applicationyml)
- [3. Client Registration & Client-Side Load Balancing](./7.2-service-discovery-eureka.md#3-client-registration--client-side-load-balancing)
  - [Client-Side Load Balancing with Spring Cloud LoadBalancer:](./7.2-service-discovery-eureka.md#client-side-load-balancing-with-spring-cloud-loadbalancer)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.2-service-discovery-eureka" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Edge Gateway</span>
    <span class="card-step">7.3</span>
  </div>
  <div class="card-icon">🚪</div>

### [7.3 API Gateway with Spring Cloud Gateway](./7.3-api-gateway-spring-cloud-gateway.md)

<div class="card-toc">

- [1. Gateway Architecture & Core Concepts](./7.3-api-gateway-spring-cloud-gateway.md#1-gateway-architecture--core-concepts)
- [2. Declarative Route Configuration (`application.yml`)](./7.3-api-gateway-spring-cloud-gateway.md#2-declarative-route-configuration-applicationyml)
- [3. Custom Global Authentication Gateway Filter](./7.3-api-gateway-spring-cloud-gateway.md#3-custom-global-authentication-gateway-filter)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.3-api-gateway-spring-cloud-gateway" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Synchronous RPC</span>
    <span class="card-step">7.4</span>
  </div>
  <div class="card-icon">⚡</div>

### [7.4 Inter-Service Communication: OpenFeign & WebClient](./7.4-inter-service-communication.md)

<div class="card-toc">

- [1. Spring Cloud OpenFeign (Declarative REST Client)](./7.4-inter-service-communication.md#1-spring-cloud-openfeign-declarative-rest-client)
  - [1. Enable Feign Clients](./7.4-inter-service-communication.md#1-enable-feign-clients)
  - [2. Define the Feign Interface](./7.4-inter-service-communication.md#2-define-the-feign-interface)
  - [3. Propagating Headers via RequestInterceptor](./7.4-inter-service-communication.md#3-propagating-headers-via-requestinterceptor)
- [2. Spring WebClient (Non-Blocking & Reactive)](./7.4-inter-service-communication.md#2-spring-webclient-non-blocking--reactive)
- [3. Comparison: RestTemplate vs OpenFeign vs WebClient](./7.4-inter-service-communication.md#3-comparison-resttemplate-vs-openfeign-vs-webclient)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.4-inter-service-communication" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Fault Tolerance</span>
    <span class="card-step">7.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [7.5 Resilience & Fault Tolerance with Resilience4j](./7.5-circuit-breaker-resilience4j.md)

<div class="card-toc">

- [1. The Circuit Breaker State Machine](./7.5-circuit-breaker-resilience4j.md#1-the-circuit-breaker-state-machine)
- [2. Using @CircuitBreaker & Fallback Methods](./7.5-circuit-breaker-resilience4j.md#2-using-circuitbreaker--fallback-methods)
- [3. Configuration in `application.yml`](./7.5-circuit-breaker-resilience4j.md#3-configuration-in-applicationyml)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.5-circuit-breaker-resilience4j" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Asynchronous Streaming</span>
    <span class="card-step">7.6</span>
  </div>
  <div class="card-icon">📨</div>

### [7.6 Event-Driven Messaging with Apache Kafka](./7.6-event-driven-messaging-kafka.md)

<div class="card-toc">

- [1. Kafka Architectural Concepts](./7.6-event-driven-messaging-kafka.md#1-kafka-architectural-concepts)
- [2. Producing Events with KafkaTemplate](./7.6-event-driven-messaging-kafka.md#2-producing-events-with-kafkatemplate)
- [3. Consuming Events with @KafkaListener](./7.6-event-driven-messaging-kafka.md#3-consuming-events-with-kafkalistener)
- [4. Idempotency & Dead Letter Queue (DLQ)](./7.6-event-driven-messaging-kafka.md#4-idempotency--dead-letter-queue-dlq)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F07-microservices-and-spring-cloud%2F7.6-event-driven-messaging-kafka" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
