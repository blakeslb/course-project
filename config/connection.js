const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
    if (error) {
        console.log('error with MongoDBs connectivity'); 
    } else {
        console.log('Successful connection with MongoDB Server');

    }

})