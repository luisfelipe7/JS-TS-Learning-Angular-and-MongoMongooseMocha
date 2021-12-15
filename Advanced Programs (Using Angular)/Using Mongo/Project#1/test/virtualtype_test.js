// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");


describe('Virtual Types', () => {

    // Using the Article Count
    it('Article Counts', done => {
        const miguel = new Student({ name: 'Miguel', articles: [{ title: 'First Title' }] })
        miguel.save().then(() => Student.findOne({ name: 'Miguel' }))
            .then(student => {
                assert(student.articleCount === 1)
                done()
            })
    })
})