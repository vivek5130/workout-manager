require('dotenv').config()
const express = require('express')
const app = express()
//mongoose is used for object data modeling
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


const port = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL


//middlewar to look for body, parses it so that it is available to request body object of route handlers
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
// app.get('/',(req,res)=>{
//     res.json({msg: "Display message"})
// })

//Routes
//changed
app.use(`/api/workouts`,workoutRoutes)
//Connecting to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen to request only after connection to database is established
    app.listen(port,()=>{
        console.log("Listening at: ",port)
    })
})
.catch((err)=>{
    console.log(err)
})


