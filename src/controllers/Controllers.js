const authorModel = require("../models/authorsModel");
const bookModel = require("../models/bookModel");

const createNewAuthor = async function (req, res){
  const reqAuthor = req.body;

  const SavedData = await authorModel.create(reqAuthor);

    res.send({ "New Author Created": SavedData });

};

const createNewBook = async function (req, res) {
  const reqBook = req.body;

  const Saved = await bookModel.create(reqBook);

    res.send({ "New Book Created": Saved });

};

const allBooks = async function (req, res) {
  const authorDetails = await authorModel.find({
    author_name: "Chetan Bhagat",
  });
  const id = authorDetails[0].author_id;
  const booksName = await bookModel.find({ author_id: id }).select({ name: 1 , _id : 0 });
  res.send({ "books Written By Chetan Bhagat": booksName });
}; 

const upadatedBookPrice = async function (req, res) {
  const bookDetails = await bookModel.find({ name: "Two states" });
  const id = bookDetails[0].author_id;
  const authorN = await authorModel
    .find({ author_id: id })
    .select({ author_name: 1, _id: 0 });
  const bkName = bookDetails[0].name;
  const updatedPrice = await bookModel
    .findOneAndUpdate({ name: bkName }, { price: 100 }, { new: true })
    .select({ price: 1, _id: 0 });

  res.send({ "Name": authorN, "Updated Price" : updatedPrice });
};

const authorsName = async function (req, res) {
  const booksId = await bookModel
    .find({ price: { $gte: 50, $lte: 100 } })
    .select({ author_id: 1, _id: 0 });
  const id = booksId.map((_id) => _id.author_id);
 
  let newArr = [];

  for (let i = 0; i < id.length; i++) {
    let x = id[i];
    const author = await authorModel
      .find({ author_id: x })
      .select({ author_name: 1, _id: 0 });
    newArr.push(author);
  }

  const authorName = newArr.flat();
  res.send({ authorName });
};



module.exports.createNewAuthor = createNewAuthor;
module.exports.createNewBook = createNewBook;
module.exports.allBooks = allBooks;
module.exports.upadatedBookPrice = upadatedBookPrice;
module.exports.authorsName = authorsName;
