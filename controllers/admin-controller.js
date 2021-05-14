//store all handlers for book related routes (which are cb functions)
//Bring in data
const data = require('../data');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin', { data: data});
    },
    create: (request, response) => {
        response.render('pages/create');
    },
    update: (request, response) => {
        const { id } = request.params;
        const foundBook = data.find(book => book._id === String(id));
        response.render('pages/update', { book: foundBook });

       
    }
}
