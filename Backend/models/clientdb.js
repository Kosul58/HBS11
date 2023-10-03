const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    clientname:{
        type:String,
        required: [true, 'Username cannot be blank' ]
    },
    email:{
        type:String,
        required: [true, 'Email cannot be blank' ]
    },
    password:{
        type:String,
        required: [true, 'Password cannot be blank' ]
    },
})

module.exports = mongoose.model('User' , userSchema);



