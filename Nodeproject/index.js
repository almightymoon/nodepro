var http = require('http')
var fs = require('fs')
var htmlfile = fs.readFileSync('index.html')
http.createServer( (req,res)=>{
res.writeHead(200, {'content-type':'text/html'})
res.end(htmlfile)
}).listen(3000)