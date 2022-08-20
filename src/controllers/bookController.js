const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/authorModel')
const PublisherModel = require('../models/publisherModel')

const BookController = async (req, res) => {
  const data = req.body
  const author_id = req.body.author
  const publisher_id = req.body.publisher

  const isValidAuthor = await AuthorModel.find({ _id: author_id }).select({
    _id: 1,
  })
  const isValidPublisher = await PublisherModel.find({
    _id: publisher_id,
  }).select({ _id: 1 })

  console.log(isValidPublisher)
  console.log(isValidAuthor)

          
  if (isValidAuthor.length > 0) {
    if (isValidPublisher.length > 0) {
      const newBook = await BookModel.create(data)
      res.send({ newBook: newBook })
    } else {
      res.send({ error: "enter valid Publish id "})
    }
  } else {
    res.send({ error: "enter valid Author id" })
  }
}


module.exports.Controller = BookController
