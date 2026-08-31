---
title: Git Workflows & Rebasing
sidebar_position: 1
---

# Advanced Git Workflows & Rebasing

Git is a distributed version control system. Mastering branching strategies and interactive rebasing produces a clean, linear commit history.

---

## 1. Merge vs Rebase

```
Merge Flow:
A ─── B ─── C ─────── M (Merge Commit)
       \             /
        D ─── E ──── F

Rebase Flow:
A ─── B ─── C ─── D' ─── E' ─── F' (Linear History)
```

```bash
# Rebase feature branch on top of main
git checkout feature/api-auth
git rebase main

# Interactive Rebase (Squash last 3 messy commits)
git rebase -i HEAD~3
```

---

## 2. Useful Emergency Commands

```bash
# View complete history of HEAD movements (Undo mistakes!)
git reflog

# Recover a branch from a lost commit
git checkout -b recovery-branch HEAD@{3}

# Stash uncommitted changes
git stash
git stash pop
```
