const express= require("express")
const app = express();
const path = require('path'); 
const pathname= path.join(__dirname) 

app.get('',(req,res)=>{
    // res.send(`Inserted Text`);
    res.sendFile( `${pathname}/sendFile.html`);
})
app.get('/help',(req,res)=>{
    res.sendFile( `${pathname}/help.html`);
})
app.get('/about',(req,res)=>{
    res.send( `<p>THis is a inline html example<p/>`)
})
app.get('*',(req,res)=>{
    res.send( `<p>Error 404<p/>`);
})

app.listen(1000)