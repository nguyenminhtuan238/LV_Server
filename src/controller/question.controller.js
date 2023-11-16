const db=require('../config/setup')

exports.Addquestion=async (req,res)=>{
    try {
        const {Noidung,ID_M,DoKho,HinhThuc,Diem}=req.body
        const Hinh=req?.file?.filename
      
        // const findmon=await db.setup("SELECT * fROM cauhoi WHERE Noidung=?",[Noidung])
        // if(findmon.length===0){
            if(Hinh===undefined){
                const Insert= await db.setup(
                    "INSERT INTO cauhoi (Noidung,ID_M,DoKho,HinhThuc,Diem) VALUES (?,?,?,?,?);",[Noidung,ID_M,DoKho,HinhThuc,Diem])
                return  res.json({Insert:Insert,message:"them thanh cong"})
            }else{
                const Insert= await db.setup(
                    "INSERT INTO cauhoi (Noidung,Hinh,ID_M,DoKho,HinhThuc,Diem) VALUES (?,?,?,?,?,?);",[Noidung,Hinh,ID_M,DoKho,HinhThuc,Diem])
                return  res.json({Insert:Insert,message:"them thanh cong"})
            }
      
    // }else{
    //     return res.status(403).json({success:false,message:"Câu Hỏi Đã Tồn tại"})
    // }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updatequestion=async (req,res)=>{
    try {

        const {Noidung,DoKho,ID_M,Diem}=req.body
        const Hinh=req?.file?.filename
     
            if(Hinh===undefined){
        const update= await db.setup(
            "UPDATE cauhoi SET Noidung=?,DoKho=?,ID_M=?,Diem=? WHERE ID_CH=?",[Noidung,DoKho,ID_M,Diem,req.params.id])
        return  res.json({update:update,message:"sua thanh cong"})}
        else{
            const update= await db.setup(
                "UPDATE cauhoi SET Noidung=?,Hinh=?,DoKho=?,ID_M=?,Diem=? WHERE ID_CH=?",[Noidung,Hinh,DoKho,ID_M,Diem,req.params.id])
            return  res.json({update:update,message:"sua thanh cong"})
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deletequestion=async (req,res)=>{
    try {
        await db.setup(
            "DELETE FROM danhsach_ch WHERE ID_CH=?",[req.params.id])
            await db.setup(
                "DELETE FROM danhsach_ng WHERE ID_CH=?",[req.params.id])
        const find=await db.setup(
            "SELECT * FROM danhsach_ch WHERE ID_CH=?",[req.params.id])
           
            if(find.length===0){
                 const Delete= await db.setup(
            "DELETE FROM cauhoi WHERE ID_CH=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
            }else{
                res.status(412).json({success:false,message:"Câu Hỏi đã tồn tại trong kỳ thi"})
            }
       
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getquestionsubject=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM cauhoi  WHERE ID_M=? `,[req.params.subject])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getquestionid=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM cauhoi  WHERE ID_CH=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getALLquestionsubject=async (req,res)=>{
    try {
        
        const get= await db.setup(
            "SELECT * FROM cauhoi",[])
        return  res.json({get:get,message:"tim ALL thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.Searchquestionsubject=async (req,res)=>{
    try {
        const {Search,ID_M}=req.body
            const get= await db.setup(
                `SELECT * FROM cauhoi  WHERE ID_M=? AND Noidung LIKE '${Search+"%"}' `,[ID_M])
            return  res.json({get:get,message:"tim kiếm thanh cong"})
        
        
    } catch (error) {
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.Searchquestion=async (req,res)=>{
    try {
        const {Search}=req.body
            const get= await db.setup(
                `SELECT * FROM cauhoi  WHERE  Noidung LIKE '${Search+"%"}' `,[])
            return  res.json({get:get,message:"tim kiếm thanh cong"})
        
        
    } catch (error) {
        res.status(500).json({success:false,message:"loi server"})
    }
}
