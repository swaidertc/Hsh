import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    task: { type: String },
    date: { type: Number },
    address: { type: String },
    roms: { type: Number },
    type: { type: String },
    area: { type: Number },
});

module.exports = model("Task",TaskSchema);