# Hong Kong Trip 2026 🇭🇰

A dark-themed, mobile-friendly static website serving as an all-in-one travel hub for Antonio & Khatelyn's Hong Kong trip.

**Trip Dates:** January 13-19, 2026
**Purpose:** HKTDC Trade Fair (Business) + Tourism
**Deployment:** Vercel (auto-deploy on push to main)

---

## 📋 Features

- **Document Hub:** Centralized access to all travel documents via GDrive links
- **Interactive Itinerary:** Day-by-day schedule with collapsible sections
- **Immigration Guide:** Print-friendly summary for customs/immigration
- **Emergency Contacts:** Quick access to emergency services and consulate info
- **Smart Checklist:** Pre-departure checklist with progress tracking (saves to localStorage)
- **Dark Theme:** Modern, GitHub-inspired dark design
- **Mobile-First:** Fully responsive design optimized for mobile devices
- **Offline-Ready:** All checklist progress saved locally

---

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/hk-trip-2026.git
cd hk-trip-2026
```

2. Open `index.html` in your browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

That's it! No build tools or dependencies required.

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Connect to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-deploy on every push to `main`

---

## 🔗 Configure Document Links

Edit the `DOCUMENT_LINKS` object in `script.js` (lines 8-25):

```javascript
const DOCUMENT_LINKS = {
    flight: 'https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view',
    insurance: 'https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view',
    // ... update all placeholders
};
```

### How to Get GDrive Link:
1. Upload document to Google Drive
2. Right-click → "Get link" → "Anyone with the link can view"
3. Copy the link (format: `https://drive.google.com/file/d/FILE_ID/view`)
4. Replace placeholder in `script.js`

---

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css` (lines 14-22):

```css
:root {
    --bg-primary: #0d1117;      /* Main background */
    --bg-secondary: #161b22;    /* Card backgrounds */
    --accent: #58a6ff;          /* Links & highlights */
    --text-primary: #ffffff;    /* Headings */
    --text-secondary: #c9d1d9;  /* Body text */
    --success: #238636;         /* Checkmarks */
    --warning: #d29922;         /* Warnings */
}
```

### Content

- **Itinerary:** Edit HTML in `index.html` (lines 145-278)
- **Emergency Contacts:** Edit HTML in `index.html` (lines 410-450)
- **Checklist Items:** Edit HTML in `index.html` (lines 455-540)

---

## ⌨️ Keyboard Shortcuts

- **Alt/Option + 1-5:** Switch between tabs
- **Ctrl/Cmd + P:** Quick print immigration page

---

## 🛠️ Utility Functions

Open browser console and use:

```javascript
// Reset all saved data (checklist progress, collapsed days, active tab)
resetAllData()

// Export checklist progress as text file
exportChecklist()
```

---

## 📁 Project Structure

```
hk-trip-2026/
├── index.html              # Main single-page application
├── styles.css              # Dark theme styles
├── script.js               # Tab navigation & interactions
├── README.md               # This file
└── IMPLEMENTATION_PLAN.md  # Detailed project plan
```

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Mobile Features

- Touch-friendly navigation
- Collapsible sections to save space
- Print-optimized immigration page
- Tap-to-call emergency numbers
- Responsive tables and cards

---

## 🔒 Privacy & Data

- All checklist progress is stored locally in your browser (localStorage)
- No data is sent to external servers
- Document links point to your private GDrive (share settings controlled by you)
- No cookies, analytics, or tracking

---

## 📝 To-Do

- [ ] Replace all GDrive placeholder links with actual URLs
- [ ] Add hotel contact numbers in Emergency section
- [ ] Test on mobile devices
- [ ] Print test immigration page
- [ ] Share site URL with emergency contacts

---

## 🐛 Troubleshooting

**Document links not working?**
- Check that GDrive links are updated in `script.js`
- Verify sharing settings are set to "Anyone with the link"

**Checklist not saving?**
- Ensure browser allows localStorage
- Try clearing browser cache and reload

**Print not working?**
- Use Chrome/Edge for best print results
- Navigate to Immigration tab before printing
- Use Print Preview to verify layout

---

## 📄 License

MIT License - Feel free to use this template for your own trips!

---

## 🙏 Credits

Built with ❤️ by Antonio Martinez
Designed for our Hong Kong adventure 2026

---

**Safe travels! 🇭🇰**

*Last Updated: December 28, 2025*
