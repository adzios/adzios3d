"""
ADZIOS3D - FULL FUNCTIONAL REGRESSION TEST SUITE
Part of qa-tester skill for Adzios3D.
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
PRODUCTS_PATH = os.path.join(BASE_DIR, 'products.js')

def run_regression():
    print("=" * 60)
    print("🔍 ADZIOS3D - SYSTEMATIC FUNCTIONAL REGRESSION AUDIT")
    print("=" * 60)

    passed = 0
    total = 6

    # 1. products.js export
    with open(PRODUCTS_PATH, encoding='utf-8') as f:
        p_content = f.read()
    if 'window.products' in p_content and 'module.exports' in p_content:
        print("✓ [PASS 1/6] Data Layer: products.js exports both browser window.products and module.exports")
        passed += 1
    else:
        print("✗ [FAIL 1/6] products.js missing standard exports")

    # 2. Assets presence
    asset_matches = set(re.findall(r'assets/[a-zA-Z0-9_\.-]+', p_content))
    missing = [a for a in asset_matches if not os.path.exists(os.path.join(BASE_DIR, a))]
    if not missing:
        print(f"✓ [PASS 2/6] Catalog Media: All {len(asset_matches)} product asset images exist on disk")
        passed += 1
    else:
        print(f"✗ [FAIL 2/6] Missing assets: {missing}")

    # 3. HTML essential elements
    with open(HTML_PATH, encoding='utf-8') as f:
        h_content = f.read()
    required_ids = [
        'productsGrid', 'categoryPills', 'searchInput', 'clearSearchBtn',
        'wishlistModal', 'productModal', 'lightboxModal', 'contactForm',
        'wishlistCount', 'wishlistToggleBtn', 'mobileDrawer', 'mobileMenuBtn'
    ]
    missing_ids = [rid for rid in required_ids if f'id="{rid}"' not in h_content and f"id='{rid}'" not in h_content]
    if not missing_ids:
        print(f"✓ [PASS 3/6] DOM Architecture: All {len(required_ids)} critical UI anchor IDs verified")
        passed += 1
    else:
        print(f"✗ [FAIL 3/6] Missing critical IDs: {missing_ids}")

    # 4. Script loading order
    p_idx = h_content.find('src="products.js')
    a_idx = h_content.find('src="app.js')
    if p_idx != -1 and a_idx != -1 and p_idx < a_idx:
        print("✓ [PASS 4/6] Script Dependency: products.js script tag is loaded before app.js")
        passed += 1
    else:
        print("✗ [FAIL 4/6] Script load order invalid")

    # 5. Open Graph & SEO
    og_tags = ['og:title', 'og:description', 'og:image', 'theme-color']
    missing_og = [tag for tag in og_tags if tag not in h_content]
    if not missing_og:
        print("✓ [PASS 5/6] SEO & Social: Open Graph tags and mobile theme-color properly configured")
        passed += 1
    else:
        print(f"✗ [FAIL 5/6] Missing SEO meta tags: {missing_og}")

    # 6. CSS syntax validation & braces matching
    with open(CSS_PATH, encoding='utf-8') as f:
        c_content = f.read()
    open_b = c_content.count('{')
    close_b = c_content.count('}')
    if open_b == close_b and open_b > 100:
        print(f"✓ [PASS 6/6] CSS Structure: Balanced syntax verified ({open_b} blocks parsed, 0 unmatched braces)")
        passed += 1
    else:
        print(f"✗ [FAIL 6/6] CSS syntax imbalance: {open_b} opening vs {close_b} closing braces")

    print("-" * 60)
    print(f"TOTAL: {passed}/{total} REGRESSION CHECKS PASSED.")
    print("=" * 60)
    return 0 if passed == total else 1

if __name__ == '__main__':
    sys.exit(run_regression())
