
const {User,Course} = require("../../models")
const bcrypt = require("bcrypt")
const { errorResponse, succeessResponse } = require("../../utils/responses")
const createUser = async(req,res)=>{
    try {
        const {name,email,password,course_uuid} = req.body

        const enc_password = bcrypt.hashSync(password,10)
        const course = await Course.findOne({
                where:{
                    uuid:course_uuid
                }
                });
        const user = await User.create({
            courseId:course.id,
            name,
            email,
            password:enc_password
        })
        succeessResponse(res,user)
    } catch (error) {
        errorResponse(res,error)
    }
   
}


const getUserDetails =async (req,res)=>{
  try {
     const {uuid} = req.params;
     const user = await User.findOne({

        where:{
            uuid
        },
        attributes:{
            exclude:["id","CourseId","courseId"]
        },
        include:[{
            model:Course,
            attributes:{
                exclude:["id"]
            }
        }]
     })
    succeessResponse(res,user)
  } catch (error) {
    errorResponse(res,error)
  }
}


module.exports = {createUser,getUserDetails}