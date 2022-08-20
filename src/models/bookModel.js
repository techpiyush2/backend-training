const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

	    name:{
        type: String,
        required: true
     },
		author: mongoose.Schema.Types.ObjectId,
	    price:Number,
		ratings:Number,
		publisher:  mongoose.Schema.Types.ObjectId

   
},
{timestamps:true})

module.exports = mongoose.model('book',bookSchema)