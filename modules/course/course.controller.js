
const {Course} = require("../../models")

const  createCourse = async(req,res)=>{
  try {
    const {name} = req.body;
    const response = await  Course.create({
      name
    })
     
    res.status(200).json({status:true,body:response})
  
  } catch (error) {
    res.status(500).send({
        status:false,
        message:"Internal server error"
    })
  }
}


module.exports = {createCourse}
