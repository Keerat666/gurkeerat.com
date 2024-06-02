const express = require('express');
var cors = require('cors')
const app = express();
const path = require('path');
const PORT = 8009;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Handle other routes and return the React app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

module.exports = app;

