// Defining the model for the student 

// Anytime that we work with data related to Mongo we need to import Mongoose
const mongose = require('mongoose');
// In order to create the schema (model) for the student
const Schema = mongose.Schema;
// Importing the article schema
const ArticleSchema = require('./article')

// Creating the model for the student
const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name is too short'
        }
    },
    studentNumber: Number,
    // No Longer Required, we are going to use virtual properties: articleCount: Number,
    grade: Number,
    //Adding the arrays of Articles that the student can have
    articles: [ArticleSchema],
    articleBlog: [{
        type: Schema.Types.ObjectId,
        ref: 'articleBlog'
    }]
})

// Creating the virtual property for the article count
studentSchema.virtual('articleCount').get(function(){
    return this.articles.length;
})

// Indicating that we are defining a collection called student using the student schema
const student = mongose.model("student", studentSchema);
// Exporting the Student to use it in other classes
module.exports = student;