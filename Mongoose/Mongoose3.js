require('./config');
const models = require('./Schemas');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/getApi',async (req,res)=>{
    let showData = await models.find();
    res.send(showData)
});
app.get('/search:key',async (req,res)=>{
    let showData = await models.find({
        "$or" : [
            {"machine" : {$regex : req.params.key}}, // search on machine field
            {"usage" : {$regex : req.params.key}} // search on usage field
        ]
    });
    res.send(showData)
});


app.post('/',async (req,res)=>{
    const product = new models(req.body)
    let result = await product.save();
    res.send(result)
});

app.put('/updatePrice:machine',async (req,res)=>{
    await models.updateOne(req.params,{$set : {"price" : 69}})
    res.send('data update')
});

app.delete('/deletedata:_id',async (req,res)=>{
    let result = await models.deleteOne(req.params)
    res.send(result)
});

app.listen(4200);