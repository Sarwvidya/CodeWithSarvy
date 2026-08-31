---
title: JVM Internals & Memory Model
sidebar_position: 2
---

# JVM Internals & Java Memory Management

Understanding the internal architecture of the Java Virtual Machine (JVM) is crucial for building high-performance, low-latency applications.

---

## 1. JVM Architecture Overview

The JVM consists of three main subsystems:
1. **Class Loader Subsystem**: Loading, Linking, and Initializing `.class` files.
2. **Runtime Data Areas**: Memory allocated to run Java programs.
3. **Execution Engine**: Bytecode interpreter, JIT (Just-In-Time) compiler, and Garbage Collector.

---

## 2. Runtime Data Areas

```
┌─────────────────────────────────────────────────────────────┐
│                    Runtime Data Areas                       │
│                                                             │
│  ┌──────────────────────┐        ┌───────────────────────┐  │
│  │   Method / Metaspace │        │       Heap Memory     │  │
│  │   (Class metadata,   │        │   (Young Gen, Old Gen)│  │
│  │    Static variables) │        │                       │  │
│  └──────────────────────┘        └───────────────────────┘  │
│  ────────────────────── Shared Across Threads ─────────────  │
│  ────────────────────── Per-Thread Memory ────────────────  │
│  ┌──────────────┐  ┌──────────────────┐  ┌───────────────┐  │
│  │ JVM Stack    │  │ Program Counter  │  │ Native Method │  │
│  │ (Frames, LV) │  │ (PC Register)    │  │ Stack         │  │
│  └──────────────┘  └──────────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Stack vs Heap Memory

| Feature | Stack Memory | Heap Memory |
| :--- | :--- | :--- |
| **Scope** | Per-thread allocation | Shared across all threads |
| **Contents** | Primitive types & Object references | Actual object instances |
| **Lifecycle** | Automatic (freed when method exits) | Managed by Garbage Collector |
| **Error Type** | `java.lang.StackOverflowError` | `java.lang.OutOfMemoryError: Java heap space` |

---

## 3. Generational Garbage Collection

Java splits heap memory into generations based on the weak generational hypothesis:
- **Young Generation**:
  - **Eden Space**: Where new objects are initially allocated.
  - **Survivor Spaces (S0 & S1)**: Objects that survive minor GC cycles move here.
- **Old Generation (Tenured)**:
  - Objects that survive multiple GC cycles (default threshold: 15) are promoted to Old Gen.

```bash
# Useful JVM Flags for Tuning
-Xms4g -Xmx4g            # Initial and Max Heap Size
-XX:+UseG1GC            # Use Garbage-First Collector
-XX:+UseZGC             # Low-latency ZGC (Java 15+)
-XX:+HeapDumpOnOutOfMemoryError
```
