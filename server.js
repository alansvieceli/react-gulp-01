var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8180);

console.log("Server rodando na porta 8080");