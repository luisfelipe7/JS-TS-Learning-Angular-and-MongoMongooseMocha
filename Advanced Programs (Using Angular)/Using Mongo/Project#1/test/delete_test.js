// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");


describe("Deleting the data", (done) => {
    let felipe; // Defining the variable
    let luis; //Defining another variable
    let yenifer; // Defining another variable

    // Saving the Persons
    beforeEach((done) => {
        felipe = new Student({ name: "Felipe" });
        luis = new Student({ name: "Luis" });
        yenifer = new Student({ name: "Yenifer" });
        felipe.save()
        yenifer.save()
        luis.save().then(() => done());
    })

    // Deleting by ID on the collection
    it("Deleting By Id", (done) => {
        Student.findByIdAndDelete(felipe.id).
            then(() => Student.findOne({ name: "Felipe" })).
            then((student) => {
                assert(student == null)
                done();
            })
    })

    // Deleting by Name on the collection
    it("Deleting By Name", (done) => {
        Student.findOneAndDelete({ name: 'Luis' }).
            then(() => Student.findOne({ _id: luis._id })).
            then((student) => {
                assert(student == null)
                done();
            })
    })

    // Deleting One on the Collection, deletes the first element that matches the condition
    it("Deleting One", (done) => {
        Student.deleteOne({ name: 'Yenifer' }).
            then(() => Student.findOne({ name: yenifer.name })).
            then((student) => {
                assert(student == null)
                done();
            })
    })


})

