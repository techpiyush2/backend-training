const express = require('express');
const chunk = require('../lodash/chunkArray');
const pairs = require('../lodash/pairsArray');
const tail = require('../lodash/tailArray');
const union = require('../lodash/unionArray');


const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    chunk.chunkArray()
    pairs.pairsArray()
    tail.tailArray()
    union.unionArray()
    
});

module.exports = router;
// adding this comment for no reason