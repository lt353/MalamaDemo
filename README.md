# Mālama Digital Care - Capstone Demo

An interactive demo showcasing how Mālama Digital Care helps seniors like Michelle navigate the digital world with confidence.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Click on Michelle to begin the demo
3. Explore the services and click on any session to see Michelle's journey

## 📁 Project Structure

```
MalamaDemo/
├── index.html              # Landing page with Michelle character
├── services.html           # Services overview page
├── session-detail.html     # Individual session details
├── styles.css              # All styling
├── script.js               # Navigation logic
├── session-data.js         # Michelle's journey data for each session
├── images/                 # All image assets
└── README.md              # This file
```

## 🎨 Adding Your Logo

To add your Mālama Digital Care logo:

1. Save your logo file in the `images/` folder (e.g., `images/logo.png`)
2. Open `styles.css`
3. Find the `.logo-container h1` section (around line 30)
4. Replace the text logo with an image by updating the HTML in all three files:

In `index.html`, `services.html`, and `session-detail.html`, change:
```html
<div class="logo-container">
    <h1>Mālama Digital Care</h1>
    <span class="demo-badge">DEMO</span>
</div>
```

To:
```html
<div class="logo-container">
    <img src="images/logo.png" alt="Mālama Digital Care" style="height: 50px;">
    <span class="demo-badge">DEMO</span>
</div>
```

## 🎭 Michelle Character

Michelle is created entirely with CSS (no image needed!). She's a friendly cartoon character that serves as the entry point to the demo.

## 📚 Services Included

### Foundation Sessions (Base)
1. **Your Device Basics** - Navigate devices confidently
2. **Email Essentials** - Master email accounts
3. **Protect Yourself** - Recognize scams and stay safe
4. **Communication Skills** - Connect with family via messaging and video
5. **Password Management** - Keep passwords secure

### Advanced Tracks
1. **Cyber Safety Track** - Staying safe online (3-4 sessions)
2. **Health Technology Track** - Managing health apps and portals
3. **Organizing Digital Life** - File management and organization

## 🎯 Demo Flow

1. **Landing Page** → Click Michelle
2. **Services Page** → See all base sessions and tracks
3. **Session Details** → Click any session to see:
   - Michelle's pain points (before)
   - How we help (during)
   - Michelle's gains (after)
   - Why she continues (motivation)

## 🎨 Customization

### Colors
The demo uses a purple gradient theme. To change colors, update these CSS variables in `styles.css`:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)
- Accent: `#ff6b6b` (red for DEMO badge)

### Content
To modify Michelle's stories, edit `session-data.js`. Each session has four sections:
- `painPoints`: Array of challenges before
- `howWeHelp`: Array of solutions during sessions
- `gains`: Array of achievements after
- `whyContinues`: String explaining motivation to continue

## 💡 Presentation Tips

1. Start with the landing page and explain who Michelle represents
2. Click Michelle to reveal the services structure
3. For each base session you discuss, click it to show the full journey
4. Emphasize the progression: pain → help → gains → motivation
5. Use the visual hierarchy to show how base sessions lead to advanced tracks

## 🛠 Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks needed)
- Responsive design (works on mobile and desktop)
- No external dependencies
- All assets are self-contained

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

---

Built for the Mālama Digital Care capstone presentation. Empowering seniors through personalized digital education.
