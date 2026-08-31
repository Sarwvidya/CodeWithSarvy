---
title: Modern JavaScript (ES6+)
sidebar_position: 1
---

# Modern JavaScript Essentials for React

Modern React development relies heavily on ECMAScript 6+ syntax and functional programming concepts.

---

## 1. Key ES6+ Syntax Features

### Destructuring & Rest/Spread
```javascript
// Object Destructuring with default values
const user = { name: "Sarwvidya", handle: "codewithsarvy" };
const { name, role = "Developer" } = user;

// Array Spread
const backend = ["Java", "Spring Boot"];
const fullStack = [...backend, "React", "PostgreSQL"];
```

### Optional Chaining (`?.`) and Nullish Coalescing (`??`)
```javascript
// Safe property access
const city = user?.address?.city ?? "Default City";
```

### Promises & Async/Await
```javascript
async function fetchChapters() {
  try {
    const res = await fetch("/api/v1/chapters");
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to load chapters:", err);
  }
}
```

---

## 2. Array Methods: map, filter, reduce

```javascript
const topics = [
  { name: "Core Java", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" }
];

// Map: Transform elements
const titles = topics.map(t => t.name);

// Filter: Filter matching elements
const backendOnly = topics.filter(t => t.category === "Backend");
```
