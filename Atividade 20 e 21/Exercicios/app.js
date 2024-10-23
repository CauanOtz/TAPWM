var app = require('./app/config/server');

app.get('/', function(req, res){
    res.render("home/index");
})

app.get('/', function(req,res){
    res.send("<html><body>Home da Fatec Sorocaba!</body></html>")
});
app.get('/informacao/historia', function(req,res){
    res.send("<html><body>Historia da Fatec Sorocaba</body></html>")
});
app.get('/informacao/cursos', function(req,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>")
});
app.get('/informacao/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>")
});

app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos")
});

app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores")
});

app.listen(3000, function(){
    console.log("servidor iniciado");
});