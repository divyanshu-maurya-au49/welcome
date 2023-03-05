const express = require("express");

const app = express();

const dbConfig = require('./db')

const Razorpay = require('razorpay'); 

const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())

const razorpayInstance = new Razorpay({
  
    // Replace with your key_id
    key_id: "rzp_test_YALjfhgOpU5BpG",
  
    // Replace with your key_secret
    key_secret: "0Bxpz64xfgzHK0xaaoFbSYOP"
});

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)

const port = process.env.PORT || 5000;

app.listen(port,() => console.log('node server started'));