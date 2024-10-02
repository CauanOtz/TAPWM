var http = require('http');
var server = http.createServer( function(req,res){
    var opcao = req.url;
    if(opcao == '/historia'){
        res.end("<html><body><h1>Historia da Fatec Sorocaba</h1></body></html>");
    }
    else if(opcao=='/cursos'){
        res.end("<html><body><h2>Cursos</h2></body></html>");
    }
    else if(opcao=='/professor'){
        res.end("<html><body><h1>Professores</h1></body></html>");
    }
    else 
    res.end("<html><body><h2>Site da Fatec Sorocaba</h2></body></html>");
});
server.listen(3000);