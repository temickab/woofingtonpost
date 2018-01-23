//remember to CamelCase your filenames for node js modules: ArticleSchema instead of articleschema

// require a connected instance of mongoose from ./connection.js
const mongoose = require('./connection');

// define a Schema variable to create a new schema with
const Schema = mongoose.Schema;



const ArticleSchema = new Schema(
    {
        title: String,
        url: String,
        description: String,
        postDate: { 
            type: Date, 
            default: Date.now 
        }
    }
)

// define schema
const Article = mongoose.model("Articles", ArticleSchema) // model names should be singular

module.exports = Article 
// I would just export mongoose. Wherever you are importing a model (for example, in a seed file, in the controller), you'll need  mongoose.model("Article") if you want need an Article model (so you can use Article.find({}),  Article.create({}),  Article.findOneAndUpdate({}), etc)

// I would also probably move this model out into the models folder as well. 
