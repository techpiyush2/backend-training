const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({

 name: {
    type: String,
    required: true
 },
 headQuater:{
    type: String,
    required: true
 },

});


module.exports = mongoose.model('publisher',publisherSchema);