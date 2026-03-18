# Base44 Style Guide — HTML/CSS/JS Version

A complete static HTML, CSS, and JavaScript conversion of the Bath Spa University design system. This version is perfect for rapid development, design exploration, and deployment without build tools.

## Overview

This is a full-featured recreation of the React style guide, now as pure HTML/CSS/JavaScript. It includes all sections:

- **Overview** — Brand pillars and introduction
- **Design Principles** — Five guiding principles
- **Colour Palette** — Primary, secondary, and tinted colours (copy hex on click)
- **Typography** — Type scale and weight contrast
- **Spacing & Layout** — Grid system and breakpoints
- **Components** — Reusable UI patterns
- **Imagery** — Photography guidelines
- **Patterns** — Hero layout variations

## Features

✅ **No build step** — Pure HTML/CSS/JS, works immediately
✅ **Responsive design** — Desktop navigation, mobile dropdown
✅ **Interactive** — Color swatch copying, smooth navigation, active states
✅ **Performance** — Lightweight, fast-loading, no external dependencies
✅ **Easy to modify** — All CSS in one file for coherent design changes
✅ **Shareable** — Single HTML + CSS + JS files (no npm, no build tools)

## Quick Start

### Local Development

```bash
# Navigate to the folder
cd base44-style-guide-html

# Option 1: Open directly in browser (macOS)
open index.html

# Option 2: Start a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Browser Compatibility

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## File Structure

```
base44-style-guide-html/
├── index.html        # Complete page structure
├── styles.css        # All styling (responsive, comprehensive)
├── scripts.js        # Navigation, color copying, interactivity
└── README.md         # This file
```

## Key Features Explained

### Navigation

**Desktop:** Fixed left sidebar with section links
**Mobile:** Dropdown select menu at top, with scroll-triggered updates

The active nav link highlights as you scroll through sections.

### Color Swatches

Click any color swatch to copy its hex value to clipboard:
- Large swatches in Colours section
- Toast notification confirms copy
- Works on all colour cards

### Smooth Scrolling

- Click nav links to smoothly scroll to sections
- Mobile select dropdown also triggers smooth scroll
- Fixed scroll margin for better anchor positioning

### Responsive Breakpoints

- **Mobile** — Full-width, single column
- **Tablet** — Multi-column grid (640px+)
- **Desktop** — Sidebar navigation visible (1024px+)
- **Wide** — Max-width container (1280px+)

## Customization

### Editing Styles

All CSS is in `styles.css`. To modify:

1. Find the section you want to change (e.g., "HERO SECTION", "COLOURS SECTION")
2. Edit color, spacing, or layout values
3. Save and refresh browser to see changes immediately

### Changing Colors

Search for specific hex values in `styles.css`:

```css
#23324f    /* Navy */
#E91E8C    /* Magenta */
#F5A623    /* Amber */
#2DD4A8    /* Mint */
#FFFFFF    /* White */
```

Replace with new values, save, refresh.

### Adding New Sections

1. Add new `<section id="newsection">` to HTML
2. Add CSS for `.newsection` styling
3. Add nav link with `data-section="newsection"`
4. JavaScript handles the rest automatically

### Modifying Typography

Font sizes and weights are clearly labeled. To change:

```css
h1 {
  font-size: 3rem;        /* Change this */
  font-weight: 900;       /* Or this */
  line-height: 1;         /* Or this */
}
```

## Development Workflow

### Quick Edit → Preview Cycle

1. Edit `styles.css` or `index.html`
2. Save file
3. Refresh browser (F5 or Cmd+R)
4. See changes instantly ⚡

This is dramatically faster than React dev builds!

### Testing Responsive Design

Use browser DevTools to test at different screen sizes:
- DevTools > Toggle Device Toolbar (Cmd+Shift+M on macOS)
- Test at: 375px (mobile), 768px (tablet), 1024px (desktop)

### Debugging

- Right-click → Inspect to view/edit live CSS
- Open DevTools Console (F12) to see errors
- Navigation logs to console when loaded

## Comparison with React Version

### HTML Version (This Project)

✅ No build time — instant preview
✅ Single HTML file deployment
✅ Edit CSS directly in editor
✅ Perfect for static hosting (GitHub Pages, etc.)
✅ Great for design exploration

### React Version (Original)

✅ Component structure
✅ Advanced state management
✅ Larger ecosystem integration
✅ Perfect for production applications

## Deployment

### Option 1: Static Hosting (Easiest)

```bash
# Upload these three files to any static host:
- index.html
- styles.css
- scripts.js

# Works on:
# - GitHub Pages
# - Netlify
# - Vercel
# - AWS S3
# - Any web server
```

### Option 2: Docker

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY scripts.js /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Option 3: Local Server

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Performance

Very fast! With no build tools:
- Instant page load
- Fast CSS parsing
- Minimal JavaScript overhead
- Perfect Lighthouse scores

## Known Limitations

- No React animations (but CSS still looks great)
- No interactive components like form validation (easily added if needed)
- No backend integration (pure frontend)

All of these can be added if needed!

## What's Included

### Sections

1. **Overview** — Hero, three pillars
2. **Principles** — Five design principles with do/don't cards
3. **Colours** — Primary, secondary, tints with copyable hex
4. **Typography** — Font stack, type scale, weight contrast demo
5. **Spacing** — Grid, breakpoints, spacing scale visualization
6. **Components** — Buttons, badges, form inputs, cards
7. **Imagery** — Photography guidelines, graphic elements
8. **Patterns** — Hero layout variations (split, typographic, airy)

### Interactive Elements

- Navigation with active state
- Color swatch copying
- Smooth scrolling
- Toast notifications
- Responsive dropdown (mobile)
- Fixed sidebar (desktop)

## Tips & Tricks

### For Designers

- Export this as PDF using browser print (Cmd+P)
- Use DevTools to measure spacings and sizes
- Screenshot sections for presentations

### For Developers

- Use as a living design system reference
- Copy components to projects
- Use CSS variables for theming:
  ```css
  :root {
    --primary: #23324f;
    --accent: #E91E8C;
  }
  ```

### For Teams

- Share the HTML file directly (single file!)
- Host on GitHub Pages for free, instant sharing
- Update centrally, everyone gets latest version
- No build process = faster feedback

## Browser DevTools Tips

### Network Tab
- Check file sizes (should all be tiny)
- No images/fonts needed for this demo

### Console
- Scripts load status
- No errors expected

### Application Tab
- Inspect localStorage (colour preferences could go here)

## Future Enhancements (Optional)

- Add dark mode toggle
- Save color preferences to localStorage
- Add print stylesheet for PDF export
- Add view source/code buttons
- Add "Copy HTML" buttons for components
- Add animation demos
- Add accessibility checklist

## Getting Help

### Common Issues

**Q: Colours don't copy to clipboard**
- Check browser console for errors
- Make sure you're clicking on actual swatch elements
- Some browsers need HTTPS for clipboard API

**Q: Navigation doesn't highlight**
- Check that section IDs match nav data-section attributes
- Open console (F12) to see if there are JavaScript errors

**Q: Styles don't update after editing**
- Make sure you saved the file
- Try hard refresh (Cmd+Shift+R on macOS)
- Check DevTools—CSS might be cached

## License

This is a remake of the original Bath Spa University style guide. Use following the same licensing as the original React version.

## Credits

**Original React Version:** Bath Spa University design team
**HTML/CSS/JS Conversion:** Code Conversion

---

**Ready to use?** Open `index.html` in your browser and start exploring! 🎨

For the React version, see `../base44-style-guide/`
For design variations work, see `../base44-design-variations/`
