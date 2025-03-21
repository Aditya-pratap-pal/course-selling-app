// const express = require('express');
// const Router = express.Router
// alternative of above code....
const {Router} = require('express')

const userRouter = Router();
// function createUserRoutes(app){
    //<............after using userRouter I don't have need to use or paas app any more from one to another function.......>
    userRouter.post("/user/signup",(req,res)=>{
        res.json({message:"signup done....."})
    })
    userRouter.post("/user/signin",(req,res)=>{
        res.json({message:"signup done....."})        
    })
    userRouter.get("/user/purchases",(req,res)=>{
        res.json({message:"signup done....."})    
    })
// }

module.exports = {
    userRouter: userRouter
}