//store all handlers for book related routes (which are cb functions)
//Bring in data
const Comic = require("../models/comic-model");

module.exports = {
    index: (request, response) => { 
        Comic.find({}, (error, allComics) => {
            if(error) {
                return error;
            } else {
                response.render('pages/index', { data: allComics });
            }
        })
    },

    about: (request, response) => {
        response.render('pages/about');
    },
    login: (request, response) => {
        response.render('pages/login')
    },
}

