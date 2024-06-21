const express = require("express")
const LoginModel = require("../models/LoginModel")
const router = express.Router()

router.get("/", async (req, res)=>{
    
    res.status(200).json({message:"202"})
    
})
router.get("/data/fetch", async (req, res)=>{
    const Data = await LoginModel.find()
    res.status(200).json({UserLogin: Data})
    
})
router.post("/", async(req, res)=>{
    const {email, password}= req.body
    
    if(email){
    
    const NewLogin = LoginModel(req.body)
    await NewLogin.save()
    return res.status(201).json({message:"CREATED 201"})
    }
    else{
      return res.status(404).json({message:"NOT  CREATED"})
    }
})

module.exports = router;