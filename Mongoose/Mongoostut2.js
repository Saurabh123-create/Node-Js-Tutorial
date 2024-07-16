const mongoose = require('mongoose');
const AnimeSchema = require('./baseurl');


async function postMethod(){
    const customModel = mongoose.model('CRUDanime' , AnimeSchema);
    const data1 = new customModel({"Anime Character" : 'Gojo', "Anime Name" : "Jujutsu Kaisen" ,"Power" : "Blue Eyes"});
    const data2 = new customModel({"Anime Character" : 'Gojo', "Anime Name" : "Jujutsu Kaisen" ,"Power" : "Blue Eyes" , "Number" : "765876u5867"});
    const data3 = new customModel({"Anime Character" : 'Gojo', "Anime Name" : "Jujutsu Kaisen" ,"Power" : "Blue Eyes"});
    await data1.save();
    await data2.save();
    await data3.save();
}
// postMethod();

async function updateMethod(){
    const customModel = mongoose.model('CRUDanime', AnimeSchema);
    const UpdateData = await customModel.updateOne({"Anime Character" : "Gojo"}, {$set : {"Anime Character" : 'Saitama',"Anime Name" : "One punch man"}})
}
// updateMethod();

async function deleteMethod(){
    const customModel = mongoose.model("CRUDanime", AnimeSchema);
    let deletedata = await customModel.deleteOne({"Anime Character" : "Gojo"})
}

// deleteMethod();

async function getMethod(){
    const customModel = mongoose.model("CRUDanime", AnimeSchema);
    const getData = await customModel.find();
    console.log(getData)
}
getMethod();