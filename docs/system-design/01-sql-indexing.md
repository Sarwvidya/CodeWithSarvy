---
title: Relational DBs & B-Tree Indexing
sidebar_position: 1
---

# Database Indexing & Query Optimization

Indexes are specialized data structures that improve the speed of data retrieval operations on database tables at the cost of additional storage and slower writes.

---

## 1. How B-Tree Indexes Work

Most relational databases (PostgreSQL, MySQL InnoDB) use **B-Trees (Balanced Trees)** for primary and secondary indexes.

- **Lookup Complexity**: $O(\log N)$
- **Range Queries**: Efficiently traverses leaf node linked lists (`WHERE age BETWEEN 20 AND 30`).

```sql
-- Creating a Single Column Index
CREATE INDEX idx_users_email ON users(email);

-- Creating a Composite Index (Order matters!)
CREATE INDEX idx_orders_customer_date ON orders(customer_id, created_at DESC);
```

### The Leftmost Prefix Rule
A composite index on `(A, B, C)` can speed up queries on:
- `A`
- `A, B`
- `A, B, C`

> It **cannot** be used efficiently if `A` is omitted (e.g. `WHERE B = 10`).

---

## 2. Using EXPLAIN ANALYZE

```sql
EXPLAIN ANALYZE
SELECT id, total_amount 
FROM orders 
WHERE customer_id = 100 
ORDER BY created_at DESC 
LIMIT 10;
```

Look for:
- **Index Scan / Index Only Scan** (Good)
- **Sequential Scan (Seq Scan)** on large tables (Table scan bottleneck)
