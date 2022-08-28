const ProductModel = require("../models/ProductModel")

const createProduct= async (req, res) => {
    let data= req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct = createProduct
