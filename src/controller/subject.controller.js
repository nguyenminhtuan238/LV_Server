const db=require('../config/setup')
exports.Addsubject=async (req,res)=>{
    try {
        const {Ten_Mon}=req.body
        const findmon=await db.setup("SELECT * fROM mon WHERE Ten_Mon=?",[Ten_Mon])
        if(findmon.length===0){
      const Insert= await db.setup(
          "INSERT INTO mon (Ten_Mon) VALUES (?);",[Ten_Mon])
      return  res.json({Insert:Insert,message:"them thanh cong"})
    }else{
        return res.json({success:false,message:"Da Ton tai"})
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updatesubject=async (req,res)=>{
    try {

        const {Ten_Mon}=req.body
        const findmon=await db.setup("SELECT * fROM mon WHERE Ten_Mon=?",[Ten_Mon])
        if(findmon.length===0){
        const update= await db.setup(
            "UPDATE mon SET Ten_Mon=? WHERE ID_M=?",[Ten_Mon,req.params.id])
        return  res.json({update:update,message:"sua thanh cong"})
        }else{
            return res.json({success:false,message:"không được trùng"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deletesubject=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM mon WHERE ID_M=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.Searchsubject=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM mon  WHERE Ten_Mon LIKE '${req.params.subject+"%"}'`,[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetALLsubject=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM mon `,[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.GetIDsubject=async (req,res)=>{
    try {
        
        const get= await db.setup(
            "SELECT * FROM mon WHERE ID_M=? ",[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
