const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const passport = require('passport')
const morgan = require('morgan')
const articles = require('./controller/articles')
const userController = require('./controller/users')
const methodOverride = require('method-override')
const cors = require('cors')

app.use(cors())

// For example, use the following code to
// serve images, CSS files, and JavaScript files in a directory named public:
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))// for getiing post requestbody
app.use(methodOverride('_method'))

require('./config/passport')(passport)

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.listen(3001, () => { // 3001  is working
  console.log('hey')
})

   // Routing
app.get('/', (req, res) => {
  res.render('homepg')
})

app.use('/articles', articles)

  // app.get('/articles', (req, res) => {
  //     res.redirect('articles/view')
  // })

app.get('/resource', (req, res) => {
  res.render('resource')
})

app.get('/loginButton', (req, res) => {
  res.render('login')
})

app.get('/signupButton', (req, res) => {
  res.render('signup')
})

app.get('/breaking', (req, res) => {
  res.render('breaking')
})

app.post('/signup', (req, res) => {
  const data = req.body
  userController.signup(data)
  res.render('homepg')
})

app.set('port', process.env.PORT || 1986)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

  /* app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  }) */
