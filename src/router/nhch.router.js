const express=require('express')
const router=express.Router()
const NHCH=require("../controller/nhch.controller")
const {accesstoken} = require('../middleware/auth.middleware')
const { accessTeachertoken } = require('../middleware/Teacher.middleware')
router.post("/",accessTeachertoken,NHCH.AddNHCH)
router.post("/:id",accessTeachertoken,NHCH.getbyid)
router.get("/",NHCH.getALL)
router.put("/:id",accessTeachertoken,NHCH.update)
router.delete("/:id",accessTeachertoken,NHCH.deletebyid)
module.exports=router