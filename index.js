// index.js
const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');

app.use(express.json()); // built-in middleware to parse JSON
app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
