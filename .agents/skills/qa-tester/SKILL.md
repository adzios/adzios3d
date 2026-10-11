---
name: qa-tester
description: Comprehensive QA Tester Skill to systematically verify UI/UX functionality, mobile responsiveness across iOS (Safari/WebKit) and Android (Chrome), interactive components, modals, filters, and edge cases for Adzios3D.
---

# QA Tester Skill for Adzios3D (Cross-Device & Mobile Suite)

When activated, this skill guides an exhaustive quality assurance and testing suite for Adzios3D, specializing in **mobile layout fidelity on iOS (Safari) and Android (Chrome)**, interactive UI components, accessibility, and edge-case validation.

---

## 1. Device Viewport Test Matrix

All views must be verified without horizontal layout shifts, clipping, or horizontal scrollbars across these key viewports:

| Device Category | Target Viewport | Target Browser | Primary Risk Areas |
|---|---|---|---|
| **Compact iOS** | **375 × 667 px** (iPhone SE 2/3) | Safari / WebKit | Header brand wrap, category pills overflow, card padding |
| **Standard iOS** | **390 × 844 px** (iPhone 12/13/14/15) | Safari / WebKit | Dynamic Island / Notch safe areas, bottom bar overlapping |
| **Large iOS** | **430 × 932 px** (iPhone 14/15/16 Pro Max) | Safari / WebKit | Full-width buttons, modal bottom sheets, image aspect ratio |
| **Compact Android** | **360 × 800 px** (Samsung Galaxy A/S) | Chrome / Samsung Internet | Text line-wrapping, button rows wrapping, contact form layout |
| **Standard Android** | **412 × 915 px** (Google Pixel 7/8/9) | Chrome / Blink | Address bar dynamic resizing, touch targets spacing |
| **Tablet / Foldable** | **768 × 1024 px** & **280 × 653 px** | Safari & Chrome | Grid break from 1 to 2 columns, drawer vs desktop nav |

---

## 2. iOS Safari Specific Audit Checklist

1. **Horizontal Overflow & Rubber-Banding Prevention**:
   - `html` and `body` must enforce `overflow-x: hidden;` to stop elastic horizontal rubber-banding on iOS.
   - Any background fixed or absolute elements (such as glowing orbs, canvas grids, SVG backgrounds) must use `max-width: 100%` or `left: 0; right: 0;` rather than unconstrained pixel widths that trigger lateral overflow.
   - All flex rows (`.platform-btn-row`, `.modal-badge-row`, `.hero-cta-group`) must feature `flex-wrap: wrap` or scroll smoothly with `-webkit-overflow-scrolling: touch;`.

2. **Dynamic Viewport Height & Bottom Nav Bar**:
   - iOS Safari dynamically hides and shows bottom navigation bars. Full-screen elements (modals, drawers) must use `100dvh` (Dynamic Viewport Height) with `100vh` fallback:
     ```css
     height: 100vh;
     height: 100dvh;
     ```
   - Must respect Safe Area Insets for iPhone Home Indicator and Notch:
     ```css
     padding-bottom: max(16px, env(safe-area-inset-bottom));
     padding-top: max(16px, env(safe-area-inset-top));
     ```

3. **Input Auto-Zoom Prevention (iOS 16px Rule)**:
   - On iOS Safari, any `<input>`, `<select>`, or `<textarea>` with `font-size < 16px` triggers an automatic, jarring viewport zoom on focus that shifts the whole screen sideways.
   - All inputs must have `font-size: 16px !important;` on mobile breakpoints.

4. **Webkit Text Size Adjust**:
   - Root HTML must include `-webkit-text-size-adjust: 100%;` to prevent Safari from arbitrarily scaling text during orientation changes.

5. **Touch Targets & Click Delay**:
   - All interactive controls (buttons, links, drawer toggles, close icons) must meet Apple Human Interface Guidelines: minimum touch target of **44 × 44 pt/px**.
   - Ensure `touch-action: manipulation;` on interactive buttons to eliminate 300ms tap delay.

---

## 3. Android & Chrome Specific Audit Checklist

1. **Virtual Keyboard Layout Adaptation**:
   - Test that opening the on-screen keyboard inside the contact form doesn't crush or distort fixed headers or hide submit buttons.
2. **Text Wrapping at 360px Minimum Width**:
   - Verify that badges, price tags, and table labels (`🧶 Materiał:`, `📐 Wymiary:`) never clip or overlap at 360px width.
3. **Smooth Scroll & Momentum**:
   - Horizontal category pills must scroll fluidly without visible scrollbar stutter.

---

## 4. Functional Testing Checklist

1. **Navigation & Mobile Drawer**:
   - Hamburger icon cleanly opens `#mobileDrawer`.
   - Clicking any navigation link smoothly scrolls to target anchor (`#projekty`, `#faq`, `#kontakt`) and closes the drawer.
2. **Category Filter Pills**:
   - Dynamically generated from `products` array.
   - Any category with 0 items (e.g. `Biurko`) is automatically omitted.
   - Categories with items display count badge and filter products properly on click.
3. **Product Detail Modal**:
   - Opens on card click with smooth fade-in/slide-up.
   - Specs table displays clean single-line labels: `🧶 Materiał:` and `📐 Wymiary:`.
   - Gallery images and thumbnail switcher work smoothly.
   - Direct purchase buttons (Allegro, Vinted, OLX, Zamów bezpośrednio) trigger proper actions.
   - Closes reliably via `&times;` button, outside click, or `Escape` key.
4. **FAQ Accordion**:
   - Expanding an FAQ item closes others (accordion behavior).
   - Links in FAQ answers (email `mailto:`, Allegro, Vinted, OLX) open correctly in new tabs without breaking layout.
5. **Contact Form**:
   - Fields validate required inputs.
   - Email highlight link `adzios3d@gmail.com` launches default mail client cleanly.

---

## 5. Automated Execution & Verification

When running automated checks for this skill:
1. Run `python .agents/skills/qa-tester/scripts/mobile_audit.py` to test for layout leaks, viewport settings, and CSS rules.
2. Inspect rendered bounding boxes via browser automation or headless inspection across 375px, 390px, and 412px viewports.
3. Generate a structured QA audit report noting:
   - PASS / FAIL status for each device viewport
   - Exact offending CSS selectors if any overflow or overlap is found
   - Verification of fix with before/after comparison
