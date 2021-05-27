const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codesquadComics', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
    if (error) {
        console.log('error with MongoDBs connectivity'); 
    } else {
        console.log('Successful connection with MongoDB Server');

    }

})