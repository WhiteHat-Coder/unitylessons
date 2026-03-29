# 🎯 How to Test & Verify Your Website

## Quick Test (30 seconds)

1. **Open the website:**
   ```bash
   # Navigate to your project folder
   cd /Users/vganji977@apac.comcast.com/Documents/UnityProjects/UnityTutorial
   
   # Double-click index.html in Finder
   # OR right-click → Open With → Browser
   ```

2. **Check homepage:**
   - ✅ See "Programming Lectures" title
   - ✅ See gradient purple background
   - ✅ See "Day 1" card with topics
   - ✅ Hover over cards (should lift up)

3. **Click "Start Day 1":**
   - ✅ Opens Day 1 lesson page
   - ✅ See 5 main topics
   - ✅ See code examples with dark background
   - ✅ See green output sections

4. **Test mobile view:**
   - Open Chrome DevTools (F12 or Cmd+Option+I)
   - Click device toggle icon (or Cmd+Shift+M)
   - Select iPhone or Android
   - ✅ Everything should resize nicely

**If all checkmarks work → Your site is ready! 🎉**

---

## Start Local Server (Recommended)

### Using Python (Built-in on Mac/Linux)
```bash
# Navigate to project
cd /Users/vganji977@apac.comcast.com/Documents/UnityProjects/UnityTutorial

# Start server
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000
```

Press `Ctrl+C` to stop the server.

---

## Full Feature Test

### Homepage Tests
1. **Load homepage** (`index.html`)
   - [ ] Page loads without errors
   - [ ] Purple gradient background visible
   - [ ] Header displays correctly
   - [ ] Lecture cards visible
   - [ ] Footer displays

2. **Interactive elements**
   - [ ] Hover over Day 1 card (lifts up)
   - [ ] Click "Start Day 1" button (navigates to day1.html)
   - [ ] Scroll down (scroll-to-top button appears)
   - [ ] Click scroll-to-top button (smooth scroll)

3. **Theme toggle** (if visible)
   - [ ] Click theme icon (top-right)
   - [ ] Page switches between light/dark
   - [ ] Preference saved (refresh page, theme persists)

### Day 1 Page Tests
1. **Navigation**
   - [ ] Click "← Back to Home" (returns to homepage)
   - [ ] Page loads without errors
   - [ ] All 5 topics visible

2. **Content display**
   - [ ] Tables display correctly
   - [ ] Code examples have dark background
   - [ ] Output sections have black/green terminal look
   - [ ] Tips boxes have yellow background
   - [ ] Key points boxes have blue background

3. **Interactive features**
   - [ ] Hover over code examples (copy button appears)
   - [ ] Click copy button (copies code)
   - [ ] Scroll down (scroll-to-top appears)
   - [ ] Animations trigger as you scroll

### Mobile Tests
1. **Responsive design**
   - [ ] Test on phone (320px width)
   - [ ] Test on tablet (768px width)
   - [ ] Test on desktop (1200px+ width)
   - [ ] All content readable
   - [ ] No horizontal scrolling
   - [ ] Buttons are touch-friendly

### Browser Tests
Test in:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Tests
1. **Open Chrome DevTools** (F12)
2. **Go to Lighthouse tab**
3. **Click "Generate report"**
4. **Check scores:**
   - [ ] Performance: 90+
   - [ ] Accessibility: 90+
   - [ ] Best Practices: 90+
   - [ ] SEO: 90+

### PWA (Offline) Test
1. **Open in Chrome**
2. **Open DevTools** (F12)
3. **Application tab → Service Workers**
4. **Check "Offline" checkbox**
5. **Reload page**
   - [ ] Page still loads
   - [ ] Content still visible
   - [ ] Navigation still works

---

## Check Browser Console

### Open Console
- Chrome/Edge: `Cmd+Option+J` (Mac) or `Ctrl+Shift+J` (Windows)
- Firefox: `Cmd+Option+K` (Mac) or `Ctrl+Shift+K` (Windows)
- Safari: `Cmd+Option+C` (Mac)

### Should see:
```
📚 Programming Lectures - Ready!
Service Worker registered
```

### Should NOT see:
- ❌ Red error messages
- ❌ Failed to load resources
- ❌ 404 errors

---

## File Verification

### Check all files exist:
```bash
cd /Users/vganji977@apac.comcast.com/Documents/UnityProjects/UnityTutorial

# Main files
ls -la index.html                 # ✓ Should exist
ls -la pages/day1.html            # ✓ Should exist
ls -la manifest.json              # ✓ Should exist

# Assets
ls -la assets/css/main.css        # ✓ Should exist
ls -la assets/css/lessons.css     # ✓ Should exist
ls -la assets/js/main.js          # ✓ Should exist
ls -la assets/js/service-worker.js # ✓ Should exist

# Documentation
ls -la README.md                  # ✓ Should exist
ls -la QUICKSTART.md              # ✓ Should exist
ls -la PROJECT_SUMMARY.md         # ✓ Should exist
ls -la docs/DEPLOYMENT.md         # ✓ Should exist
ls -la docs/CONTRIBUTING.md       # ✓ Should exist

# Config
ls -la package.json               # ✓ Should exist
ls -la .gitignore                 # ✓ Should exist
ls -la LICENSE                    # ✓ Should exist
```

---

## Common Issues & Fixes

### Issue: Styles not loading
**Symptoms:** Page looks plain, no colors
**Fix:**
```bash
# Check file paths
ls assets/css/main.css
ls assets/css/lessons.css

# If files exist but not loading, check HTML links
open index.html  # View source, check <link> tags
```

### Issue: JavaScript not working
**Symptoms:** No copy buttons, no animations
**Fix:**
```bash
# Check console for errors (F12 in browser)
# Verify JS files exist
ls assets/js/main.js

# Check HTML script tags
open index.html  # View source, check <script> tags
```

### Issue: Day 1 link broken
**Symptoms:** Clicking "Start Day 1" gives 404
**Fix:**
```bash
# Verify file exists
ls pages/day1.html

# Check link in index.html should be:
# href="pages/day1.html"
```

### Issue: Page loads but looks broken
**Fix:**
```bash
# Clear browser cache
# Chrome: Cmd+Shift+Delete (Mac) or Ctrl+Shift+Delete (Windows)
# Then hard refresh: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)
```

---

## Testing Checklist

### Before Deployment
- [ ] All files present
- [ ] Homepage loads correctly
- [ ] Day 1 page loads correctly
- [ ] Navigation works (back button)
- [ ] Styles applied correctly
- [ ] JavaScript running (check console)
- [ ] Mobile responsive
- [ ] Tested in 3+ browsers
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] All links work
- [ ] Images load (if any added)

### After Deployment
- [ ] Live site loads
- [ ] All pages accessible
- [ ] HTTPS enabled
- [ ] Custom domain working (if setup)
- [ ] SSL certificate valid
- [ ] Mobile version works
- [ ] Share on social media (preview looks good)
- [ ] Google can index it
- [ ] PWA installable

---

## Quick Commands Reference

### Start Server
```bash
python3 -m http.server 8000       # Python
php -S localhost:8000             # PHP
npx http-server -p 8000           # Node.js
```

### Check File Sizes
```bash
du -sh *                          # All files/folders
du -h index.html                  # Single file
```

### Find Files
```bash
find . -name "*.html"             # All HTML files
find . -name "*.css"              # All CSS files
find . -name "*.js"               # All JS files
```

### View Folder Structure
```bash
ls -R                             # Recursive list
find . -type f | head -20         # First 20 files
```

---

## Success Indicators

### ✅ Everything Working If:
1. Homepage loads with purple gradient
2. "Day 1" card is clickable
3. Day 1 page shows all content
4. Code examples have syntax colors
5. Back button returns to homepage
6. Mobile view looks good
7. No browser console errors
8. Scroll-to-top button appears
9. Hover effects work on cards
10. Footer displays at bottom

### 🎉 Ready to Deploy If:
- All success indicators ✅
- Tested on mobile device
- Tested in multiple browsers
- Lighthouse score 90+
- Documentation reviewed
- Git repository initialized (optional)
- Custom content added (if desired)

---

## Need Help?

1. **Check documentation:**
   - [README.md](README.md)
   - [QUICKSTART.md](QUICKSTART.md)
   - [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

2. **Verify files exist:**
   ```bash
   ls -la
   ```

3. **Check browser console** (F12)

4. **Try different browser**

5. **Start fresh:**
   ```bash
   # Re-download files
   # Clear browser cache
   # Try again
   ```

---

**Your site should be working perfectly! 🚀**

If everything checks out, proceed to deployment:
→ See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
