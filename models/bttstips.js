const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Btts Schema
const BttsSchema = new Schema({
    matchday:{
        type: Date,
        default: Date.now,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    league:{
        type: String,
        required: true
    },
    match:{
        type: String,
        required: true
    },
    result:{
        type: String,
    }
});

const Btts = mongoose.model('Btts', BttsSchema);
module.exports = Btts;