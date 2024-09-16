const mongoose = require('mongoose')


const employeeSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
   phno: {
        
            type:String,
        
    },
    designation:{
             type:String
    },
    gender:{
          type:String
    },
    course:{
          type:String
    },
    image:{
        type:String
    }
})

const employee = mongoose.model('employeedetails', employeeSchema);
module.exports = employee;