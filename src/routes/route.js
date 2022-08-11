const express = require('express');
const router = express.Router();

let persons= [
  {
  name: "SK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "PK",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]

router.post('/voters',(req,res)=>{

    let param = req.query;
    let age = parseInt(param.age);
    let voterArray = [];
    

   for(let i =0; i < persons.length ; i++){
      if(persons[i].age >= age){
           persons[i].votingStatus = true
          voterArray.push(persons[i])  
      }
   }

  res.send(voterArray)
          
})

module.exports = router;



