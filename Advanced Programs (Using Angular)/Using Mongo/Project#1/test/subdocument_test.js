// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");

describe('Subdocument', () => {

    // Creating a person with articles (subdocuments)
    it('Creating a subdocument', done => {
        const rodrigo = new Student({
            name: 'Rodrigo',
            articles: [{ title: 'Javascript' }]
        })
        rodrigo.save().then(() => {
            Student.findOne({ name: 'Rodrigo' }).then(student => {
                assert(student.articles[0].title === 'Javascript')
                done()
            })
        })
    })

    // Adding a new record and then inserting a subdocument (articles)
    it('Adding a new record', done => {
        const tomas = new Student({ name: 'Tomas', articles: [] })
        tomas.save().then(() =>
            Student.findOne({ name: "Tomas" }))
            .then((student) => {
                student.articles.push({ title: 'MongoDB' })
                return student.save()
            })
            .then(() => Student.findOne({ name: 'Tomas' }))
            .then((student) => {
                assert(student.articles[0].title === 'MongoDB')
                done()
            })
    })

    // Removing a subdocument inside a document
    it('Remove the subdocument inside a document', (done) => {
        const yenifer = new Student({ name: 'Yenifer', articles: [{ title: 'React Native' }] })
        yenifer.save().then(() => Student.findOne({ name: 'Yenifer' }))
            .then(student => {
                student.articles[0].remove()
                return student.save()
            })
            .then(() => Student.findOne({ name: 'Yenifer'}))
            .then(student => {
                assert(student.articles.length ===0)
                done()
            })
    })


})