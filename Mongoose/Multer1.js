const express = require('express');
const app = express();
const multer = require("multer");
const fs = require('fs');

// fs.mkdirSync('Uploads')

const upload = multer({
    storage : multer.diskStorage({
        destination : (req,file, cb)=>{cb(null,"Uploads")},
        filename : (req,file, cb)=>{
            cb(null, `${file.originalname}.jpg`)}
    })
}).single('uploadfile')

app.post("/uploads",upload,(req,res)=>{
    res.send('Success...')
})

app.listen(3200)