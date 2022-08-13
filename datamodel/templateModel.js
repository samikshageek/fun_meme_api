const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    templateName :{
        type : String,
        required: false,
        default : "Birthday"
    }
});

module.exports = mongoose.model('Template', templateSchema);