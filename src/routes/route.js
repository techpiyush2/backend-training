const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers')

// Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books.

router.post('/new-book',bookControllers.newBookData);

router.get('/all-book',bookControllers.allBooks);

module.exports = router;



