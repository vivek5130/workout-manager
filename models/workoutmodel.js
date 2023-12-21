const mongoose = require('mongoose')

//create a schema constructor
const Schema = mongoose.Schema
//creating an instance of schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
},{timestamps: true})


//  Creating a model and exporting it
module.exports = mongoose.model('Workout', workoutSchema) // Workout is name of the model