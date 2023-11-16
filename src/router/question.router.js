const express=require('express')
const router=express.Router()
const question=require("../controller/question.controller")
const Image=require("../middleware/image.middleware")
const { accessTeachertoken } = require('../middleware/Teacher.middleware')
router.post("/",accessTeachertoken,Image.uploadImage,question.Addquestion)
router.post("/Search/subject/",accessTeachertoken,question.Searchquestionsubject)
router.post("/Search/",accessTeachertoken,question.Searchquestion)
router.post("/Get/ALL/",accessTeachertoken,question.getALLquestionsubject)
router.get("/:subject",question.getquestionsubject)
router.get("/GetID/:id",question.getquestionid)
router.put("/:id",accessTeachertoken,Image.uploadImage,question.updatequestion)
router.delete("/:id",accessTeachertoken,question.deletequestion)
module.exports=router