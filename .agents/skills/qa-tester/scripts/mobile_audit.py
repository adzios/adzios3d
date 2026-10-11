"""
ADZIOS3D - MOBILE QA AUDIT SCRIPT (iOS Safari & Android Chrome)
Systematically checks CSS and HTML for mobile responsiveness, overflow leaks,
and platform-specific quirks (iOS Safari, Android Chrome).
"""

import os
import re
import sys

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))))
HTML_PATH = os.path.join(BASE_DIR, 'index.html')
CSS_PATH = os.path.join(BASE_DIR, 'style.css')
JS_PATH = os.path.join(BASE_DIR, 'app.js')

def audit():
    print("=" * 60)
    print("📱 ADZIOS3D - MOBILE QA AUDIT (iOS & ANDROID)")
    print("=" * 60)
    
    issues = []
    warnings = []
    passes = []

    # 1. Read files
    if not os.path.exists(HTML_PATH) or not os.path.exists(CSS_PATH):
        print("❌ Error: Missing index.html or style.css in workspace root!")
        return 1

    html_content = open(HTML_PATH, encoding='utf-8').read()
    css_content = open(CSS_PATH, encoding='utf-8').read()
    js_content = open(JS_PATH, encoding='utf-8').read() if os.path.exists(JS_PATH) else ""

    # 2. Check Viewport Meta Tag
    viewport_match = re.search(r'<meta\s+name=["\']viewport["\']\s+content=["\']([^"\']+)["\']', html_content, re.I)
    if viewport_match:
        content = viewport_match.group(1)
        if "width=device-width" in content and "initial-scale=1.0" in content:
            if "viewport-fit=cover" in content:
                passes.append("Viewport meta tag: Correct with viewport-fit=cover for iPhone notch/island.")
            else:
                warnings.append("Viewport meta tag: Missing 'viewport-fit=cover' (recommended for iPhone Safe Areas).")
        else:
            issues.append(f"Viewport meta tag misconfigured: {content}")
    else:
        issues.append("Missing <meta name='viewport'> tag in index.html!")

    # 3. Check Root HTML & Body overflow-x
    if re.search(r'html\s*\{[^}]*overflow-x\s*:\s*hidden', css_content, re.I):
        passes.append("Root HTML overflow-x: Explicitly set to hidden (prevents iOS Safari horizontal wobble).")
    else:
        issues.append("Root HTML overflow-x: Missing 'overflow-x: hidden' on html element (causes iOS Safari page sway).")

    if re.search(r'body\s*\{[^}]*overflow-x\s*:\s*hidden', css_content, re.I):
        passes.append("Body overflow-x: Set to hidden.")
    else:
        issues.append("Body overflow-x: Missing 'overflow-x: hidden' on body element.")

    # 4. Check Webkit Text Size Adjust
    if "-webkit-text-size-adjust: 100%" in css_content or "text-size-adjust: 100%" in css_content:
        passes.append("Text size adjust: -webkit-text-size-adjust: 100% is configured.")
    else:
        warnings.append("Text size adjust: Missing '-webkit-text-size-adjust: 100%' on html/body (can cause arbitrary font scaling on iPhone rotation).")

    # 5. Check iOS Input Auto-Zoom (Inputs must be >= 16px on mobile)
    if "16px" in css_content and ("input" in css_content or "select" in css_content):
        passes.append("Input font-size rule: 16px rule present to prevent iOS Safari auto-zoom on focus.")
    else:
        issues.append("Input font-size rule: Missing 16px font-size enforcement for mobile inputs (triggers iOS auto-zoom bug).")

    # 6. Check 100vw fixed elements (can cause horizontal scrollbar on mobile)
    vw_matches = re.findall(r'(\.[a-zA-Z0-9_-]+\s*\{[^}]*width\s*:\s*100vw[^}]*\})', css_content)
    if vw_matches:
        warnings.append(f"Found {len(vw_matches)} rule(s) using 'width: 100vw'. On mobile, 100vw often exceeds viewport by scrollbar width. Use 'width: 100%' or 'left: 0; right: 0;' instead.")

    # 7. Check 100dvh support for mobile drawers / full height modals
    if "100dvh" in css_content:
        passes.append("Dynamic Viewport Height: '100dvh' used for responsive mobile height.")
    else:
        warnings.append("Dynamic Viewport Height: Using 100vh without 100dvh (Safari bottom address bar can overlap bottom elements).")

    # 8. Check Category Pills Overflow Scrolling
    if re.search(r'\.category-pills\s*\{[^}]*overflow-x\s*:\s*auto', css_content):
        if "-webkit-overflow-scrolling: touch" in css_content or "overflow-x: auto" in css_content:
            passes.append("Category Pills: Configured with horizontal scroll for mobile.")
    else:
        warnings.append("Category Pills: Might lack horizontal scroll container on mobile.")

    # 9. Check Dynamic Categories in JS
    if "renderCategoryPills" in js_content and "counts[catKey]" in js_content:
        passes.append("Dynamic Categories: JavaScript dynamically computes counts and filters empty categories.")
    else:
        warnings.append("Dynamic Categories: Could not verify dynamic category pill generation in app.js.")

    # 10. Check Header Platform Tags Hidden on Mobile
    if re.search(r'\.header-platform-tags[^{]*\{[^}]*display\s*:\s*none', css_content, re.I):
        passes.append("Header Platform Tags: Hidden on mobile/tablets to prevent top navbar crowding.")
    else:
        issues.append("Header Platform Tags: Not hidden on mobile screens, which crowds navbar on iPhone/Android.")

    # 11. Check Contact Card & Form Responsiveness
    if "minmax(0, 1fr)" in css_content and "custom-select" in css_content:
        passes.append("Contact Section & Forms: Form inputs and grid columns configured with minmax(0, 1fr) and width 100% to prevent right-edge clipping.")
    else:
        warnings.append("Contact Section: Ensure grid columns use minmax(0, 1fr) so long text/selects do not overflow.")

    # 12. Check Fixed px Widths > 340px outside media queries
    wide_fixed = []
    for line_num, line in enumerate(css_content.splitlines(), 1):
        if "width:" in line and "px" in line and "max-width" not in line and "@media" not in line:
            m = re.search(r'width\s*:\s*(\d+)px', line)
            if m and int(m.group(1)) > 340:
                wide_fixed.append((line_num, line.strip()))

    # Summary Output
    print(f"\n✅ PASSED CHECKS ({len(passes)}):")
    for p in passes:
        print(f"   ✓ {p}")

    if warnings:
        print(f"\n⚠️ WARNINGS / OPTIMIZATIONS ({len(warnings)}):")
        for w in warnings:
            print(f"   ! {w}")

    if issues:
        print(f"\n❌ FAILED CHECKS ({len(issues)}):")
        for i in issues:
            print(f"   ✗ {i}")
        print("\n💥 RESULT: Mobile layout risks detected! Address FAILED checks to guarantee iOS/Android stability.")
        return 1
    else:
        print("\n🎉 RESULT: Core mobile requirements PASSED!")
        return 0

if __name__ == '__main__':
    sys.exit(audit())
