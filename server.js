

const http = require('http');



http.createServer(function (req, res)

{
  console.log("URl :"+req.url);
  if(req.url=="/Contact"){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message :"You are in Contact US Page"}));
    res.end();
  }else if(req.url == "/Menu"){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message :"You are in Menu Page"}));
    res.end();
  }else{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message :"You are in Home Page"}));
    res.end();
  }
}).listen(3000);



