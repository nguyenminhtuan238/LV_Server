const e = require('express')
const db=require('../config/setup')
exports.Addexam=async (req,res)=>{
    try {
        const {ID_M,ID_L,ID_GD,Start,End,Ten_KT,solan,sophut}=req.body
        const formattedStart = Start.slice(0, -1)
        const formattedEnd = End.slice(0, -1)
            const Insert= await db.setup(
                "INSERT INTO kythi (ID_M,ID_L,ID_GD,Start_Time,End_Time,Ten_KT,SoPhut,solan) VALUES (?,?,?,?,?,?,?,?);",[ID_M,ID_L,ID_GD,formattedStart,formattedEnd,Ten_KT,sophut,solan])
            return  res.json({Insert:Insert,message:"them thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateStatustongch=async (req,res)=>{
    try {

        const {TongCH,Status}=req.body   
        if(TongCH===undefined){
            const update= await db.setup(
                "UPDATE kythi SET Status=? WHERE ID_KT=?",[Status,req.params.id])
            return  res.json({update:update,message:"sua Kỳ thi thanh cong"})
        }
        if(Status===undefined){
            const update= await db.setup(
                "UPDATE kythi SET TongCH=? WHERE ID_KT=?",[TongCH,req.params.id])
            return  res.json({update:update,message:"sua Kỳ thi thanh cong"})
        }
        else{
            const update= await db.setup(
                "UPDATE kythi SET TongCH=?,Status=? WHERE ID_KT=?",[TongCH,Status,req.params.id])
            return  res.json({update:update,message:"sua Kỳ thi thanh cong"})
        }
      
 
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.updateexam=async (req,res)=>{
    try {

        const {ID_M,ID_L,Start,End,Ten_KT,solan,sophut}=req.body
        const formattedStart = Start.slice(0, -1)
        const formattedEnd = End.slice(0, -1)     
            const update= await db.setup(
                "UPDATE kythi SET ID_M=?,ID_L=?,Start_Time=?,End_Time=?,Ten_KT=?,solan=?,sophut=? WHERE ID_KT=?",[ID_M,ID_L,formattedStart,formattedEnd,Ten_KT,solan,sophut,req.params.id])
            return  res.json({update:update,message:"sua Kỳ thi thanh cong"})
        
      
 
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}

exports.deleteexam=async (req,res)=>{
    try {
       
        const Delete= await db.setup(
            "DELETE FROM kythi WHERE ID_KT=?",[req.params.id])
        return  res.json({Delete:Delete,message:"xoa thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getexam=async (req,res)=>{
    try {
        
        const get= await db.setup(
            `SELECT * FROM kythi  WHERE ID_KT=? `,[req.params.exam])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getexambyclass=async (req,res)=>{
    try {
        const get= await db.setup(
            'SELECT * FROM kythi  WHERE ID_L=? ',[req.params.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
       
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getexambyteacher=async (req,res)=>{
    try {
        const get= await db.setup(
            `SELECT * FROM kythi  WHERE ID_GD=? `,[req.iduser.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
