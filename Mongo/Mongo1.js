const {MongoClient} = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const database = "NodeDB";
const connection = new MongoClient(url);

async function getUsers(){
    let result = await connection.connect();
    let db = result.db(database);
    let collection = db.collection('users')
    let response = await collection.find({}).toArray();
    console.log('running',response)
    // return response;
}
getUsers()