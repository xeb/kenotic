const express = require('express');
const cors = require('cors');
const path = require('path');
const sermons = require('./data/sermons');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/sermons', (req, res) => {
  res.json(sermons);
});

app.get('/api/sermons/:id', (req, res) => {
  const sermon = sermons.find(s => s.id === req.params.id);
  if (sermon) {
    res.json(sermon);
  } else {
    res.status(404).json({ error: 'Sermon not found' });
  }
});

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Kenotic.ai server running on port ${PORT}`);
});
