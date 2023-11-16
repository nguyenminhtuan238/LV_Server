const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'././src/public/Image/')    
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage
})

const storageu=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'././src/public/Imageuser/')    
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const uploaduser=multer({
    storage:storageu
})
exports.uploadImage=upload.single('Hinh')
exports.uploadImageuser=uploaduser.single('Hinh')
exports.uploadphoto=upload.array('photo[]',4)