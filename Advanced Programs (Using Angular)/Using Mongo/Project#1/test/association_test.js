
// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");
// Importing the comment collection
const Comment = require("../src/comment");
// Importing the articleblog collection
const ArticleBlog = require("../src/articleBlog");



describe('Association Tests', () => {
    let guillermo, articleBlog, comment;

    beforeEach(done => {
        guillermo = new Student({ name: "Guillermo" })
        articleBlog = new ArticleBlog({ title: "MongoDB", content: "Learning about Mongoose and Mocha" })
        comment = new Comment({ title: "Well Done!" })

        guillermo.articleBlog.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.students = guillermo;

        // The promise all will make sure that all the saves are applied before do the done()
        Promise.all([guillermo.save(), articleBlog.save(), comment.save()])
            .then(() => done());
    })

    it('Associate student with ArticleBlog', done => {
        Student.findOne({ name: 'Guillermo' }).populate('articleBlog').then(student => {
            assert(student.articleBlog[0].title === 'MongoDB')
            done();
        })
    })

    it.only('Nested populate', done => {
        Student.findOne({ name: 'Guillermo' }).populate({
            path: 'articleBlog',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'students',
                    model: 'student',
                }
            }
        }).then(student => {
            console.log(student.articleBlog[0].title);
            // assert(student.name === 'Guillermo')
            // assert(student.articleBlog[0].title == 'MongoDB')
            // assert(student.articleBlog[0].comments[0].content === 'Well Done!')
            assert(student.articleBlog[0].comments[0].students.name === 'Guillermo')
            done()
        })
    })

})