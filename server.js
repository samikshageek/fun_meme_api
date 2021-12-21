const express = require('express');
const mongoose = require('mongoose');
//const url ="mongodb://localhost/memeDB" ;
const dotenv = require('dotenv');

//const result = dotenv.config();
const result = dotenv.config({silent: true}) ;
const url = process.env.MONGODB_URI || 'mongodb://localhost/memeDB' ;

const app = express();
mongoose.connect(url,{useNewUrlParser :true, useUnifiedTopology: true }).then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));;

const con = mongoose.connection;
con.on('open', function(){
   console.log("connected...congratulations.")  ;

})

app.use(express.json());

const router = require('./routers/routers');
//app.use('/memes', router) ;

app.use('/', router) ;
app.listen(process.env.PORT || 3000, () => {
    console.log("Express server listening on port %d in %s mode", process.env.PORT , app.settings.env);
    console.log('mongodb url : ', url, process.env.MONGODB_URI);
    console.log(result.error);
})