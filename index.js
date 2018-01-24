const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const articles = require('./controller/articles')
const userController = require('./controller/users')
const methodOverride = require('method-override')

//For example, use the following code to 
//serve images, CSS files, and JavaScript files in a directory named public:
app.use('/assets',express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))//for getiing post requestbody
app.use(methodOverride('_method'))

require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});


app.engine('handlebars',exhbs( { defaultLayout: 'main' })) 
app.set('view engine', 'handlebars') 

// app.listen(1986, () => {
//   console.log("The best year ever is 1986") //1986 is the year i was born
// }) 
//choose a PORT number over 3000, and log a message like, "application running on port: 3000", or whatever port you choose

   //Routing
  app.get('/', (req, res) => {
    res.render('homepg')
  })

  app.use('/articles', articles) 
  
  // You already have the routes and controller logic below in your users controller file, so I would aim to use that code or debug the code you have there
  
  // If you had something like
  // app.use('/users', usersController)
  // it may not have been working since you are serving all of the routes at '/users/' + whatever route is in the controller-- the route '/resource'

  //  You want to use the version below instead, since it wont add '/users' to the beginning of the route
  // app.use('/', usersController)
 
  // I got the error Cannot post '/login' 
  // Check these 2 files for reference:
  // https://git.generalassemb.ly/ga-wdi-exercises/express-passport-local-authentication/blob/solution/config/routes.js
  // https://git.generalassemb.ly/ga-wdi-exercises/express-passport-local-authentication/blob/solution/controllers/users.js
  
  // The example above has a separate router and controller which can be confusing, especially at first.
  // You can combine these into one file if that makes it easier. Replace the code in the router with the code referenced from the controller file.


  app.get('/resource', (req, res) => {
    res.render('resource')
  })

  app.get('/loginButton', (req, res) => { // this is super nitpicky but, though the button triggers the request to the route, the route should for a 'login' rather than a 'loginButton'; the route should have a label that reflects the action
    res.render('login')
  }) 

  app.get('/signupButton', (req, res) => {
    res.render('signup')
  }) 

  app.get('/breaking', (req, res) => {
    res.render('breaking')
  }) 

  app.post('/signup',(req,res)=>{
    
    const data = req.body;
    userController.signup(data)
    res.render('homepg')
  })

  app.set('port', process.env.PORT || 3000)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })



  /*app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  })*/
