# Mālama Digital Care - Capstone Demo

## Overview
An interactive demo showcasing how Mālama Digital Care helps seniors like Michelle navigate the digital world with confidence. This is a static HTML/CSS/JavaScript website featuring a character-driven journey through digital education services.

## Project Architecture
- **Type**: Static website with Express.js server
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Server**: Node.js with Express serving static files
- **Port**: 5000 (frontend server)

## Key Files
- `index.html` - Landing page with Michelle character (CSS-created)
- `services.html` - Services overview showing foundation sessions and advanced tracks
- `session-detail.html` - Individual session details page
- `styles.css` - All styling for the application
- `script.js` - Navigation logic
- `session-data.js` - Michelle's journey data for each session
- `server.js` - Express server with cache control headers

## Services Included
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

## Demo Flow
1. Landing Page → Click Michelle
2. Services Page → See all base sessions and tracks
3. Session Details → Click any session to see Michelle's journey (pain points, how we help, gains, why she continues)

## Recent Changes
- **2024-10-24**: Initial Replit setup
  - Created Express server with cache control headers
  - Configured workflow to run on port 5000
  - Added .gitignore for Replit environment
  - Server runs on 0.0.0.0:5000 for proper Replit proxy support

## Technical Details
- No external dependencies required for frontend
- Responsive design (works on mobile and desktop)
- Browser compatible: Chrome/Edge, Firefox, Safari, mobile browsers
- Cache-Control headers set to prevent caching issues in iframe
