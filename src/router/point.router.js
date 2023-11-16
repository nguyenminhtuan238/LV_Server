const express=require('express')
const router=express.Router()
const Point=require("../controller/point.controller")
const {accesstoken} = require('../middleware/auth.middleware')
router.post("/",accesstoken,Point.Addpoint)
router.get("/:point",Point.getpointid)
router.get("/",Point.getpoint)
router.put("/:id",accesstoken,Point.updatepoint)
router.delete("/:id",accesstoken,Point.deletepoint)
module.exports=router