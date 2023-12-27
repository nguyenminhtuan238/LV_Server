const db=require('../config/setup')
exports.AddClass=async (req,res)=>{
    try {
        const {ID_GD,Ten_Lop,password}=req.body
        const rows=await db.setup('SELECT * FROM `lop` WHERE `Ten_Lop`=? ',[Ten_Lop])
        if(rows.length===0){
            const Insert= await db.setup(
                "INSERT INTO lop (ID_GD,Ten_Lop,password) VALUES (?,?,?);",[ID_GD,Ten_Lop,password])
            return  res.json({Insert:Insert,message:"them thanh cong"})
            }else{
                return res.status(403).json({ success: false, message: "Tên Lớp Đã Tồn tại" })
            }
      
  
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateclass=async (req,res)=>{
    try {

        const {Ten_Lop,password}=req.body
        const rows=await db.setup('SELECT * FROM `lop` WHERE `Ten_Lop`=? ',[Ten_Lop])
        if(rows.length===0 ){      
        const update= await db.setup(
            "UPDATE lop SET Ten_Lop=?,password=? WHERE ID_L=?",[Ten_Lop,password,req.params.id])
        return  res.json({update:update,message:"sua lop thanh cong"})
    }else{
        return res.status(403).json({ success: false, message: "Tên Lớp Đã Tồn tại" })
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deleteclass=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM lop WHERE ID_L=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getclassALL=async (req,res)=>{
    try {
        const {page}=req.body
        const sizepage=3
        const skippage=(page-1)*sizepage
        if(page===undefined){
           
            const get= await db.setup(
                `SELECT * FROM lop `,[])
            return  res.json({get:get,message:"tim thanh cong"})
        }else{
            const getALL=await db.setup(
                `SELECT * FROM lop  `,[])
            const get= await db.setup(
                `SELECT * FROM lop  LIMIT ${sizepage} OFFSET ${skippage} `,[])
            return  res.json({get:get,page:Math.ceil(getALL.length/sizepage),message:"tim thanh cong"})
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.searchclass=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM lop  WHERE Ten_Lop=? `,[req.params.tenlop])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetIDClass=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM lop  WHERE ID_L=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetClassTeacher=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM lop  WHERE ID_GD=? `,[req.iduser.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.SearchClassTen=async (req,res)=>{
    try {   
        const {Search}=req.body
        const get= await db.setup(
            `SELECT * FROM lop  WHERE Ten_Lop LIKE '${Search+"%"}' `,[Search])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
