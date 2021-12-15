// Testing the Reading Operation with MongoDB

// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");

describe("Reading the data", (done) => {
    let felipe; // Defining the variable

    // Saving the Felipe
    beforeEach((done) => {
        felipe = new Student({name: "Felipe"});
        luis = new Student({name: "Luis"});
        felipe.save() 
        luis.save().then(() => done());
    })

    // Searching the saved Felipes on the collection
    it("Find all Felipes", async () => {
        const students = await Student.find({name: 'Felipe'})
        console.log(students);
        assert(students[0]._id.toString() === felipe._id.toString());
        // Here we can see if the objects are the same
        console.log(students[0]._id);
        console.log(felipe._id)
    })

    // Searching an specifc person inside of the collection
    it("Find the Luis on the collection", async() =>{
        const students = await Student.findOne({_id: luis._id});
        console.log(students);
        // This will allow us to confirm that we found the Luis on the collection
        assert(students.name == 'Luis');
    })
})

