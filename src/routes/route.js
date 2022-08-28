const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const ProductController = require("../controllers/productController");
const OrderController = require("../controllers/orderController");
const Middlewares = require("../middlewares/commonMiddlewares.js");

router.post("/createProduct", ProductController.createProduct);

router.post("/createUser",Middlewares.statusCheck, UserController.createUser);

router.get("/allUser", UserController.getUsersData)

router.post("/createOrder", Middlewares.statusCheck, OrderController.createOrder);

module.exports = router;
