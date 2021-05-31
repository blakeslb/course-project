//store all handlers for book related routes (which are cb functions)
//Bring in data
const Comic = require("../models/comic-model");
const User = require("../models/userSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    index: (request, response) => {
        Comic.find({}, (error, allComics) => {
            if (error) {
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
    // login_post: (request, response) => {
    //     const username = request.body.username;
    //     const password = request.body.password;
    //     console.log(`password entere is ${password}`);
    //     User.findOne({ username: username }, (error, foundUser) => {
    //         if (error) {
    //             console.log(`The error at login is: ${error}`);
    //         } else {
    //             if (foundUser) {
    //                 console.log(`username was matched: ${foundUser.username}`);
    //                 console.log(`their password is: ${foundUser.password}`);


    //                 bcrypt.compare(password, foundUser.password, (err, result) => {
    //                     // result == true
    //                     if (result === true) {
    //                         console.log(`user ${foundUser.username} logged in`);
    //                         response.redirect('/admin');
    //                     }
    //                     //maybe put an else statement in 
    //                     else {
    //                         response.redirect('login');
    //                     }

    //                 });
    //             }
    //         };
    //      })

    // },
    register: (request, response) => {
        response.render('pages/register')
    },
    register_post: (request, response) => {
        bcrypt.hash(request.body.password, saltRounds, (err, hash) => {
            const newUser = new User({
                username: request.body.username,
                password: hash
            });
            newUser.save();
            response.redirect('/login/');
        });
    },

    login_post: (request, response) => {
        const username = request.body.username;
        const password = request.body.password;
        console.log(`password entered is: ${password}`);
        User.findOne({username: username}, (error, foundUser) => {
          if (error) {
            console.log(`The error at login is: ${error}`);
          } else {
            if(foundUser) {
              console.log(`username was matched: ${foundUser.username}`);
              console.log(`their password is: ${foundUser.password}`);
              bcrypt.compare(password, foundUser.password, (error, result) => {
                if (result === true) {
                  console.log(`user ${foundUser.username} successfully logged in`);
                  response.redirect('/admin/');
                } else {
                    response.redirect('/login/');
                    console.log('password incorrect')
                }
              });
            };
          };
       });
      }
  }