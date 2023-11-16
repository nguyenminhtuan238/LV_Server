const jwt=require("jsonwebtoken")
const accessTeachertoken=async (req,res,next)=>{
    const authHeader=req.header('Authorization')
    const token=authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.status(405).json({success:false,message:"Access token not found"})
    }
    try {
        jwt.verify(token,process.env.PasswordTOKEn,(err,data)=>{
            if(err){
              return  res.status(410).json({success:false,message:"Token has expired"})
            }else{
                if(data.role===2){
                    req.iduser=data
                    next()
                }else{
                    return res.status(415).json({success:false,message:"Not Teacher"})
                }
               
            }
        })
      
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"internal server error"})
    }
}

module.exports={accessTeachertoken}