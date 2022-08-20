const AuthorModel = require('../models/authorModel')


const AuthorController = async (req,res) =>{

    let data = req.body ;

    const newAuhor = await AuthorModel.create(data);

    res.send({newAuthor : newAuhor})

};


module.exports.Controller = AuthorController;