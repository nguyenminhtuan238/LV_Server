const db=require('../config/setup')
exports.AddlistNH=async (req,res)=>{
    try {
        const {ID_CH,ID_NH}=req.body
        const get= await db.setup(
            `SELECT * FROM danhsach_ng  WHERE ID_NH=? AND ID_CH=? `,[ID_NH,ID_CH])
            if(get.length===0){
            const Insert= await db.setup(
                "INSERT INTO danhsach_ng (ID_CH,ID_NH) VALUES (?,?);",[ID_CH,ID_NH])
            return  res.json({Insert:Insert,message:"them thanh cong"})
            }else{
                return  res.status(421).json({success:false,message:"Câu Hỏi Đã Tồn Tại"})
            }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
// exports.updateNH=async (req,res)=>{
//     try {

//         const {ID_CH}=req.body
        
//         const update= await db.setup(
//             "UPDATE danhsach_ch SET ID_CH=? WHERE ID_DSCH=?",[ID_CH,req.params.id])
//         return  res.json({update:update,message:"sua Diem thanh cong"})
     
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({success:false,message:"loi server"})
//     }
// }


exports.deletelistNH=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM danhsach_ng WHERE ID_DSNG=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
// exports.deletelistNH=async (req,res)=>{
//     try {
       
//         const Delete= await db.setup(
//             "DELETE FROM danhsach_ng WHERE ID_NH=?",[req.params.id])
//         return  res.json({Delete:Delete,message:"xoa thanh cong"})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({success:false,message:"loi server"})
//     }
// }
exports.getNH=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM danhsach_ng  WHERE ID_NH=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


