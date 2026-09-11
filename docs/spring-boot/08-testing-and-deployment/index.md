---
title: "Chapter 8: Testing, Deployment & Production-Ready Spring Boot"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/testing-and-deployment
---

# Chapter 8: Testing, Deployment & Production-Ready Spring Boot

Delivering reliable cloud-native services demands a rigorous testing pyramid, lightweight integration testing with real Testcontainers, multi-stage layered Docker packaging, 12-factor production profiles, and Kubernetes deployment orchestration.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Pyramid & Slices</span>
    <span class="card-step">8.1</span>
  </div>
  <div class="card-icon">🧪</div>

### [8.1 Testing Strategy & Test Slices](./8.1-testing-strategy-and-slice-tests.md)

<div class="card-toc">

- [1. The Spring Boot Testing Pyramid](./8.1-testing-strategy-and-slice-tests.md#1-the-spring-boot-testing-pyramid)
- [2. Spring Test Slices](./8.1-testing-strategy-and-slice-tests.md#2-spring-test-slices)
  - [Controller Slice Test with MockMvc:](./8.1-testing-strategy-and-slice-tests.md#controller-slice-test-with-mockmvc)
- [3. Full Integration Testing with @SpringBootTest](./8.1-testing-strategy-and-slice-tests.md#3-full-integration-testing-with-springboottest)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F08-testing-and-deployment%2F8.1-testing-strategy-and-slice-tests" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Real Environments</span>
    <span class="card-step">8.2</span>
  </div>
  <div class="card-icon">🐳</div>

### [8.2 Integration Testing with Testcontainers](./8.2-integration-testing-testcontainers.md)

<div class="card-toc">

- [1. Why Testcontainers Beats H2 In-Memory DBs](./8.2-integration-testing-testcontainers.md#1-why-testcontainers-beats-h2-in-memory-dbs)
- [2. DynamicPropertySource with PostgreSQL Container](./8.2-integration-testing-testcontainers.md#2-dynamicpropertysource-with-postgresql-container)
- [3. Testing Event-Driven Systems with KafkaContainer](./8.2-integration-testing-testcontainers.md#3-testing-event-driven-systems-with-kafkacontainer)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F08-testing-and-deployment%2F8.2-integration-testing-testcontainers" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Container Optimization</span>
    <span class="card-step">8.3</span>
  </div>
  <div class="card-icon">📦</div>

### [8.3 Dockerizing Spring Boot Applications](./8.3-dockerizing-spring-boot.md)

<div class="card-toc">

- [1. The Fat JAR Inefficiency Problem](./8.3-dockerizing-spring-boot.md#1-the-fat-jar-inefficiency-problem)
- [2. Spring Boot Layered JARs](./8.3-dockerizing-spring-boot.md#2-spring-boot-layered-jars)
- [3. Production Multi-Stage Dockerfile](./8.3-dockerizing-spring-boot.md#3-production-multi-stage-dockerfile)
  - [Key Advantages:](./8.3-dockerizing-spring-boot.md#key-advantages)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F08-testing-and-deployment%2F8.3-dockerizing-spring-boot" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Cloud-Native Profiles</span>
    <span class="card-step">8.4</span>
  </div>
  <div class="card-icon">⚙️</div>

### [8.4 Production Profiles & Configuration](./8.4-production-profiles-and-configuration.md)

<div class="card-toc">

- [1. The Twelve-Factor Config Principle](./8.4-production-profiles-and-configuration.md#1-the-twelve-factor-config-principle)
  - [Rule of Environment Variables in Spring Boot:](./8.4-production-profiles-and-configuration.md#rule-of-environment-variables-in-spring-boot)
- [2. Secrets Management & Vault Integration](./8.4-production-profiles-and-configuration.md#2-secrets-management--vault-integration)
- [3. Graceful Shutdown Configuration](./8.4-production-profiles-and-configuration.md#3-graceful-shutdown-configuration)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F08-testing-and-deployment%2F8.4-production-profiles-and-configuration" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Orchestration & Probes</span>
    <span class="card-step">8.5</span>
  </div>
  <div class="card-icon">☸️</div>

### [8.5 CI/CD & Kubernetes Deployment](./8.5-cicd-and-kubernetes-deployment.md)

<div class="card-toc">

- [1. GitHub Actions CI/CD Pipeline](./8.5-cicd-and-kubernetes-deployment.md#1-github-actions-cicd-pipeline)
- [2. Kubernetes Deployment Manifest](./8.5-cicd-and-kubernetes-deployment.md#2-kubernetes-deployment-manifest)
- [3. Liveness vs Readiness Probes](./8.5-cicd-and-kubernetes-deployment.md#3-liveness-vs-readiness-probes)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F08-testing-and-deployment%2F8.5-cicd-and-kubernetes-deployment" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
