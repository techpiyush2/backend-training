const express = require('express');

const router = express.Router();
const Controllers = require('../controllers/Controllers')

router.post('/createNewAuthor', Controllers.createNewAuthor)

router.post('/createNewBook', Controllers.createNewBook)

router.get('/allBooks', Controllers.allBooks)

router.get('/updatedBookPrice', Controllers.upadatedBookPrice)

router.get('/authorsName', Controllers.authorsName)

module.exports = router;