const fs = require('fs');
const input = [...process.argv];
if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    fs.writeFileSync(input[2], input[3])
}

