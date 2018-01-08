const express = require('express')
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
//


//For example, use the following code to 
//serve images, CSS files, and JavaScript files in a directory named public:
app.use('/assets', express.static('public'))


app.engine('exhbs', hbs({ defaultLayout: 'main' })) 
app.set('view engine', 'exhbs')

app.listen(1986, () => {
    console.log("app listening on port 1986") //1986 is the year i was born
  })

    //Routing
    app.get('/', (req, res) => {
        res.render('homepg')
     })
    
     app.get('/articles', (req, res) => {
         res.render('articles') 
     })
    

  /*app.get("/:name", (req, res) => {
    res.send(`hello ${req.params.name}`)
  })*/



