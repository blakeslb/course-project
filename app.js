require('dotenv').config();
const express = require('express');
const app = express(); 
const routes = require ('./routes/index-routes')
const morgan = require('morgan');
app.use(morgan('combined'));
const methodOverride = require('method-override');
// const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
require('./config/connection');



const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); 

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));



