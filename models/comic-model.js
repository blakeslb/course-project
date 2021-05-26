const mongoose = require('mongoose');



const {Schema} = mongoose; 
const comicSchema = new Schema({
    title: {
        type: String,
        required: [true, 'A title is required.'], minLength: [1, 'Minimum length for the title is 1 character.']
    },
   
    author: {
        type: String,
        required: [true, 'The author\'s name is required'], minLength: [3, 'The minimum length is 3 characters.'],
    },
    publisher: {
        type: String,
        required: [true, 'The publisher is required.']
    },
    genre: {
        type: String,
        required: [true, 'The genre is required.']
    },
    pages: {
        type: Number,
        min: [2, 'The minimum number is 2']

    },
    rating: {
        type: Number,
        required: [true, 'The rating is required.'],
        min: [1, 'The minimum rating is 1.']
    },
    synopsis: {
        type: String,
        required: [true, 'The synopsis is required.']
    },
    image: {
        type: String,
        required: [true, 'An image is required.']

    }
});

const Comic = mongoose.model('Comic', comicSchema)

module.exports = Comic; 

