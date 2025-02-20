var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    console.log("server running at 8000 port");
    http.createServer(function(request, response) { 
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
