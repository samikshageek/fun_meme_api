const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    templateName :{
        type : String,
        required: false,
        default : "Birthday"
    },
    url:{
        type :String,
        required : true 
    }
});

module.exports = mongoose.model('Template', templateSchema);