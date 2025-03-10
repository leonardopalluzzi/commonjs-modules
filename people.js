//import
const names = require('./names.js');
const hobbies = require('./hobbies.js');


function person() {
    
    //destructuring
    const userName = names('Luca', 'Pappolo');
    const { firstName, lastName } = userName;

    //hobbies array construction
    const hobbyList = hobbies('kickBoxing', 'cucina', 'hiking');

    const personObj = {
        fullname: `${firstName} ${lastName}`,
        hobbies: hobbyList
    }

    return personObj;
}

console.log(person());