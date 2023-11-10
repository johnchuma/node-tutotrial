const express = require('express')
const bodyParser = require("body-parser");
const UserRoutes = require("./modules/user/user.routes")
const CourseRoutes = require("./modules/course/course.routes")

const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(bodyParser.text({ type: "/" }));
app.use("/user",UserRoutes)
app.use("/course",CourseRoutes)



// app.get('/',(req,res)=>{
//     res.send("Anza marketplace API's are okay!")
// })
app.listen(8000,()=>{
  console.log("Server started at port 8000")
})