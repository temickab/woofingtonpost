function postSignup(request, response, next) {
    const signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    })
    return signupStrategy(request, response, next)
}

function getSignup(request, response, next) {
    response.render('signup.handlebars', {
        message: request.flash('signupMessage')
    });
}

function getLogout(request, response, next) {
    request.logout();
    response.redirect('/');
}

function getLogIn(request, response, next) {
    request.login()
    response.redirect('/')
}

const user = require('../db/userschema')
//console.log('user schema',user)
const userdetail = user.model('UserDetail') //see comment in userschema.js
//console.log(userdetail)

module.exports = {
    postSignup: postSignup,
    getSignup: getSignup,
    getLogout: getLogout,
    getLogIn: getLogIn,
}

//you're missing post /login here

// https://git.generalassemb.ly/ga-wdi-exercises/express-passport-local-authentication/blob/solution/controllers/users.js
