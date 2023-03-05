const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hotelname : {
        type: String,
        required: true
    },
   
    phonenumber : {
        type: Number,
        required: true
    },
    rentperday : {
        type: Number,
        required: true
    },
    
    type: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
},{
    timestamps : true,
})

const bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel