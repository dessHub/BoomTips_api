const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Over 2.5 Schema
const OverSchema = new Schema({
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

const Over = mongoose.model('Over', OverSchema);
module.exports = Over;