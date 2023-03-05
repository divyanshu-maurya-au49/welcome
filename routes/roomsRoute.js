const express = require("express");
const router = express.Router();
const bodyparser = require('body-parser')
const path = require('path')
const booking=require("../models/booking")
const Room = require('../models/room')
const Details=require("../models/booking")

router.get("/getallrooms",async(req, res)=>{
    try{
        const rooms = await Room.find({})
        res.send(rooms)
    }catch(error){
        return res.status(400).json({message:error});
    }

   
});

router.post("/getroombyid",async(req, res)=>{

    const roomid = req.body.roomid

    try{
        const room = await Room.findOne({_id : roomid})
        res.send(room)
    }catch(error){
        return res.status(400).json({message:error});
    }
});

router.get("/bookdetails",async(req, res)=>{


    const email = req.body.email

    try{
        const data = await Details.find({email:"1266maurya@gmail.com"})
        data?res.send(data):res.send("Not found")
    }catch(error){
        return res.send(error);
    }
});




router.get("/adminpannel", async (req, res) => {
  let data = await Details.find({});
  return res.status(200).json({ success: true, message: data });
});


router.post("/booking", async (req, res) => {
    const {
        email,
        hotelname ,
        phonenumber,
        rentperday,
        type,
        description
    } = req.body;
  
    
    try {
      const order = new booking({
        email,
        hotelname ,
        phonenumber,
        rentperday,
        type,
        description
      });
      await order.save();
    //   console.log(x);
      return res.status(200).json({ message: "booking success" });
    } catch (err) {
      console.log(err);
    }
  });
router.post('/createOrder', (req, res)=>{ 
  
    // STEP 1:
    const {amount,currency,receipt, notes}  = req.body;      
          
    // STEP 2:    
    razorpayInstance.orders.create({amount, currency, receipt, notes}, 
        (err, order)=>{
          
          //STEP 3 & 4: 
          if(!err)
            res.json(order)
          else
            res.send(err);
        }
    )
});


module.exports = router;