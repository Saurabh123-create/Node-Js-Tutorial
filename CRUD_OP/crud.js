const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname , 'Create.html')
console.log(pathname,'hi')
//create
fs.writeFileSync(pathname, '<h1>Crud operation Heading</h1>')

//read
fs.readdir(__dirname,(err, filed)=>{
    console.log(filed)
})

// update
fs.appendFileSync(pathname, '<br/> <p> Appended Line </p>')

//delete
// fs.unlinkSync(__dirname+'/Create.html')
// or
// fs.unlinkSync(pathname)

