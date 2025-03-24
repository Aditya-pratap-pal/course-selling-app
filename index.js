


import express, { json } from 'express';
import { connect } from 'mongoose';

import { userRouter } from './routes/user.js';
import { courseRouter } from './routes/course.js';
import { adminRouter } from './routes/admin.js';

const app = express();
app.use(json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    try {
        await connect("mongodb+srv://pratappaladitya:pratappaladitya@cluster0.ixx2k.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB connected successfully!");

        app.listen(3000, () => {
            console.log("🚀 Server listening on port 3000");
        });
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
    }
}

main();
// import express, { json } from 'express'
// import { connect } from 'mongoose'
// // const jwt = require('jsonwebtoken')

// import { userRouter } from './routes/user.js'
// import { courseRouter } from './routes/course.js'
// import { adminRouter } from './routes/admin'


// const app = express();
// app.use(json());
// app.use("/api/v1/user",userRouter);
// app.use("/api/v1/course",courseRouter);

// // createUserRoutes(app);
// // createCourseRoutes(app);  
// async function main(){
//     await connect("mongodb+srv://pratappaladitya:pratappaladitya@cluster0.ixx2k.mongodb.net/");
//     app.listen(3000);
//     console.log("listning on port 3000");
// }
// main();
// //server activate..



