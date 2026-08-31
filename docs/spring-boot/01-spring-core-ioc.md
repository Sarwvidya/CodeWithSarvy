---
title: Spring Core & Inversion of Control
sidebar_position: 1
---

# Spring Core & Inversion of Control (IoC)

Spring Framework simplifies enterprise Java development through **Inversion of Control (IoC)** and **Dependency Injection (DI)**.

---

## 1. What is Inversion of Control?

Instead of an application creating its own dependencies with `new Class()`, control over object instantiation, configuration, and lifecycle is inverted and handed over to the Spring **ApplicationContext** (IoC Container).

```java
// Traditional Tight Coupling (Without DI)
public class OrderService {
    private PaymentProcessor paymentProcessor = new StripePaymentProcessor(); // Tightly coupled!
}

// Spring Dependency Injection (Loose Coupling)
@Service
public class OrderService {
    private final PaymentProcessor paymentProcessor;

    // Recommended: Constructor Injection
    public OrderService(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    public OrderResult process(OrderRequest request) {
        return paymentProcessor.charge(request.amount());
    }
}
```

---

## 2. Spring Bean Scopes

| Scope | Description |
| :--- | :--- |
| **singleton** (default) | Only one shared instance per Spring IoC container. |
| **prototype** | A new instance is created every time a bean is requested. |
| **request** | One instance per HTTP request (Web-aware). |
| **session** | One instance per HTTP session (Web-aware). |

---

## 3. Why Constructor Injection is Preferred

1. **Immutability**: Dependencies can be declared `final`.
2. **Easy Testing**: Services can be easily instantiated and tested in unit tests without starting the Spring context.
3. **Circular Dependency Detection**: Spring throws a clear startup failure if circular dependencies exist.
