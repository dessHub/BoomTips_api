const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Threeway Schema
const ThreewaySchema = new Schema({
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
    tip:{
        type:String,
        required:true
    },
    result:{
        type: String,
    }
});

const Threeway = mongoose.model('Threeway', ThreewaySchema);
module.exports = Threeway;



