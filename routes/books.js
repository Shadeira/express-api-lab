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


// PUT /books/:id - update a book by id
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
  
    books = books.map(book =>
      book.id === bookId ? { ...book, ...updatedBook } : book
    );
  
    res.json({ message: "Book updated", book: updatedBook });
  });
  
  // DELETE /books/:id - delete a book by id
  router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(book => book.id !== bookId);
    res.json({ message: "Book deleted" });
  });

module.exports = router;
