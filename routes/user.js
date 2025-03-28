import { Router } from 'express';
import { userModel } from '../db.js';
import jwt from 'jsonwebtoken';
const jwtUserPassword = "aladid123";
// const jwt = require('jsonwebtoken');
const userRouter = Router();

userRouter.post("/signup", async function(req, res){
    const {email,password,firstName,lastName} = req.body;   
    //hash the password so that plaintext password is not stored in the database...
    try{
        await userModel.create({
            email,
            password,
            firstName,
            lastName
        });
    }
    catch{
        res.json({error:"error in hashing password"});
    }
    res.json({ message: "signup done....." });
});

userRouter.post("/signin",async function(req, res){
    const{email,password} = req.body;
    const user= await userModel.find({
         email: email, 
         password: password 
    });
    if(user){
        const token = jwt.sign({

        })
    }
    res.json({ message: "signin done....." });
});

userRouter.get("/purchases", (req, res) => {
    res.json({ message: "purchase data....." });
});

export { userRouter };







// // const express = require('express');
// // const Router = express.Router
// // alternative of above code.......
// const {Router} = require('express')

// const userRouter = Router();
// // function createUserRoutes(app){
//     //<............after using userRouter I don't have need to use or paas app any more from one to another function.......>
//     userRouter.post("/user/signup",(req,res)=>{
//         res.json({message:"signup done....."})
//     })
//     userRouter.post("/user/signin",(req,res)=>{
//         res.json({message:"signup done....."})        
//     })
//     userRouter.get("/user/purchases",(req,res)=>{
//         res.json({message:"signup done....."})    
//     })
// // }

// module.exports = {
//     userRouter: userRouter
// }


