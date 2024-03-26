const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    language:{
        type: String,
        required: true
    },    
    word:{
        type: String,
        required: true
    },
    apiTranslation:{ 
        type: String,
        required: false
    },
    userTranslation:{ 
        type: String,
        required: false
    },
    annotations:{
        type: String,
        required: false
    }
},{
    timestamps: true,        
});

module.exports = mongoose.model('Entry', entrySchema);