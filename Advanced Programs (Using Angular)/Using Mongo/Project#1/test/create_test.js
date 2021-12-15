// Testing the Create Operation with MongoDB

// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");

describe("Create the first data", () => {
    it("Save the student", (done) => {
        // Mocha understands that we are trying to make a test inside of the function
        assert(2 + 3 == 5);
        // Creating student and checking if it was saved to the database
        const student1 = new Student({ name: "Luis" });
        // We need to use then to apply the rest of the code when the student1 is saved
        student1.save().then(() => {
            // Checking the flag to verify if isNew is false
            // If student1 is not new it means was saved on the database without issues
            assert(!student1.isNew);
            done(); // Don't run any other code until this is done, because it is naturally asynchronous
        })
    })
})

