const express=require('express')
const router=express.Router()
const public=require('../controller/public.controller')
router.get("/",public.Download)
router.get("/getpoint/",public.DownloadDiem)
router.get("/getClass/",public.DownloadClass)
router.get("/fileDeluser/",public.DownloadDeleteuser)
router.get("/fileDelTe/",public.DownloadDeleteTe)
module.exports=router