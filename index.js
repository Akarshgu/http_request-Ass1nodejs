const http= require("http");

const server=http.createServer(function(req,res){
res.write("<h1>hey this is my first server http</h1>")
res.write("normal text without ")
res.write(JSON.stringify({Name:"Akarsh gupta"}))
res.end();

})
server.listen(4000)