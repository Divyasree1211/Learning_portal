const joi=require('joi')
const mongoose=require('mongoose')

const {categorySchema}= require('../models/categoriesmodel')

const Course= mongoose.model('Course',new mongoose.Schema({
    title :{
        type:String,
        required:true,
        trin:true,
        minlength:5,
        maxlength:255
    },
    category:{
        type :categorySchema,
        required:true

    },
    creator: {
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
}))
    
function validateCourse(course){
    const schema=joi.object({
        title:joi.string().min(5).max(255).required(),
        category:joi.string().required(),
        creator:joi.string().min(5).required(),
        rating:joi.number().min(0).required()
    })
    return schema.validate(course)
}

exports.Course=Course
exports.validate=validateCourse