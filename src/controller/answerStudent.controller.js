const db=require('../config/setup')
exports.AddanswerSt=async (req,res)=>{
    try {
        const {ID_HS,ID_BT,ID_DA,ID_CH,NoiDung}=req.body
      
        const Insert= await db.setup(
                "INSERT INTO dapan_hs (ID_HS,ID_BT,ID_DA,ID_CH,NoiDung) VALUES (?,?,?,?,?);",[ID_HS,ID_BT,ID_DA,ID_CH,NoiDung])
      
            return  res.json({Insert:Insert,message:"them thanh cong"})
         
          
  
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateanswerSt=async (req,res)=>{
    try {

        const {ID_DA,NoiDung}=req.body
        const update=  await db.setup(
            "UPDATE dapan_hs SET ID_DA=?,NoiDung=? WHERE ID_DAHS=?",[ID_DA,NoiDung,req.params.id])

        return  res.json({update:update,message:"sua noi dung thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


exports.deleteanswerSt=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM dapan_hs WHERE ID_DAHS=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.getidanswerSt=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM dapan_hs  WHERE ID_DAHS=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getIDBTanswerSt=async (req,res)=>{
    try {
        const {ID_HS,ID_BT}=req.body
        const get= await db.setup(
            `SELECT * FROM dapan_hs  WHERE ID_BT=? AND ID_HS=?`,[ID_BT,ID_HS])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getResultBT=async (req,res)=>{
    try {
        const {ID_HS}=req.body
        const get= await db.setup(
            `SELECT dapan_hs.ID_BT,ketqua,dapan.ID_CH,dapan.Diem,cauhoi.Diem*dapan.Diem as 'DiemTong' FROM dapan_hs  INNER JOIN dapan ON dapan_hs.ID_DA=dapan.ID_DA iNNER JOIN cauhoi ON cauhoi.ID_CH=dapan_hs.ID_CH WHERE dapan_hs.ID_BT=? AND dapan.Diem!=0 AND ID_HS=?`,[req.params.id,ID_HS])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

