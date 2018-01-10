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












/*
 

*/
