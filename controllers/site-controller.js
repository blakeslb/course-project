//store all handlers for book related routes (which are cb functions)
//Bring in data
const data = require('../data');

module.exports = {
    index: (request, response) => {
        response.render('pages/index', {
            data: data
        });

    },
    about: (request, response) => {
        response.render('pages/about');
    },
    login: (request, response) => {
        response.render('pages/login')
    },
}

