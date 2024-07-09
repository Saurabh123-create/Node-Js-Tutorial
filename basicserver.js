const http = require ("http");
http.createServer((req,res)=>{
    res.write('This is a basic server');
    res.write('<br/><h1>Heading</h1>');
    res.end();
}).listen(5000)