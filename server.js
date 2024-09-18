const express = require('express');
const compression = require('compression');
const shrinkRay = require('shrink-ray-current');
const path = require('path');
const app = express();
const port = 3000;

app.use(shrinkRay());
app.use(compression());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});