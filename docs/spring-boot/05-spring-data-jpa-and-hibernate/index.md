---
title: "Chapter 5: Spring Data JPA, Hibernate & Database"
sidebar_label: "Overview"
sidebar_position: 1
id: index
slug: /spring-boot/spring-data-jpa-and-hibernate
---

# Chapter 5: Spring Data JPA, Hibernate & Database

Mastering enterprise persistence requires understanding JPA lifecycle states, relationship mapping best practices, query method derivation, eliminating N+1 performance bottlenecks, declarative transactions, and Flyway schema versioning.

---

## 🧭 Subtopics & Curriculum

Click anywhere on a topic card below to open that subtopic note, or use the Obsidian button to open it directly in the Obsidian app:

<div class="spring-boot-grid">

<div class="subtopic-card card-cyan">
  <div class="card-meta">
    <span class="card-badge">ORM Foundations</span>
    <span class="card-step">5.1</span>
  </div>
  <div class="card-icon">🗄️</div>

### [5.1 JPA & Hibernate Fundamentals](./5.1-jpa-and-hibernate-fundamentals.md)

<div class="card-toc">

- [1. The Stack: JDBC vs JPA vs Hibernate vs Spring Data](./5.1-jpa-and-hibernate-fundamentals.md#1-the-stack-jdbc-vs-jpa-vs-hibernate-vs-spring-data)
- [2. The 4 JPA Entity Lifecycle States](./5.1-jpa-and-hibernate-fundamentals.md#2-the-4-jpa-entity-lifecycle-states)
- [3. The First-Level Cache & Dirty Checking](./5.1-jpa-and-hibernate-fundamentals.md#3-the-first-level-cache--dirty-checking)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.1-jpa-and-hibernate-fundamentals" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-purple">
  <div class="card-meta">
    <span class="card-badge">Associations & Schema</span>
    <span class="card-step">5.2</span>
  </div>
  <div class="card-icon">🔗</div>

### [5.2 Entity Mappings & Relationships](./5.2-entity-mappings-and-relationships.md)

<div class="card-toc">

- [1. Core Mapping Annotations](./5.2-entity-mappings-and-relationships.md#1-core-mapping-annotations)
- [2. Association Multiplicities & Ownership](./5.2-entity-mappings-and-relationships.md#2-association-multiplicities--ownership)
  - [The Rule of Ownership:](./5.2-entity-mappings-and-relationships.md#the-rule-of-ownership)
  - [One-to-Many / Many-to-One (Bidirectional Best Practice)](./5.2-entity-mappings-and-relationships.md#one-to-many--many-to-one-bidirectional-best-practice)
- [3. FetchType: LAZY vs EAGER](./5.2-entity-mappings-and-relationships.md#3-fetchtype-lazy-vs-eager)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.2-entity-mappings-and-relationships" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-amber">
  <div class="card-meta">
    <span class="card-badge">Data Access Layer</span>
    <span class="card-step">5.3</span>
  </div>
  <div class="card-icon">⚡</div>

### [5.3 Repositories & Query Methods](./5.3-repositories-and-query-methods.md)

<div class="card-toc">

- [1. Spring Data Repository Hierarchy](./5.3-repositories-and-query-methods.md#1-spring-data-repository-hierarchy)
- [2. Derived Query Method Keywords](./5.3-repositories-and-query-methods.md#2-derived-query-method-keywords)
- [3. Custom @Query (JPQL vs Native SQL)](./5.3-repositories-and-query-methods.md#3-custom-query-jpql-vs-native-sql)
- [4. Pagination & Sorting](./5.3-repositories-and-query-methods.md#4-pagination--sorting)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.3-repositories-and-query-methods" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-blue">
  <div class="card-meta">
    <span class="card-badge">Query Tuning</span>
    <span class="card-step">5.4</span>
  </div>
  <div class="card-icon">🚀</div>

### [5.4 N+1 Problem & Optimization](./5.4-n-plus-one-problem-and-optimization.md)

<div class="card-toc">

- [1. How the N+1 Problem Manifests](./5.4-n-plus-one-problem-and-optimization.md#1-how-the-n1-problem-manifests)
- [2. Solution 1: JOIN FETCH in JPQL](./5.4-n-plus-one-problem-and-optimization.md#2-solution-1-join-fetch-in-jpql)
- [3. Solution 2: @EntityGraph](./5.4-n-plus-one-problem-and-optimization.md#3-solution-2-entitygraph)
- [4. Solution 3: DTO Projections (Zero Overhead)](./5.4-n-plus-one-problem-and-optimization.md#4-solution-3-dto-projections-zero-overhead)
  - [Benefits of DTO Projections:](./5.4-n-plus-one-problem-and-optimization.md#benefits-of-dto-projections)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.4-n-plus-one-problem-and-optimization" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-emerald">
  <div class="card-meta">
    <span class="card-badge">ACID Guarantees</span>
    <span class="card-step">5.5</span>
  </div>
  <div class="card-icon">🛡️</div>

### [5.5 Transaction Management](./5.5-transaction-management.md)

<div class="card-toc">

- [1. Transaction Propagation Behaviors](./5.5-transaction-management.md#1-transaction-propagation-behaviors)
  - [Practical Use Case for `REQUIRES_NEW`:](./5.5-transaction-management.md#practical-use-case-for-requires_new)
- [2. Transaction Isolation Levels](./5.5-transaction-management.md#2-transaction-isolation-levels)
- [3. Rollback Rules & Read-Only Optimization](./5.5-transaction-management.md#3-rollback-rules--read-only-optimization)
  - [Default Rollback Policy:](./5.5-transaction-management.md#default-rollback-policy)
  - [Read-Only Optimization:](./5.5-transaction-management.md#read-only-optimization)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.5-transaction-management" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

<div class="subtopic-card card-rose">
  <div class="card-meta">
    <span class="card-badge">Schema Versioning</span>
    <span class="card-step">5.6</span>
  </div>
  <div class="card-icon">📜</div>

### [5.6 Database Migrations with Flyway](./5.6-database-migrations-flyway.md)

<div class="card-toc">

- [1. Why Dedicated Migration Tools?](./5.6-database-migrations-flyway.md#1-why-dedicated-migration-tools)
- [2. Flyway Migration File Naming Rules](./5.6-database-migrations-flyway.md#2-flyway-migration-file-naming-rules)
- [3. Migration Example & Production Configuration](./5.6-database-migrations-flyway.md#3-migration-example--production-configuration)
  - [Migration File: `src/main/resources/db/migration/V1__init_schema.sql`](./5.6-database-migrations-flyway.md#migration-file-srcmainresourcesdbmigrationv1__init_schemasql)
  - [`application.yml` Production Configuration:](./5.6-database-migrations-flyway.md#applicationyml-production-configuration)
  - [The `flyway_schema_history` Table](./5.6-database-migrations-flyway.md#the-flyway_schema_history-table)

</div>

  <div class="card-actions">
    <a href="obsidian://open?vault=docs&file=spring-boot%2F05-spring-data-jpa-and-hibernate%2F5.6-database-migrations-flyway" class="card-btn btn-obsidian" title="Open in Obsidian App">🔮 Open in Obsidian</a>
  </div>
</div>

</div>
