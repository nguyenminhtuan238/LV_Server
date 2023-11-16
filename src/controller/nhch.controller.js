const db=require('../config/setup')
exports.AddNHCH=async (req,res)=>{
    try {
        const {Ten_NG,SoCH,ID_GD,CheDo,ID_M}=req.body
      
            const Insert= await db.setup(
                "INSERT INTO nh_ch (Ten_NG,SoCH,ID_GD,CheDo,ID_M) VALUES (?,?,?,?,?);",[Ten_NG,SoCH,ID_GD,CheDo,ID_M])
            return  res.json({Insert:Insert,message:"them thanh cong"})
         
      
  
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.update=async (req,res)=>{
    try {

        const {Ten_NG,SoCH,CheDo,ID_M}=req.body
        const update= await db.setup(
            "UPDATE nh_ch SET Ten_NG=?,SoCH=?,CheDo=?,ID_M=? WHERE ID_NH=?",[Ten_NG,SoCH,CheDo,ID_M,req.params.id])
        return  res.json({update:update,message:"sua noi dung thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.deletebyid=async (req,res)=>{
    try {
        await db.setup(
            "DELETE FROM danhsach_ng WHERE ID_NH=?",[req.params.id])
        const Delete= await db.setup(
            "DELETE FROM nh_ch WHERE ID_NH=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.getbyid=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM nh_ch  WHERE ID_NH=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


exports.getALL=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM nh_ch `,[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
