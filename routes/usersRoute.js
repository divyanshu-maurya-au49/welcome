const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.post("/register", async (req, res) => {
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newuser.save();

    res.send({ msg: "User Registered Successfully", statuscode: 1 });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// router.post("/login", (req, res)=>{
//     const {email , password} = req.body

//     try{
//         const user = user.findOne({email: email, password: password})
//         if(user){
//             const temp = {
//                 name : user.name,
//                 email: user.email,
//                 isAdmin : user.isAdmin,
//                 _id : user._id,
//             }
//             res.send({data:user,statuscode:1})
//         }
//         else{
//             return res.status(400).json({message: 'login failed'});
//         }
//     } catch(error){
//         return res.status(400).json({error});
//     }
// })

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fill All Feilds" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      if (password !== userLogin.password) {
        res.status(400).json({ message: "Invalid Password" });
      }
      // let token = await setToken(userLogin);
      res.json({ message: "user Sign in successfully",statuscode:1 });
    } else {
      res.status(400).json({ message: "Invalid email" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password} = req.body;
    if (!email || !password ) {
      return res.status(400).json({ error: "Fill All Feilds" });
    }
    const userLogin = await User.findOne({ email: "1266maurya@gmail.com" });
    if (userLogin) {
      if (password !== userLogin.password) {
       
          res.status(400).json({ message: "Invalid Password or not admin" });
        
      }
      res.json({ message: "user Sign in successfully",statuscode:1 });
    } else {
      res.status(400).json({ message: "failed" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/user", async (req, res) => {
  let data = await User.find({ email: "1266maurya@gmail.com" });
  return res.status(200).json({ success: "success", message: data });
});



module.exports = router;
