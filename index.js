const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');

const app = express();

const categoriesController = require('./categorias/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category =  require('./categorias/Category');

//view engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
    console.log('Banco de dados conectado.');
    }).catch((error) => {
    console.log(error);
})

app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
    Article.findAll().then(articles => {
        res.render('index', {articles: articles});
    })
});

app.listen(8080, () => {
    console.log('O servidor está rodando.');
})