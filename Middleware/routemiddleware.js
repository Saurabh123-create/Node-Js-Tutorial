const express = require("express");
const app = express();
const router = express.Router();
const routemiddle = require("./midwarefunc")

router.use(routemiddle)
app.use('/', router)
// app.use(routemiddle)  =====> Global routing

app.get("",routemiddle ,(req,res)=>{  // =======> Partial Routing
    res.send("This is a default page")
})
router.get("/about", (req,res)=>{  // using
    res.send("This is a about page")
})
app.get("/home", (req,res)=>{
    res.send("This is a home page")
})
app.get("/contact", (req,res)=>{
    res.send("This is a contact page")
})

app.listen(1200);