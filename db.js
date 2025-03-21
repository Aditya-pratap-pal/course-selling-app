// const mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://Aditya:mongoDb@098@cluster0.xoim4.mongodb.net/course-selling-app")
// const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

// const userSchema = new Schema({
//     email: {type:String,unique:true},
//     password: {type:String},
//     firstName: String,
//     lastName: String
// })

// const adminSchema = new Schema({
//     email: {type:String,unique:true},
//     password: {type:String},
//     firstName: String,
//     lastName: String
// })

// const courseSchema = new Schema({
//     title:String,
//     description:String,
//     price:Number,
//     imgUrl:String,
//     creatorId:ObjectId,
// })
// const purchaseSchema = new Schema({
//     courseId:ObjectId,
//     userId:ObjectId,
// })

// const userModel = mongoose.model("user",userSchema);
// const adminModel = mongoose.model("user",adminSchema);
// const courseModel = mongoose.model("user",courseSchema);
// const purchaseModel = mongoose.model("user",purchaseSchema);

// module.exports = {
//     userModel,
//     adminModel,
//     courseModel,
//     purchaseModel
// }


import mongoose from 'mongoose';

await mongoose.connect("mongodb+srv://pratappaladitya:pratappaladitya@cluster0.ixx2k.mongodb.net/");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String },
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imgUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    courseId: ObjectId,
    userId: ObjectId
});

// ✅ Fixed incorrect model names
const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);

export {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
