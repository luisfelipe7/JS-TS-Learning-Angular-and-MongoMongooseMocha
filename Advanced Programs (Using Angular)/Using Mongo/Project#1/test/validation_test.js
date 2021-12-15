
// We need to import an assertion in order to use it 
const assert = require('assert');
// Importing the student collection, remember this represent the entire collection
const Student = require("../src/student");

// Making validations
describe('validation', () => {

    // Name is required
    it('Name is required', () => {
        // Creating a new student
        const student = new Student({ name: undefined });
        // Validating Synchronous
        const result = student.validateSync();
        // Getting the error because the name is undefined, printing the whole error:
        console.log(result);
        // Printing just the message of the error related to the name:
        const { message } = result.errors.name;
        console.log("Error Message: " + message);
        assert(message === 'Name is required')
    })

    // Name size
    it('Name must be longer than 2 characters', () => {
        const newStudent = new Student({ name: 'Em' })
        const newResult = newStudent.validateSync()
        const { message } = newResult.errors.name
        assert(message === 'Name is too short');
    })

    // Preventing invalid records
    it('Preventing invalid records', done => {
        const student = new Student({name: 'Em'})
        // Applying a try/catch to catch the error
        student.save().catch(validationResult =>{
            const { message } = validationResult.errors.name;
            assert(message === 'Name is too short')
            done()
        })
    })

})