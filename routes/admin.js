

import { Router } from 'express';
import { adminModel } from '../db.js';

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint"
    });
});

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint"
    });
});

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "Course creation endpoint"
    });z
});

adminRouter.post("/course/bulk", function (req, res) {
    res.json({
        message: "Bulk course creation endpoint"
    });
});

export { adminRouter };
// const {Router} = require('express');
// const adminRouter = Router();
// const {adminModel} =require("../db");

// adminModel.post("/signup",function(req,res){
//     res.json({
//         message: "Signup endpoint"
//     })
// })
// adminModel.post("/signin",function(req,res){
//     res.json({
//         message: "Signup endpoint"
//     })
// })
// adminModel.post("/course",function(req,res){
//     res.json({
//         message: "Signup endpoint"
//     })
// })
// adminModel.post("/course/bulk",function(req,res){
//     res.json({
//         message: "Signup endpoint"
//     })
// })

