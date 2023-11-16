const db=require('../config/setup')
const bcrypt = require('bcrypt')
const salt = 10
const jwt = require('jsonwebtoken');
exports.Login=async (req,res)=>{
   try {
    const {username,password}=req.body
    const rows=await db.setup('SELECT * FROM `users` WHERE `Username`=? ',[username])
    if(rows.length!==0){
        const compare = await bcrypt.compare(password, rows[0].Password)
      if(compare){
        const settoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PasswordTOKEn,{expiresIn:"1h"})
        const Refreshtoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PASSWORD_Refreshtoken,{expiresIn:"365d"})
        return  res.json({success:true,settoken,Refreshtoken})
      }else{
        return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
      }
    }else{
        return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
    }
   } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, mess: "Loi Server" })
   }
   
}
exports.LoginAdmin=async (req,res)=>{
    try {
     const {username,password}=req.body
     const rows=await db.setup('SELECT * FROM `users` WHERE `Username`=? ',[username])
     if(rows.length!==0){
         const compare = await bcrypt.compare(password, rows[0].Password)
       if(compare){
           if(rows[0].role===3){
         const settoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PasswordTOKEn,{expiresIn:"1h"})
         const Refreshtoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PASSWORD_Refreshtoken,{expiresIn:"365d"})
         return  res.json({success:true,settoken,Refreshtoken})
           }else{
               return res.status(406).json({success:false,message:"username và password Không chính xác"})
           }
       }else{
         return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
       }
     }else{
         return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
     }
    } catch (error) {
     console.log(error)
     return res.status(500).json({ success: false, mess: "Loi Server" })
    }
    
 }
 exports.LoginTeacher=async (req,res)=>{
    try {
     const {username,password}=req.body
     const rows=await db.setup('SELECT * FROM `users` WHERE `Username`=? ',[username])
     if(rows.length!==0){
         const compare = await bcrypt.compare(password, rows[0].Password)
       if(compare){
           if(rows[0].role===2){
         const settoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PasswordTOKEn,{expiresIn:"1h"})
         const Refreshtoken=jwt.sign({id:rows[0].ID_users,role:rows[0].role},process.env.PASSWORD_Refreshtoken,{expiresIn:"365d"})
         return  res.json({success:true,settoken,Refreshtoken})
           }else{
               return res.status(406).json({success:false,message:"username và password Không chính xác"})
           }
       }else{
         return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
       }
     }else{
         return res.status(403).json({ success: false, mess: "username và password Không chính xác" })
     }
    } catch (error) {
     console.log(error)
     return res.status(500).json({ success: false, mess: "Loi Server" })
    }
    
 }
exports.Resgiter=async (req,res)=>{
    try {
        const {username,password,role,Ten,Diachi,SDT,Email}=req.body
        const finduser=await db.setup('SELECT * FROM `users` WHERE `Username`=? ',[username])
        if( finduser.length===0){
            const findEmail=await db.setup('SELECT * FROM `users` WHERE `Email`=? ',[Email])
            if(findEmail.length===0){
                
            const hash=bcrypt.hashSync(password,salt)
            await db.setup('INSERT INTO `users` (Username,Password,role,TEN, Diachi,SDT,Email) VALUES (?, ?, ?,?,?,?,?)',[username,hash,role,Ten,Diachi,SDT,Email])
            const iduser=await db.setup('SELECT * FROM `users` WHERE `Username`=?',[username])
            const settoken=jwt.sign({id:iduser[0].ID_users,role:iduser[0].role},process.env.PasswordTOKEn,{expiresIn:"1h"})
            const Refreshtoken=jwt.sign({id:iduser[0].ID_users},process.env.PASSWORD_Refreshtoken,{expiresIn:"1y"})
              return  res.json({success:true,settoken,Refreshtoken})
            }
            else{
                return res.status(415).json({ success: false, mess: " Email Đã Tồn Tại" })
            }
        }else{
            return res.status(403).json({ success: false, mess: "Tên Tài Khoản Đã Tồn Tại" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, mess: "Loi Server" })
    }
}
exports.resetpassword=async (req,res)=>{
    try {
        const {newpassword,password}=req.body
            const finduser=await db.setup('SELECT * FROM `users` WHERE `ID_users`=?',[req.iduser.id])
            const compare = await bcrypt.compare(password, finduser[0].Password)
            if(compare){
                const hash=bcrypt.hashSync(newpassword,salt)
                await db.setup('UPDATE `users` SET Password =?',[hash])

             return  res.json({success:true,message:"doi mat khau thanh cong"})
            }else{
                return res.status(402).json({success:false,message:"Sai mat khau"})
            }

       
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, mess: "Loi Server" })
    }
}
exports.deleteAuth=async (req,res)=>{
    try {
            const Delete= await db.setup(
            "DELETE FROM users  WHERE Username=?",[req.params.username])
        return  res.json({Delete:Delete,message:"xoa thanh cong",success:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.refesthtoken=(req,res)=>{
    const {Refreshtoken}=req.body
    if(!Refreshtoken){
        return res.status(405).json({success:false,message:"Access token not found"})
    }
    try {
         jwt.verify(Refreshtoken,process.env.PASSWORD_Refreshtoken,(err,data)=>{
             const settoken=jwt.sign({id:data.id,role:data.role},process.env.PasswordTOKEn,{expiresIn:"1h"})
            res.json({success:true,settoken})
        })
       
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"internal server error",error})
    }
}
exports.settoke=(req,res)=>{
    const {token}=req.body
    if(!token){
        return res.status(405).json({success:false,message:"Access token not found"})
    }
    try {
        jwt.verify(token,process.env.PasswordTOKEn,(err,data)=>{
            if(err){
              return  res.status(410).json({success:false,message:"Token has expired"})
            }else{
                return  res.json({success:true,a:data})
            }
        })} catch (error) {
            console.log(error)
            res.status(500).json({success:false,message:"internal server error"})
        }
   
}
exports.update=async (req,res)=>{
    try {
        const {Ten,Diachi,SDT,Email}=req.body
        const Hinh=req?.file?.filename
        if(Hinh===undefined){
            const update= await db.setup(
                "UPDATE  users SET TEN=?, Diachi=?,SDT=?,Email=? WHERE ID_users=?",[Ten,Diachi,SDT,Email,req.iduser.id])
            return  res.json({update:update,message:"sua thanh cong"})
        }else{
            const update= await db.setup(
                "UPDATE  users SET TEN=?, Diachi=?,SDT=?,Email=?,Hinh=? WHERE ID_users=?",[Ten,Diachi,SDT,Email,Hinh,req.iduser.id])
            return  res.json({update:update,message:"sua thanh cong"})
        }
  
       
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getuserid=async (req,res)=>{
    try {
        const get= await db.setup(
            "SELECT * FROM users  WHERE ID_users=?",[req.iduser.id])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getALLHS=async (req,res)=>{
    try {
        const get= await db.setup(
            "SELECT ID_users ,Ten,Diachi,SDT,Email FROM users  WHERE role=1",[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.getALLGD=async (req,res)=>{
    try {
        const get= await db.setup(
            "SELECT ID_users,Ten FROM users  WHERE role=2",[])
        return  res.json({get:get,message:"tim thanh cong"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
exports.SearchHS=async (req,res)=>{
    try {
        const {Search,ID_user}=req.body
        if(Search===undefined){
            const get= await db.setup(
                `SELECT ID_users ,Ten,Diachi,SDT,Email FROM users  WHERE ID_users=? AND role=1`,[ID_user])
            return  res.json({get:get,message:"tim thanh cong"})
        }
        if(ID_user===undefined){
        const get= await db.setup(
            `SELECT ID_users,Ten,Diachi,SDT,Email FROM users  WHERE  role=1 AND Ten LIKE '${Search+"%"}' `,[])
        return  res.json({get:get,message:"tim thanh cong"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"loi server"})
    }
}
