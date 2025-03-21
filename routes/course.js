function createCourseRoutes(app){
    app.post("/courses/purchase",(req,res)=>{
        res.json({message: "chal gaya route...."})
    })
    app.get("/courses/preview",(req,res)=>{
        res.json({message: "chal gaya route...."})
    })
}

module.exports ={
    createCourseRoutes: createCourseRoutes
} 