const BookModel = require('../models/bookModel');

const newBook = async (req,res) =>{

  const newBookData =  req.body ;
  const newBook = await BookModel.create(newBookData);
  res.send({msg : newBook});
};

const allBooks = async (req,res) =>{

    const allBooksData = await BookModel.find();
    res.send({ msg : allBooksData });
  }

  module.exports.newBookData = newBook ;
  module.exports.allBooks = allBooks ;
  


