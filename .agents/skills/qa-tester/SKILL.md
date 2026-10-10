---
name: qa-tester
description: Comprehensive QA Tester Skill to systematically verify UI/UX functionality, interactive components, modals, filters, and edge cases for Adzios3D.
---

# QA Tester Skill for Adzios3D

When activated, this skill performs an exhaustive functional test suite of all interactive components in the Adzios3D application.

## QA Testing Checklist

1. **Navigation & Mobile Drawer**:
   - Desktop links scroll smoothly to target anchors (`#projekty`, `#faq`, `#kontakt`).
   - Mobile hamburger button toggles `#mobileDrawer`. Clicking drawer links closes the drawer automatically.

2. **Search & Filters**:
   - `#searchInput` filters products by title, description, material, and category.
   - `#clearSearchBtn` clears search query and updates counts.
   - Category pills (`#categoryPills`) correctly filter products by category ('sport', 'biurko', 'auto', 'dom', 'all').
   - Empty state (`#emptyState`) displays when 0 products match, with working `#emptyResetBtn`.

3. **Product Cards & Wishlist**:
   - Clicking favorite button toggles product ID in `wishlist` array and `localStorage`.
   - Wishlist count badge in header (`#wishlistCount`) updates dynamically.
   - Share button copies direct project link to clipboard and triggers Toast notification.
   - Image carousel arrows/dots on multi-image cards navigate pictures cleanly.

4. **Modals & Lightbox**:
   - Product Modal (`#productModal`) opens with accurate product details, specs, and gallery.
   - Lightbox Modal (`#lightboxModal`) opens image enlargement, supports Arrow keys (Left/Right) and Touch Swipe.
   - Modals close via `Escape` key, close button, or backdrop click.

5. **Form Submissions & Toasts**:
   - Contact form (`#contactForm`) validates required fields and displays success feedback.
   - Toast notification container (`.toast-container`) renders transient toasts with auto-dismiss timers.
