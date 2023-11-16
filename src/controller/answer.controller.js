const db=require('../config/setup')
exports.Addanswer=async (req,res)=>{
    try {
        const {Noidung,Ketqua,ID_CH,Diem}=req.body
      
            const Insert= await db.setup(
                "INSERT INTO dapan (Noidung,ID_CH,Ketqua,Diem) VALUES (?,?,?,?);",[Noidung,ID_CH,Ketqua,Diem])
            return  res.json({Insert:Insert,message:"them thanh cong"})
         
      
  
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updatecontent=async (req,res)=>{
    try {

        const {Noidung,Ketqua,Diem}=req.body
        const update= await db.setup(
            "UPDATE dapan SET Noidung=?,Ketqua=?,Diem=? WHERE ID_DA=?",[Noidung,Ketqua,Diem,req.params.id])
        return  res.json({update:update,message:"sua noi dung thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateresult=async (req,res)=>{
    try {

        const {Ketqua}=req.body
        
        const update= await db.setup(
            "UPDATE dapan SET Ketqua=? WHERE ID_DA=?",[Ketqua,req.params.id])
        return  res.json({update:update,message:"sua ket qua thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.deleteanswer=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM dapan WHERE ID_DA=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deleteQanswer=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM dapan WHERE ID_CH=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getanswer=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM dapan  WHERE ID_CH=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getIDanswer=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM dapan  WHERE ID_DA=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.getALLanswer=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM dapan `,[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
