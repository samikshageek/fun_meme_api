const express = require('express');
const mongoose = require('mongoose');
//const url ="mongodb://localhost/memeDB" ;
const url = process.env.MONGODB_URI || 'mongodb://localhost/memeDB' ;

const app = express();
mongoose.connect(url) ,{useNewUrlParser :true};

const con = mongoose.connection;
con.on('open', function(){
   console.log("connected...congratulations.")  ;

})

app.use(express.json());

const router = require('./routers/routers');
app.use('/memes', router) ;


app.listen(process.env.PORT || 3000, () => {
    console.log("Express server listening on port %d in %s mode", process.env.PORT , app.settings.env);
})