
// Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books.

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName :  {type : String, require : true},
    authorName : String,
    category : {type : String,
                enum : ['fantasy','science','mystery','thriller','romance']
    },
    year : {type : Date, require : true}
},{ timestamps:true });

module.exports = mongoose.model('book',bookSchema);