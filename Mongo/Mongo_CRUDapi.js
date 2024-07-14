const collection = require('./Connection/connect');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',async (req,res)=>{
    let data = await collection();
    data = await data.find().toArray();
    res.send(data);
});

app.post('/',async (req,res)=>{
    let data = await collection();
    data = await data.insertMany(req.body);
    res.send(data);
});

app.put('/:name',async (req,res)=>{
    let data = await collection();
    data = await data.updateOne({name : req.params.name} ,{ $set : req.body});
    res.send(data);
});
app.delete('/:name',async (req,res)=>{
    let data = await collection();
    data = await data.deleteOne({name : req.params.name});
    res.send(data);
});

app.listen(5000);
