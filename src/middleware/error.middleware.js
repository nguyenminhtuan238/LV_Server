exports.error=(req,res,next)=>{
    return res.status(502).json({message:"Resource not found"})
}