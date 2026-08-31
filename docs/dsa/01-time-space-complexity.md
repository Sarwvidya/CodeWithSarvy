---
title: Time & Space Complexity (Big-O)
sidebar_position: 1
---

# Big-O Notation & Complexity Analysis

Big-O notation is the formal mathematical framework used to classify algorithms according to how their run time or space requirements grow as the input size ($N$) grows.

---

## 1. Common Time Complexities Ranked

| Notation | Name | Example Algorithm |
| :--- | :--- | :--- |
| **$O(1)$** | Constant | Hash map lookup, array index access |
| **$O(\log N)$** | Logarithmic | Binary search, balanced BST lookup |
| **$O(N)$** | Linear | Linear search, array traversal |
| **$O(N \log N)$** | Linearithmic | Merge sort, Quick sort (average), Heap sort |
| **$O(N^2)$** | Quadratic | Bubble sort, Nested loops |
| **$O(2^N)$** | Exponential | Recursive Fibonacci, Subsets generation |
| **$O(N!)$** | Factorial | Generating all permutations (Traveling Salesperson) |

---

## 2. Space Complexity Considerations

Space complexity consists of two parts:
1. **Auxiliary Space**: Extra space temporarily used by algorithm (buffers, hash tables, temporary arrays).
2. **Call Stack Space**: Memory consumed by the recursive call stack.

```java
// Example: Binary Search - O(log N) Time, O(1) Auxiliary Space
public int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2; // Prevent integer overflow
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

:::tip
Always analyze both **Time Complexity** and **Auxiliary Space Complexity** when solving coding interview problems.
:::
