//controllers are the functionality of routes to make it more clean simple and readaable
const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')
//get all workout
const getWorkouts= async(req, res)=>{
    const workouts = await  Workout.find({ }).sort({createdAt : -1})
    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async(req, res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({msg:"Not a valid id"})
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({msg:"No such workout available"})
    }
    res.status(200).json(workout)
}

//create workout
const createWorkout = async(req, res)=>{
    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(err)
    {
        res.status(400).json({error: err.message})
        
    }

}
//delete
const deleteWorkout = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({msg: "Invalid id"})
    }
    const a = Workout.findOne({_id:id})
    if(a)
    {
        const workout = await Workout.findOneAndDelete({_id :id})
        if(!workout){
            res.status(404).json({msg: "No such workout found"})
        }
    res.status(200).json({msg:workout})
    }
    else{
        res.status(404).json({msg: "No such workout found"})
    }
    
    
}
//update
const updateWorkout = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({msg: "Invalid id"})
    }
    const workout = await Workout.findOneAndUpdate({_id :id},{ ...req.body})
    if(!workout){
        res.status(404).json({msg: "No such workout found"})
    }
    res.status(200).json({msg:workout})
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}