require('dotenv').config();
const express = require('express');
const app = express(); 
const routes = require ('./routes/index-routes')
const morgan = require('morgan');
app.use(morgan('combined'));
const methodOverride = require('method-override');
// const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport');
app.use(express.urlencoded({ extended: true }));



const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); 

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);


const PORT = process.env.PORT || 3000
require('./config/connection');

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));



