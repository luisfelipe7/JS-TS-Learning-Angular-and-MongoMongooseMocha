// Mocha starts and tell Mongoose to connect to Mongo

// Here we are going to make the connection and make sure to verify if the connection is successful

// Creating the library to connect to Mongoose
const mongoose = require('mongoose');
// Connecting 
mongoose.connect("mongodb://localhost/students_test", { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occurred", error);
    })

// We need to drop the database before any tests are run 
beforeEach((done) => {
    mongoose.connection.collections.students.drop();
    done(); // With this we tell to Mocha to don't continue running until the drop is completed
    // Because Mocha is asynchronously and it will continue to apply the test while the database is being dropped
    // Dropping all the collections
    // const { students, comments, articleblogs } = mongoose.connection.collection;

    // We can't drop multiple collections at the same time, that's why we are dropping one by one
    /*students.drop(() => {
        comments.drop(() => {
            articleblogs.drop(() => {
                done()
            })
        })
    })*/
})