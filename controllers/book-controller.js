//store all handlers for book related routes (which are cb functions)
//Bring in data
const { response } = require('express');
const Comic = require("../models/comic-model");

module.exports = {
    // id: (request, response) => {
    //     response.render('pages/books/_id')
 
    // }
    id: (request, response) =>  {
        const bookId = request.params.id;
        Comic.findOne({_id: bookId}, (error, foundBook) => {
            if(error) {
                return error;
            }else {
                response.render('pages/books', { book: foundBook });
            }
        })
    },

    post_books: (request, response) => {
    const {title, author, publisher, pages, genre, rating, synopsis, image} = request.body;
    const newBook = new Comic({

        title: title,
        author: author,
        publisher: publisher,
        pages: pages,
        genre: genre,
        rating: rating,
        synopsis: synopsis,
        image: image,
    })

    newBook.save();
    response.redirect("/admin/");  
    },

    
    delete: (request, response) => {
		const { id } = request.params;
		Comic.deleteOne({_id: id}, (error) => {
			if(error) {
				return error; 
			}else{
				response.redirect('/admin/')
			}
			
		})
	},

    update: (request, response) => {
		const { id } = request.params;

		Comic.findByIdAndUpdate(id, {$set: {
		    title: request.body.title,
            author: request.body.author,
            publisher: request.body.publisher,
            pages: request.body.pages,
            rating: request.body.rating,
            synopsis: request.body.synopsis,
            image: request.body.image,
		}}, {new: true}, error => {
			if(error) {
				return error; 
			}else {
				response.redirect('/admin')
			}
		})
		
	}

    
    // update: (request, response) => {
    //     const {title, author, publisher, pages, rating, synopsis, image } = request.body;
	// 	const { id } = request.body;

	// 	Comic.findByIdAndUpdate({_id: id}, {$set: {
	// 	    title: title,
    //         author: author,
    //         publisher: publisher,
    //         pages: pages,
    //         rating: rating,
    //         synopsis: synopsis,
    //         image: image
	// 	}}, {new: true}, (error) => {
	// 		if (error) {
	// 			return error; 
	// 		}else {
	// 			response.redirect('/admin/')
	// 		}
	// 	})
		
	// }

  }



