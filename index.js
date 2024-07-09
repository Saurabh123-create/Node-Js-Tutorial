const data = require("./firstprogram");
const fs = require('fs');
console.log(data)
fs.writeFileSync('helloworld.text', "this is inside the text")