const express=require('express')
const router=express.Router()
const public=require('../controller/public.controller')
router.get("/",public.Download)
router.get("/getpoint/",public.DownloadDiem)
module.exports=router