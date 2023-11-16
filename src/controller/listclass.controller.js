const db=require('../config/setup')
exports.AddlistClass=async (req,res)=>{
    try {
        const {password,ID_HS,ID_L}=req.body
        
        const rows= password!==''? await db.setup('SELECT * FROM `lop` WHERE `password`=? AND `ID_L`=? ',[password,ID_L])
                            :await db.setup('SELECT * FROM `lop` WHERE `password` IS NULL  AND `ID_L`=? ',[ID_L])
        if(rows.length!==0){
            const Insert= await db.setup(
                "INSERT INTO lop_hs (ID_HS,ID_L) VALUES (?,?);",[ID_HS,ID_L])
            return  res.json({Insert:Insert,message:"them thanh cong"})
         }else{
                return res.status(403).json({ success: false, message: "Sai Mật Khẩu" })
        }
      
  
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
// exports.updateclass=async (req,res)=>{
//     try {

//         const {Ten_Lop,password}=req.body
//         const rows=await db.setup('SELECT * FROM `lop` WHERE `Ten_Lop`=? ',[Ten_Lop])
//         if(rows.length===0 ){      
//         const update= await db.setup(
//             "UPDATE lop SET Ten_Lop=?,password=? WHERE ID_L=?",[Ten_Lop,password,req.params.id])
//         return  res.json({update:update,message:"sua lop thanh cong"})
//     }else{
//         return res.status(403).json({ success: false, message: "Tên Lớp Đã Tồn tại" })
//     }
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({success:false,message:"loi server"})
//     }
// }
exports.deletelistclass=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM lop_hs WHERE ID_L=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deletelistclassID=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM lop_hs WHERE ID_LHS=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.GetIDlistClass=async (req,res)=>{
    try {
        const {ID_HS,ID_L}=req.body
        const get= await db.setup(
            `SELECT * FROM lop_hs   WHERE ID_HS=? AND ID_L=? `,[ID_HS,ID_L])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetIDclasslistClass=async (req,res)=>{
    try {
        const {ID_L}=req.body
        const get= await db.setup(
            `SELECT * FROM lop_hs   WHERE ID_L=? `,[ID_L])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetIDHSclasslistClass=async (req,res)=>{
    try {
        const {ID_HS}=req.body
        const get= await db.setup(
            `SELECT * FROM lop_hs  WHERE ID_HS=? `,[ID_HS])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetlistClassStudent=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM lop_hs  WHERE ID_HS=? `,[req.iduser.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

