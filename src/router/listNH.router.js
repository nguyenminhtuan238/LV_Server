const express=require('express')
const router=express.Router()
const ListNH=require("../controller/listNH.controller")
const {accesstoken} = require('../middleware/auth.middleware')
const { accessTeachertoken } = require('../middleware/Teacher.middleware')
router.post("/",accessTeachertoken,ListNH.AddlistNH)
router.post("/:id",ListNH.getNH)
router.delete("/:id",accessTeachertoken,ListNH.deletelistNH)
module.exports=router