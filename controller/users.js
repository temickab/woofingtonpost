//User.methods.encrypt = function(password){
  //  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
//}

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

  //this is what I created to get the log in button to work
  function getLogIn(request, response, next){
      request.login()
      response.redirect('/')
  }
//check the code above

  const user=require('../db/userschema')
  //console.log('user schema',user)
  const userdetail = user.model('UserDetail') 
  //console.log(userdetail)
 
module.exports={
signup:function(data){
    userdetail.collection.insert(data,(err,res)=>{
        
        console.log("Response data inserted",res);
    })
}
}






/*


*/
