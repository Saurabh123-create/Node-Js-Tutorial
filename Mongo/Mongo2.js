const collection = require('./Connection/connect.js')

const ReadUsers = async ()=>{
    let data = await collection();
    data = await data.find().toArray();
    console.log(data)
}
ReadUsers()

const AddUser = async ()=>{
    let results = await collection();
    let update = await results.insertOne({name : 'New User',developer : 'backend'})
    results = await results.find().toArray();
    console.log(results)
    
}
// AddUser()

const updateuser = async()=>{
    const data = await collection();
    const res = await data.updateOne({name : "New User"},{$set : {name : 'Old User', age : 68}});
    console.log(res)
}

// updateuser();

const DeleteUsers = async ()=>{
    let data = await collection();
    let deleteOne = await data.deleteOne({name : "Rahul CHikna"});
    let deleteMany = await data.deleteMany({name : "Rahul"});
    data = await data.find().toArray();
    console.log(data)
}
// DeleteUsers()