const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  memeType :{
      type : String,
      required: true ,
      default : "Trending"
  },
  url : {
      type :String,
      required : true 
  }

});


module.exports = mongoose.model('Meme', memeSchema);