const express = require('express');
const PublisherController = require('../controllers/publisherController');
const AuthorController = require('../controllers/authorController');
const BookController = require('../controllers/bookController')

const router = express.Router();


router.post('/createAuthor', AuthorController.Controller);

router.post('/createPublisher', PublisherController.Controller);

router.post('/createBooks', BookController.Controller)

// router.get('/updatedBookPrice', Controllers.upadatedBookPrice)

// router.get('/authorsName', Controllers.authorsName)

module.exports = router;