const express = require('express');
const app = express();
const path = require('path');
const pathname = path.join(__dirname)

app.set('view engine', 'ejs')
const middleware = (req,res,next)=>{
    console.log(req.query)
    if(!req.query.name){
        res.send("Please enter a name")
    }else{
        next();
    }
}
app.use(middleware);
app.get("", (req,res)=>{
    let data={name : 'saurabh', Age : 22}
    res.render('F:/MyProjects/Node-Js-Tutorial/views/profile',{data})
})

app.get("/about", (req,res)=>{
    res.sendFile('F:/MyProjects/Node-Js-Tutorial/Express_JS/help.html')
})
// app.use(express.static('F:/MyProjects/Node-Js-Tutorial/Express_JS/Projects'))

app.listen(9000)
