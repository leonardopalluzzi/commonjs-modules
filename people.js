//import
const names = require('./names.js');
const userHobbies = require('./hobbies.js');

const hobbiesArr = userHobbies('calcio', 'cucina', 'nuoto');

//destructuring
const userName = names('Luca', 'Pappolo');
const {firstName, lastName} = userName;



function person() {
    return {
        fullname: `${firstName} ${lastName}`,
        hobbies: hobbiesArr
    }
}

console.log(person());
