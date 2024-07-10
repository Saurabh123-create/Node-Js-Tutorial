const express = require('express')
const app = express();
let Data = [
    'Home','Feeds','About us', "Contacts"
]
app.set('view engine', 'ejs')
app.get('/home', (req,res)=>{
    res.render("../views/multiData", {Data})
})

app.get('/common',(req,res)=>{
    res.render("../views/Home")
})

app.listen(4500)