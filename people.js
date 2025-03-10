//import
const names = require('./names.js');
const hobbies = require('./hobbies.js');

const hobbyList = hobbies('kickBoxing', 'cucina', 'hiking');

//destructuring
const userName = names('Luca', 'Pappolo');
const {firstName, lastName} = userName;


function person() {
    return {
        fullname: `${firstName} ${lastName}`,
        hobbies: hobbyList
    }
}

console.log(person());