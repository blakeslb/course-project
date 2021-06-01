//store all handlers for book related routes (which are cb functions)
//Bring in data
const Comic = require("../models/comic-model");
const User = require("../models/userSchema");
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
const passport = require('passport');


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
    register_post:(request, response) => {
        User.register({username: request.body.username}, request.body.password, (error, user) => {
          if (error) {
            console.log(error);
            response.redirect('/register');
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/admin');
            });
          }
        });
      },

    login_post: (request, response) => {
        const user = new User({
          username: request.body.username,
          password: request.body.password
        });
      
        request.login(user, (error) => {
          if (error) {
            return error;
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/');
            });
          }
        });
      },
    google_get:
        passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),

    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (request, response) {
            response.redirect('/admin');
        }],

    logout: (request, response) => {
        request.logout();
        response.redirect('/login');
    }
}