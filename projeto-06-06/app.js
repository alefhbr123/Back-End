let http = require('http'),
    express = require('express'),
    path = require('path'),
    app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: false }));

app.get('/pato', (req, res) => {
    res.render('pato', { title: 'Página do Pato' }); 
});

app.listen(3000); 