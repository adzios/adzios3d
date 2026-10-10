---
name: code-review
description: Perform a comprehensive code review covering HTML, CSS, JS performance, accessibility (a11y), responsive UI, and code quality for Adzios3D.
---

# Code Reviewer Skill for Adzios3D

When activated, this skill performs an in-depth static and architectural code review of the project.

## Review Checklist & Criteria

1. **HTML Structure & Accessibility (a11y)**:
   - Proper HTML5 semantic tags (`header`, `main`, `footer`, `section`, `article`, `nav`)
   - ARIA attributes, modal accessibility (`aria-modal`, `aria-hidden`, keyboard navigation / Esc handling)
   - Form controls, image alt text, descriptive button and link labels

2. **CSS Design & Performance**:
   - Organized design tokens/CSS variables
   - Mobile responsiveness across breakpoints (1024px, 768px, 480px)
   - Modern layout practices (Flexbox/Grid), layout containment, clean z-index hierarchy
   - Optimization of heavy effects (backdrop-filters, box-shadows, canvas renders)

3. **JavaScript Robustness & UX**:
   - Safe DOM selection and null checks
   - Event listener delegation and memory management
   - Modal state handling, filter logic, local storage persistence
   - Error handling and edge-case protection

4. **Output Format**:
   - **Key Strengths**
   - **Critical Issues & Bugs**
   - **UI/UX & Aesthetics Enhancements**
   - **Performance & Code Quality Recommendations**
