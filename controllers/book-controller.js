//store all handlers for book related routes (which are cb functions)
//Bring in data
const { response } = require('express');
const data = require('../data');
const { v4:uuid } = require('uuid');

module.exports = {
    // id: (request, response) => {
    //     response.render('pages/books/_id')
 
    // }
    id: (request, response) => {
        const { id } = request.params;
        const foundBook = data.find(book => book._id === String(id));
        response.render(`./pages/books`, {book: foundBook});
    },
    post_books: (request, response) => {
        const {_id = uuid(), title, author, publisher, pages, rating, synopsis, image} = request.body;
        data.push({_id, title, author, publisher, pages, rating, synopsis, image });
        response.redirect('/admin/')
    },






    
    delete: (request, response) => {
        const { id } = request.params; 
        const foundBook = data.find(book => book._id === String(id));
        const index = data.indexOf(foundBook);
        data.splice(index, 1);
        response.redirect('/admin/')
    },
    update: (request, response) => {
        const { id } = request.params;
        const {title, author, publisher, pages, rating, synopsis, image } = request.body;
        // const updatedTitle = title;
        // const updatedAuthor = author; 
        // const updatedPublisher = publisher; 
        // const updatedPages = pages; 
        // const updatedRating= rating;
        // const updatedSynopsis = synopsis; 
        // const updatedImage = image;

        const foundBook = data.find(book => book._id === id);

        // foundBook.title = updatedTitle;
        // foundBook.author = updatedAuthor;
        // foundBook.publisher= updatedPublisher;
        // foundBook.rating = updatedRating;
        // foundBook.synopsis = updatedSynopsis;
        // foundBook.image = updatedImage;
        // foundBook.pages = updatedPages;
        
        foundBook.title = title;
        foundBook.author = author;
        foundBook.publisher= publisher; 
        foundBook.rating = rating; 
        foundBook.synopsis = synopsis; 
        foundBook.image = image; 
        foundBook.pages = pages; 

        response.redirect('/admin')
    },

  }



