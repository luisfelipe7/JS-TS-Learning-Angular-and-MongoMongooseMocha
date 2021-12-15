
// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");

describe("Updating the data", () => {
    let esteban; //Defining another variable
    let esteban2; //Defining another variable

    // Saving the Persons
    beforeEach((done) => {
        esteban = new Student({ name: "Esteban", studentNumber: 24, articleCount: 5, grade: 10 });
        esteban2 = new Student({ name: "Esteban2", studentNumber: 25, articleCount: 6, grade: 9 })
        esteban2.save()
        esteban.save().then(() => done());
    });

    // Updating one of the Estebans, updating the one with the name Esteban and putting the id 12
    it("Updating one of the Estebans", async () => {
        const student = await Student.updateOne({ name: 'Esteban' }, { studentNumber: 12 })
        const res = await Student.findOne({ _id: esteban._id });
        assert(res.studentNumber === 12)
        console.log(res)
    })

    // Using the update operators (Atomic Operators because they are using a $ sign)
    xit('Update Grades', async () => {
        const artCount = await Student.findOne({ name: 'Esteban' });
        // Modifying the grade and indicating that I want to multiply my actual grade with the article count
        const student = await Student.updateOne({ name: 'Esteban' }, { $mul: { grade: artCount.articleCount } });
        const res = await Student.find({ name: 'Esteban' })
        assert(res[0].grade === 50)
        console.log(res);
    })


})

