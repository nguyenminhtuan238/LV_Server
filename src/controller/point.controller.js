const db=require('../config/setup')
exports.Addpoint=async (req,res)=>{
    try {
        const {ID_M,ID_HS,ID_GD,DiemThi}=req.body
            const Insert= await db.setup(
                "INSERT INTO diem (ID_M,ID_HS,ID_GD,DiemThi) VALUES (?,?,?,?);",[ID_M,ID_HS,ID_GD,DiemThi])
            return  res.json({Insert:Insert,message:"them thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updatepoint=async (req,res)=>{
    try {

        const {DiemThi}=req.body
        
        const update= await db.setup(
            "UPDATE diem SET DiemThi=? WHERE ID_D=?",[DiemThi,req.params.id])
        return  res.json({update:update,message:"sua Diem thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


exports.deletepoint=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM Diem WHERE ID_D=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getpointid=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM diem  WHERE ID_D=? `,[req.params.point])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getpoint=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM diem `,[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}