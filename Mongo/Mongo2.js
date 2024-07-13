const collection = require('./Connection/connect.js')

const ReadUsers = async ()=>{
    let data = await collection();
    data = await data.find({name : "saurabh"}).toArray();
    console.log(data)
}
// ReadUsers()

const UpdateUsers = async ()=>{
    let results = await collection();
    let update = await results.insertOne({name : 'Rahul CHikna',developer : 'backend'})
    results = await results.find().toArray();
    console.log(results)
    
}
// UpdateUsers()

const DeleteUsers = async ()=>{
    let data = await collection();
    let deleteOne = await data.deleteOne({name : "Rahul CHikna"});
    let deleteMany = await data.deleteMany({name : "Rahul"});
    data = await data.find().toArray();
    console.log(data)
}
// DeleteUsers()