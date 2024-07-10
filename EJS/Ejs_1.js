const express = require("express");
const app = express();
const data = {
name : 'Ramesh',
Age : 45,
}
app.set('view engine', 'ejs')

app.get("/profile",(req, res)=>{

    res.render('../views/profile', {data})
})

app.listen(3200)