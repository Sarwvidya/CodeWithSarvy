---
title: OOPs Concepts & Principles
sidebar_position: 1
---

# Object-Oriented Programming (OOPs) in Java

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of **"objects"**, which contain data (fields/attributes) and code (methods/functions).

---

## 1. The Four Core Pillars of OOP

### A. Encapsulation
Wrapping data (variables) and code (methods) together into a single unit and restricting direct access to components.

```java
public class BankAccount {
    private double balance; // Private variable (data hiding)

    public BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        }
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}
```

### B. Abstraction
Hiding internal implementation details and exposing only essential functionality through **Interfaces** or **Abstract Classes**.

```java
public interface PaymentGateway {
    PaymentResult processPayment(double amount);

    // Java 8+ Default Method
    default void logTransaction(String txId) {
        System.out.println("Transaction ID: " + txId);
    }
}

public class StripeGateway implements PaymentGateway {
    @Override
    public PaymentResult processPayment(double amount) {
        // Stripe API integration
        return new PaymentResult(true, "STRIPE_12345");
    }
}
```

### C. Inheritance
Mechanism where one class inherits features (fields and methods) from another class using the `extends` keyword.

> [!NOTE]
> Java supports **Single Inheritance** with classes to prevent ambiguity (Diamond Problem), but supports **Multiple Inheritance** via Interfaces.

### D. Polymorphism
The ability of an object to take on many forms:
1. **Compile-Time (Static) Polymorphism**: Method Overloading (same method name, different parameters).
2. **Runtime (Dynamic) Polymorphism**: Method Overriding (subclass provides specific implementation of parent method).

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}
```

---

## 2. SOLID Design Principles

| Principle | Description |
| :--- | :--- |
| **S** - Single Responsibility | A class should have only one reason to change. |
| **O** - Open/Closed | Software entities should be open for extension, but closed for modification. |
| **L** - Liskov Substitution | Subtypes must be substitutable for their base types without altering correctness. |
| **I** - Interface Segregation | Clients should not be forced to depend upon interfaces they do not use. |
| **D** - Dependency Inversion | High-level modules should not depend on low-level modules; both should depend on abstractions. |

---

:::tip Interview Tip
In modern Java application design, **favor Composition over Inheritance** (`has-a` over `is-a`) to keep classes loosely coupled and easily testable.
:::
