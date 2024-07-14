const mongoose = require('mongoose');
const {Schema , connect} = mongoose;

const EstablishConnection = async () => {
    await connect("mongodb://0.0.0.0:27017/NodeDB");
    const ProductScheme = new Schema({
        Anime : String,
        Character :String
    } , {collection : "anime"});  // force mongo0se to use collection without plural name

    const myModel = mongoose.model('anime', ProductScheme);

    for(let i = 0; i <=5 ; i++){
        let data1 = new myModel({Anime : `Naruto${i}`, Character : `NAruto${i}`});
        await data1.save();
    }
}


EstablishConnection();