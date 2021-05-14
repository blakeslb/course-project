
const express = require('express');
const router = express.Router(); 

// Require admin-routes, book-routes, and site-routes 

const bookRoutes = require('./book-routes');
const adminRoutes = require('./admin-routes');
const siteRoutes = require('./site-routes');


router.use('/books', bookRoutes);
router.use('/', siteRoutes);
router.use('/admin', adminRoutes);




//exporting our router to use in app.js
module.exports = router; 


