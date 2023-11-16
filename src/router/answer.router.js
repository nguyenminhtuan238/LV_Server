const express=require('express')
const router=express.Router()
const answer=require("../controller/answer.controller")
const {accesstoken} = require('../middleware/auth.middleware')
const { accessTeachertoken } = require('../middleware/Teacher.middleware')
router.post("/",accessTeachertoken,answer.Addanswer)
router.post("/:id",accessTeachertoken,answer.getanswer)
router.post("/GETID/:id",accessTeachertoken,answer.getIDanswer)
router.get("/",answer.getALLanswer)
router.put("/:id",accessTeachertoken,answer.updatecontent)
router.delete("/:id",accessTeachertoken,answer.deleteanswer)
router.delete("/DeleteQ/:id",accessTeachertoken,answer.deleteQanswer)
module.exports=router