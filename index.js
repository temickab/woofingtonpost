const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const articles = require('./controller/articles')
const userController = require('./controller/users')

//For example, use the following code to 
//serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))//for getiing post requestbody

require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});


app.engine('handlebars',exhbs( { defaultLayout: 'main' })) 
app.set('view engine', 'handlebars') 

app.listen(1986, () => {
    console.log("The best year ever is 1986") //1986 is the year i was born
  })

   //Routing
  app.get('/', (req, res) => {
    res.render('homepg')
  })

  app.get('/articles', (req, res) => {
      res.render('articles') 
  })

  app.get('/resource', (req, res) => {
    res.render('resource')
  })

  app.get('/loginButton', (req, res) => {
    res.render('login')
  }) 

  app.get('/signupButton', (req, res) => {
    res.render('signup')
  }) 

  app.post('/signup',(req,res)=>{
    
    var data=req.body;
    userController.signup(data)
    res.render('homepg')
  })

  app.use('/articles', articles) 


  /*app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  })*/

