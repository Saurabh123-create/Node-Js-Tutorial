const {MongoClient} = require('mongodb');
const url = "mongodb://0.0.0.0:27017/";
const connection = new MongoClient(url);
const database = 'NodeDB';

async function getData(){
    let res = await connection.connect();
    let db = res.db(database);
    let collection = db.collection('employe_details')
    return collection;
}

module.exports = getData;