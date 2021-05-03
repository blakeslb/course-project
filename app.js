const express = require('express');
const app = express(); 

const morgan = require('morgan');
app.use(morgan('combined'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); 

const PORT = 3000; 
app.listen(PORT, () =>{
    console.log('The server is listening on PORT 3000')
});

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.get('/admin-console', (req, res) => {
    res.render('pages/admin')
})

app.get('/admin-console/create-book', (req, res) => {
    res.render('pages/create');
})

app.get('/books/:id', (req, res) => {
    // let allRouteParameters = req.allRouteParameters;
    res.render('pages/books');
});

app.get('/admin-console/update-book/:id', (req, res) => {
    // let allRouteParameters = req.allRouteParameters;
    res.render('pages/update');

});

