const PublisherModel = require('../models/publisherModel')


const PublisherController = async (req,res) =>{

    let data = req.body ;

    const newPublisher = await PublisherModel.create(data);

    res.send({newPublisher : newPublisher})

};


module.exports.Controller = PublisherController;