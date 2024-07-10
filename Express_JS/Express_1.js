const express = require('express');
const data = require('../firstprogram')
const app = express();
app.get("",(req, res)=>{
    // pass name=saurabh in url
    console.log(req.query)
    res.send("<h1>Welcome " + req.query.name+"<h1/>")
})
app.get("/about",(req, res)=>{
    console.log(req.query)
    res.send("<h1>About Page<h1/>")
})
app.get("/help",(req, res)=>{
    console.log(req.query)
    res.send("<h1>Help Page<h1/>")
})
app.get("/data",(req, res)=>{
    console.log(req.query)
    res.send("<h1>Help Page<h1/>" + JSON.stringify(data))
})

app.listen(5000)