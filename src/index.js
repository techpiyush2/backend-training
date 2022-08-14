const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { mongoose } = require('mongoose');

mongoose.connect("mongodb+srv://piyush:piyush123@cluster0.2cgtzhr.mongodb.net/Piyush-DB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(() => console.log("mongoDB is connected"))
.catch ( err => console.log(err))


const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(PORT, function() {
    console.log(`Express app running on http://localhost:${PORT}`)
});
