const express = require('express');
const router = express.Router();
const Controller= require("../controllers/Controller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/Bydistricts", Controller.getDistricts)
router.get("/weather/cities", Controller.getWeather)
router.get("/getAllMemes", Controller.getMemes)
router.post("/createMemes", Controller.createMemes)




module.exports = router;