const mongoose = require('mongoose');
const {Schema} = mongoose;

let validate = Schema({
    machine : String,
    price : Number,
    usage : String,
}, {collection : "machine"});

module.exports = mongoose.model('machine', validate);

