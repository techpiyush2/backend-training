const UserModel= require("../models/userModel")

const createUser= async  (req, res) => {
    let data = req.body;
    let savedData= await UserModel.create(data)
    res.send({msg:savedData})    
}

const getUsersData= async  (req, res) => {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData