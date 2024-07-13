const collection = require('./Connection/connect.js')

const users = async ()=>{
    let data = await collection();
    data = await data.find({name : "saurabh"}).toArray();
    console.log(data)
}
users()