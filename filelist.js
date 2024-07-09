const fs = require('fs');
const path = require('path');
const pathname = path.join(__dirname , 'folderFiles')
console.log(pathname)

// step 1
// fs.mkdirSync(pathname);

// step 2
// for(let i = 0 ; i < 5 ;  i++){
//     fs.writeFileSync(`${pathname}/index${i}`,  `Content ${i}`)
// }

// step 3
fs.readdir(pathname , (err, files)=>{
    files.forEach((item)=>{
        console.log(item,'sssss')
        // fs.unlinkSync(item)
    })
})