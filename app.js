const express=require('express')
const app=express()
const mongoose=require('mongoose')
const categories=require('./Routes/categories')
const students=require('./Routes/students')
const courses=require('./Routes/courses')

mongoose.connect('mongodb://127.0.0.1/LearningPlatform')
.then(()=>{
    console.log('MongoDB connected successfully')
})
.catch((err)=>{
    console.error('could not connect to MongoDB',err)
})


app.use(express.json())
app.use('/api/categories',categories)
app.use('/api/students',students)
app.use('/api/courses',courses)

const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})
