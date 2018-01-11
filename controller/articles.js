const express = require('express')
const Article = require('../db/articleschema');
const router = express.Router()
// GET list of articles //
router.get('/view', function(req, res) {
    //console.log('Hre')
  Article.find({})
    .then(function(article) {
      res.render('articles', { articles: article })
    })
})

// CREATE new article 
router.get('/create', function(req, res) {
    res.render('articles-create')
})

router.post('/create', function(req, res) {
    Article.create(req.body.article)
        .then(function(article) {
        res.redirect('/articles/view')
    })
})

// UPDATE existing article //
router.get('/edit/:_id', function(req, res) {
  Article.findOne({ _id: req.params._id })
    .then(function(article) {
        res.render('articles-edit', { article: article })
    })
})

router.put('/edit/:_id', function(req, res) {
  Article.findOneAndUpdate({ _id: req.params._id }, req.body.article, { new: true })
    .then(function() {
      res.redirect('/articles/view')
    })
})

//put for editing
//post for creating
// DELETE article //
router.delete('/delete/:_id', function(req, res) {
  Article.findOneAndRemove({ _id: req.params._id })
    .then(function() {
      res.redirect('/articles/view')
    })
})

// Passport authentication check
// function ensureAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect('/login')
// }

module.exports = router
