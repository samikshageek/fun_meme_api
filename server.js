const express = require('express');
const mongoose = require('mongoose');
const url ="mongodb://localhost/memeDB" ;

const app = express();
mongoose.connect(url) ,{useNewUrlParser :true};

const con = mongoose.connection;
con.on('open', function(){
   console.log("connected...congratulations")  ;

})

app.use(express.json());

const router = require('./routers/routers');
app.use('/memes', router) ;


app.listen(9000, () => {
    console.log("server up and running on port 9000");
})