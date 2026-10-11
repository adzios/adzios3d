---
name: refactor-engineer
description: Automated, safe, and systematic code refactoring skill for Adzios3D. Eliminates code duplication (DRY), streamlines CSS architecture, modularizes JavaScript, optimizes runtime performance, and enforces clean code standards without breaking functionality.
---

# Refactor Engineer Skill for Adzios3D

When activated, this skill guides systematic, regression-free refactoring of the Adzios3D codebase, transforming legacy or monolithic implementations into clean, high-performance, maintainable code.

---

## 1. Core Principles of Safe Refactoring

1. **Zero Functional Regression**: Refactoring must never change user-visible behavior unless explicitly requested. Every button, filter, modal, and drawer must behave identically before and after.
2. **Incremental & Atomic Steps**: Refactor one subsystem at a time (e.g., state management, CSS media queries, or SVG templates). Test and verify before moving to the next.
3. **Commit Checkpoints**: Every verified phase must be committed to Git with clear, informative messages.
4. **Performance & Memory Awareness**: Reduce DOM recalculations, prevent memory leaks by avoiding redundant event listeners, and minimize layout thrashing.

---

## 2. Refactoring Playbooks

### A. JavaScript Architecture & Modularization
- **State & Data Separation**: Separate static product data (`products.js`) from application logic (`app.js`) when appropriate, keeping state centralized and predictable.
- **Event Delegation**: Replace repetitive listener bindings across list items with top-level container event delegation (`e.target.closest()`).
- **Debouncing & Throttling**: Protect real-time inputs (search filters, window resize, scroll listeners) with lightweight, robust debounce/throttle utilities.
- **Safe DOM Queries**: Cache frequently accessed elements and use optional chaining or explicit null checks before invoking methods.
- **Pure Helper Functions**: Extract reusable formatting logic (prices, dimensions, badges, URLs) into pure, easily testable functions.

### B. CSS Architecture & Clean-up
- **Consolidated Media Queries**: Group responsive rules logically by breakpoint rather than scattering fragmented queries across thousands of lines.
- **Design Tokens**: Enforce consistent usage of CSS variables (`--bg-dark`, `--accent-orange`, `--radius-md`, etc.) and eliminate hardcoded magic numbers.
- **Eliminate `!important`**: Resolve specificity conflicts structurally using CSS cascade layers or cleaner selector specificity.
- **GPU Layer Management**: Avoid overusing heavy blur filters (`blur(140px)`) on mobile; use hardware acceleration (`transform: translateZ(0)`) only on fixed or animated components.
- **Dead Code Pruning**: Identify and safely remove unused selectors, orphaned keyframes, and obsolete overrides.

### C. HTML & Accessibility (a11y)
- **Strict Semantic Hierarchy**: Maintain a single valid `<h1>` per page with logical `<h2>` and `<h3>` nesting.
- **Reusable SVG Sprites/Symbols**: Extract repeated vector icons (e.g., logo, social badges) into `<defs><symbol>` tags to reduce file size.
- **WCAG AA Compliance**: Ensure high contrast, complete ARIA modal attributes (`role="dialog"`, `aria-modal="true"`), and accessible hidden labels (`.sr-only`).

---

## 3. Systematic Execution Workflow

1. **Pre-Refactor Snapshot**: Record the current state, run `git status`, and ensure the working tree is clean or staged.
2. **Analysis & Scope Definition**: Pinpoint target code smell or bottleneck (e.g. monolithic CSS, un-delegated card listeners).
3. **Refactor Implementation**: Apply minimal, elegant edits preserving API signatures and element IDs.
4. **Verification**: Validate UI layout, browser console for errors, and mobile responsiveness.
5. **Git Commit**: Commit with semantic tag: `refactor(scope): description`.
