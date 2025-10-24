const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Disable caching to ensure updates are visible
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Serve static files from the current directory
app.use(express.static(__dirname, {
  etag: false,
  lastModified: false,
  setHeaders: (res, path) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mālama Digital Care Demo running on http://0.0.0.0:${PORT}`);
});
