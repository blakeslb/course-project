
const express= require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/')
    .post(bookController.post_books)

router.route('/:id')
    .get(bookController.id)
    .put(bookController.update)
    .delete(bookController.delete)



module.exports = router; 
