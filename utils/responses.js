module.exports.errorResponse = (res,err)=>{
    res.status(500).send({
        status:false,
        message:"Internal server error",
        error:err
    })
}

module.exports.succeessResponse = (res,body)=>{
    res.status(200).send({
        status:true,
        body:body,
    })
}

