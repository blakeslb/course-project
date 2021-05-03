const express = require('express');
const app = express(); 

const morgan = require('morgan');
app.use(morgan('combined'));

const PORT = 3000; 
app.listen(PORT, () =>{
    console.log('The server is listening on PORT 3000')
});

app.get('/', (req, res) => {
    res.send ('This route points to the Home page');
});

app.get('/about', (req, res) => {
    res.send('This route points to the About page')
})

app.get('/login', (req, res) => {
    res.send('This route points to the Login page')
})

app.get('/admin-console', (req, res) => {
    res.send('This route points to the Admin Console page')
})

app.get('/admin-console/create-book', (req, res) => {
    res.send('This route points to the Create page');
})
