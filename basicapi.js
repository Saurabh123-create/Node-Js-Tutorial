const data = require("./basicapidata");
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type" : "Application/json"
    })
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000)
