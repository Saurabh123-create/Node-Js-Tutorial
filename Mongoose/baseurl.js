const mongoose = require('mongoose')
const {connect, Schema} = mongoose;
connect("mongodb://0.0.0.0:27017/NodeDB");

const AnimeSchema = new Schema({
    "Anime Character" : String,
    "Anime Name" : String,
    "Power" : String,
}, {collection : 'CRUDanime'})

module.exports = AnimeSchema;