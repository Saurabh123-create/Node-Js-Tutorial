// Import HTML files on Express js
const express = require("express");
const app = express();
const path = require("path");
const pathname = path.join(__dirname ,'Projects');
console.log(pathname)
app.use(express.static(pathname));
// Write Calculator.html in url
app.listen(6900)