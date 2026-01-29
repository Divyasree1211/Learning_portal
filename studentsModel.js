const mongoose=require('mongoose')

const Joi=require('joi')  //package joi is used for validation

const studentSchema=new mongoose.Schema({
    name: {type:String, required:true, minlength:3, maxlength:30},
    isEnrolled:{type:Boolean, default: false},
    Phone:{type:String, required:true, minlength:10, maxlength:25}


});


const Student =mongoose.model('Student',studentSchema);

function validateData(student) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        Phone: Joi.string().min(10).max(25).required(),
        isEnrolled: Joi.boolean()
    });

    return schema.validate(student);
}


exports.Student=Student
exports.studentSchema=studentSchema
exports.validate=validateData;