User.methods.encrypt = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

function postSignup(request, response, next){
    const signupStrategy = passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
    })
    return signupStrategy(request, response, next)
}

function getSignup(request, response, next) {
    response.render('signup.handlebars', { message: request.flash('signupMessage') });
  }

  function getLogout(request, response, next) {
    request.logout();
    response.redirect('/');
  }











/*
 

*/
