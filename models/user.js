User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  function getLogin(request, response, next) {
    response.render('login.hbs', { message: request.flash('loginMessage') });
  }

  function postLogin(request, response, next) {
    var loginProperty = passport.authenticate('local-login', {
      successRedirect : '/',
      failureRedirect : '/login',
      failureFlash : true
    });

    return loginProperty(request, response, next);
  }
