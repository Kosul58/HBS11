const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    category:{
        type:String,
        required: [true, 'Username cannot be blank' ]
    },
    type:{
        type:String,
        required: [true, 'Email cannot be blank' ]
    },
    price:{
        type:Number,
        required: [true, 'Password cannot be blank' ]
    },
})


module.exports = mongoose.model('Roomprice' , priceSchema);



