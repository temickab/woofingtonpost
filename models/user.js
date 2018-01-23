// This is actually code for the user controller, rather the model
// The code you have in your articleschema and userschema are truly your models.

const passport = require("passport")

// GET /signup
function getSignup(request, response) {
  response.render("signup.handlebars", { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response) {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

// GET /login
function getLogin(request, response) {
  response.render('login.handlebars', { message: request.flash('loginMessage') });
}

// POST /login
function postLogin(request, response) {
  const loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });
  return loginProperty(request, response);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// Restricted page
function secret(request, response){
  response.render("secret.handlebars");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
};
