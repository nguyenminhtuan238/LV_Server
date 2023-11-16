const express=require('express')
const router=express.Router()
const subject=require("../controller/subject.controller")
const { accessAdmintoken } = require('../middleware/admin.middleware')
router.post("/",accessAdmintoken,subject.Addsubject)
router.get("/:subject",subject.Searchsubject)
router.get("/",subject.GetALLsubject)
router.get("/byid/:id",subject.GetIDsubject)
router.put("/:id",accessAdmintoken,subject.updatesubject)
router.delete("/:id",accessAdmintoken,subject.deletesubject)
module.exports=router