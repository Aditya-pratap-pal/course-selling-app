// const {Router} = require('express')
// const courseRouter = Router();

// // function createCourseRoutes(courseRouter){
//     courseRouter.post("/purchase",(req,res)=>{
//         res.json({message: "chal gaya route...."})
//     })
//     courseRouter.post("/purchase",(req,res)=>{
//         res.json({message: "chal gaya route...."})
//     })
//     courseRouter.get("/preview",(req,res)=>{
//         res.json({message: "chal gaya route...."})
//     })
// // }

// module.exports = {
//     courseRouter: courseRouter 
// } 
// //want to push



import { Router } from 'express';

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.json({ message: "chal gaya route...." });
});

courseRouter.get("/preview", (req, res) => {
    res.json({ message: "chal gaya route...." });
});

export { courseRouter };
