const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  let playerName = req.body.name;
  let newPlayer = req.body;

  for (let i = 0; i < players.length; i++) {
    if (players[i].name == playerName) {
      return res.send("This player is already exist");
    }
  }
  players.push(newPlayer);
  res.send(players);
});

router.post("/players/:playerName/bookings/:bookingId",(req, res) => {
  let name = req.params.playerName;
  let isPlayerPresent = false;

  for (let i = 0; i < playersList.length; i++) {
    if (playersList[i].name == name) {
      isPlayerPresent = true;
    }
  }
  if (isPlayerPresent == false) {
    return res.send("Player does not exit");
  }
//===================================================================================
 
let booking = req.body;
let bookId = req.params.bookingId;

  for (let i = 0; i < playersList.length; i++) {
    if (playersList[i].name == name) {
      for (let j = 0; j < playersList[i].bookings.length; j++) {
        if (playersList[i].bookings[j].bookingNumber == bookId) {
          return res.send("Booking from this id is already present");
        }
      }
      playersList[i].bookings.push(booking);
    }
  }
  res.send(playersList);
});

module.exports = router;
