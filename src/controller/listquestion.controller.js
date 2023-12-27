const db=require('../config/setup')
exports.AddlistQ=async (req,res)=>{
    try {
        const {ID_CH,ID_KT}=req.body
        const get= await db.setup(
            `SELECT * FROM danhsach_ch  WHERE ID_KT=? AND ID_CH=? `,[ID_KT,ID_CH])
            if(get.length===0){
            const Insert= await db.setup(
                "INSERT INTO danhsach_ch (ID_CH,ID_KT) VALUES (?,?);",[ID_CH,ID_KT])
            return  res.json({Insert:Insert,message:"them thanh cong"})
            }else{
                return  res.status(421).json({success:false,message:"Câu Hỏi Đã Tồn Tại"})
            }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateCH=async (req,res)=>{
    try {

        const {ID_CH}=req.body
        
        const update= await db.setup(
            "UPDATE danhsach_ch SET ID_CH=? WHERE ID_DSCH=?",[ID_CH,req.params.id])
        return  res.json({update:update,message:"sua Diem thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


exports.deleteCH=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM danhsach_ch WHERE ID_DSCH=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deleteKT=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM danhsach_ch WHERE ID_KT=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getKT=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT distinct danhsach_ch.ID_CH,ID_DSCH,ID_KT,cauhoi.Noidung,cauhoi.Diem FROM danhsach_ch  INNER JOIN cauhoi ON cauhoi.ID_CH=danhsach_ch.ID_CH  WHERE ID_KT=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getpage=async (req,res)=>{
    try {
        const {page}=req.body
        const sizepage=5
        const skippage=(page-1)*sizepage
        const get= await db.setup(
            `SELECT distinct danhsach_ch.ID_CH,ID_DSCH,ID_KT,cauhoi.Noidung,cauhoi.Diem,cauhoi.HinhThuc,cauhoi.Hinh FROM danhsach_ch  INNER JOIN cauhoi ON cauhoi.ID_CH=danhsach_ch.ID_CH WHERE ID_KT=? LIMIT ${sizepage} OFFSET ${skippage}`,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

