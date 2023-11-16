const db=require('../config/setup')
exports.Addtest=async (req,res)=>{
    try {
        const {ID_KT,ID_HS,Solan,End_Exam}=req.body
        const formattedStart = End_Exam.slice(0, -1)

            const Insert= await db.setup(
                "INSERT INTO baithi (ID_KT,ID_HS,Solan,End_Exam) VALUES (?,?,?,?);",[ID_KT,ID_HS,Solan,formattedStart])
            return  res.json({Insert:Insert,message:"them thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updatetest=async (req,res)=>{
    try {

        const {Diem,End_Exam,Start_Exam}=req.body
        const formattedStart = Start_Exam.slice(0, -1)
        const formattedEnd = End_Exam.slice(0, -1)
        const update= await db.setup(
            "UPDATE baithi SET Diem=?,Start_Exam=?,End_Exam=? WHERE ID_BT=?",[Diem,formattedStart,formattedEnd,req.params.id])
        return  res.json({update:update,message:"sua Diem thanh cong"})
     
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}


exports.deletetest=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM baithi WHERE ID_BT=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.deleteKTtest=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM baithi  WHERE ID_KT=? `,[req.params.id])
        if(get.length>0){
            for(let i=0;i<=get.length;i++){
                try {
                    const check= await db.setup(
                        `SELECT * FROM dapan_hs  WHERE ID_BT=? `,[get[i].ID_BT])
                    if(check.length>0){
                        await db.setup(
                            "DELETE FROM dapan_hs WHERE ID_BT=?",[get[i].ID_BT])
                    }
                   
                } catch (error) {
                }
              
            }
          
        }
        const Delete= await db.setup(
            "DELETE FROM baithi WHERE ID_KT=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.gettestexam=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT Ten AS "Họ và Tên",ID_HS AS "Mã Số Học Sinh" ,ROUND(diem,2) AS "Điểm Số" ,Solan As "Số Lần Thi",Start_Exam AS "Thời Gian Bắt đầu" ,End_Exam AS "Thời Gian Kết Thúc" FROM baithi INNER JOIN users ON users.ID_users=baithi.ID_HS WHERE ID_KT=? `,[req.params.id])
        const getMax=await db.setup(
            `SELECT Ten AS "Họ và Tên",ID_HS AS "Mã Số Học Sinh" ,MAX( ROUND(diem,2)) AS "Điểm Số" ,Start_Exam AS "Thời Gian Bắt đầu" ,End_Exam AS "Thời Gian Kết Thúc" FROM baithi INNER JOIN users ON users.ID_users=baithi.ID_HS WHERE ID_KT=? GROUP BY ID_HS `,[req.params.id])
            return  res.json({get:get,getMax,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getbytest=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM baithi  WHERE ID_BT=? `,[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getbyid=async (req,res)=>{
    try {
        const {ID_KT,ID_HS}=req.body
        const get= await db.setup(
            `SELECT * FROM baithi  WHERE ID_KT=? AND ID_HS=? `,[ID_KT,ID_HS])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

