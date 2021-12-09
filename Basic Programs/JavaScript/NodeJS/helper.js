// --------------- HELPER MODULE ----------------

const logging = function (user) {
    return `${user} is logged in`
};

console.log(logging('Luis'));

// Making what we want to use as a module in another class
// You just need to use the word module and indicate the function

// EXPORTING
module.exports = logging;





// ---------- DEFINING OTHER FUNCTIONS ------------

// Simply return a welcome user message
const user = function (data) {
    return `Welcome ${data} to our system`;
};

// Simply return an id
let id = function (id) {
    return `${id}`;
}
// Simply return email
let email = function (email) {
    return `${email}`;
}

// EXPORTING  multiple functions
// Old Way
// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;
// New Way
 module.exports={
    user,
    id,
    email,
    logging
}; 
