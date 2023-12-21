const express = require('express')
const router = express.Router()
//importing workout model 
// const Workout = require('../models/workoutmodel')
//importing controller to add functionality in readable format
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')


//Get all workouts
router.get('/',getWorkouts)
//get single workout
router.get('/:id',getWorkout)
//post new workout
router.post('/',createWorkout)
//delete workout
router.delete('/:id',deleteWorkout)
//update
router.patch('/:id',updateWorkout)
module.exports = router