//store all handlers for book related routes (which are cb functions)
//Bring in data
const Comic = require("../models/comic-model");

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error;
            } else {
                response.render('pages/admin', { data: allComics });
            }
        });
    } else {
        response.redirect('/login')

    }
    },

    create: (request, response) => {
        response.render('pages/create');
    },
    update: (request, response) => {
        const { id } = request.params;
        Comic.findOne({ _id: id }, (error, foundBook) => {
            if (error) {
                return error;
            } else {
                response.render('pages/update', { book: foundBook });
            }
        });
    }
}