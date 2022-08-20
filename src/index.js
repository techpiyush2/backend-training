const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/Mongo-Reference", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(PORT , function () {
	console.log(`Express app running on http://localhost:${PORT}`)
});
