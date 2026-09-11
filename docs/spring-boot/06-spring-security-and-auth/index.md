---
title: "Chapter 6: Spring Security & Authentication"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/spring-security-and-auth
---

# Chapter 6: Spring Security & Authentication

Securing modern enterprise services requires deep knowledge of Spring Security's filter chain architecture, Spring Security 6 functional lambda configuration, stateless JWT validation, fine-grained role-based method authorization, and cryptographic password hashing.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">Filter Chain Internals</span>
    <span class="card-step">6.1</span>
  </div>
  <div class="card-icon">🔐</div>

### [6.1 Security Architecture & Filter Chain](./6.1-security-architecture-and-filter-chain.md)

<div class="card-toc">

- [1. Filter Chain Architecture](./6.1-security-architecture-and-filter-chain.md#1-filter-chain-architecture)
- [2. Authentication vs Authorization](./6.1-security-architecture-and-filter-chain.md#2-authentication-vs-authorization)
- [3. The Core Security Abstractions](./6.1-security-architecture-and-filter-chain.md#3-the-core-security-abstractions)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F06-spring-security-and-auth%2F6.1-security-architecture-and-filter-chain" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Modern DSL</span>
    <span class="card-step">6.2</span>
  </div>
  <div class="card-icon">⚡</div>

### [6.2 Modern Security Configuration](./6.2-spring-security-6-configuration.md)

<div class="card-toc">

- [1. Component-Based SecurityFilterChain](./6.2-spring-security-6-configuration.md#1-component-based-securityfilterchain)
- [2. CORS (Cross-Origin Resource Sharing)](./6.2-spring-security-6-configuration.md#2-cors-cross-origin-resource-sharing)
- [3. Why Disable CSRF in Stateless REST APIs?](./6.2-spring-security-6-configuration.md#3-why-disable-csrf-in-stateless-rest-apis)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F06-spring-security-and-auth%2F6.2-spring-security-6-configuration" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Stateless Auth</span>
    <span class="card-step">6.3</span>
  </div>
  <div class="card-icon">🎟️</div>

### [6.3 JWT Stateless Authentication](./6.3-jwt-stateless-authentication.md)

<div class="card-toc">

- [1. Structure of a JWT](./6.3-jwt-stateless-authentication.md#1-structure-of-a-jwt)
- [2. The Custom JwtAuthenticationFilter](./6.3-jwt-stateless-authentication.md#2-the-custom-jwtauthenticationfilter)
- [3. Access Token vs Refresh Token Strategy](./6.3-jwt-stateless-authentication.md#3-access-token-vs-refresh-token-strategy)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F06-spring-security-and-auth%2F6.3-jwt-stateless-authentication" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Access Control</span>
    <span class="card-step">6.4</span>
  </div>
  <div class="card-icon">🛡️</div>

### [6.4 Role-Based & Method Security](./6.4-role-based-authorization.md)

<div class="card-toc">

- [1. Roles vs Authorities](./6.4-role-based-authorization.md#1-roles-vs-authorities)
- [2. Declarative Method-Level Security](./6.4-role-based-authorization.md#2-declarative-method-level-security)
  - [Powerful SpEL (Spring Expression Language) Annotations:](./6.4-role-based-authorization.md#powerful-spel-spring-expression-language-annotations)
- [3. Filtering Collections with @PreFilter & @PostFilter](./6.4-role-based-authorization.md#3-filtering-collections-with-prefilter--postfilter)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F06-spring-security-and-auth%2F6.4-role-based-authorization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">Credential Security</span>
    <span class="card-step">6.5</span>
  </div>
  <div class="card-icon">🔑</div>

### [6.5 Password Hashing & UserDetailsService](./6.5-password-encoding-and-user-details.md)

<div class="card-toc">

- [1. PasswordEncoder & BCrypt](./6.5-password-encoding-and-user-details.md#1-passwordencoder--bcrypt)
  - [Why BCrypt is Industry Standard:](./6.5-password-encoding-and-user-details.md#why-bcrypt-is-industry-standard)
- [2. Implementing UserDetailsService & UserDetails](./6.5-password-encoding-and-user-details.md#2-implementing-userdetailsservice--userdetails)
  - [1. The Domain User Entity](./6.5-password-encoding-and-user-details.md#1-the-domain-user-entity)
  - [2. Loading User From Database](./6.5-password-encoding-and-user-details.md#2-loading-user-from-database)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F06-spring-security-and-auth%2F6.5-password-encoding-and-user-details" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
