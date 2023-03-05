const mongoose = require('mongoose');

const userScheema = mongoose.Schema({

    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        default: false
    }
},{
    timestamps : true,
})

const userModel = mongoose.model('users', userScheema)

module.exports = userModel