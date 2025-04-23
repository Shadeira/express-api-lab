const express = require('express');
const router = express.Router();
const books = require('../data/books.json');

// GET /books - list all books
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books - add a new book
router.post('/', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
  });
  

module.exports = router;
