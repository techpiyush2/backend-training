const express = require("express");
const moviesData = require("../data/moviesData");
const router = express.Router();

const Movies = [
  "Titanic",
  "Avatar",
  "Inception",
  "Avenger",
  "Sonic the Hedgehog",
  "Top Gun",
  "Iron Man",
  "Turbo",
];

// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response

router.get("/movies", function (req, res) {
  res.send(Movies);
});

// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api 

router.get("/movies/:id", function (req, res) {
  var i = req.params.id;
  var j = i - 1;
  if (i <= Movies.length) {
    res.send(Movies[j]);
  } else {
    res.send("No movie exists with this id");
  }
});

router.get("/films", function (req, res) {
  res.send(moviesData);
});

router.get("/films/:id", function (req, res) {
    
    const i = req.params.id;
    const j = i - 1;
    const movies = moviesData;

    if (i <= movies.length){
        res.send(movies[j])
    }else{
        res.send('No movie exists with this id')
    }
  });

module.exports = router;
