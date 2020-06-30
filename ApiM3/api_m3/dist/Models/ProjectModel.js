"use strict";

var _mongoose = require("mongoose");

//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

var TaskSchema = new _mongoose.Schema({
    task: { type: String },
    date: { type: Number },
    address: { type: String },
    roms: { type: Number },
    type: { type: String },
    area: { type: Number }
});

module.exports = (0, _mongoose.model)("Task", TaskSchema);