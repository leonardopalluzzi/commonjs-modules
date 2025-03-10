/**
 * returns an object containing the first name and last name
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns {object} returns an object containing the first name and last name
 */
function names(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// export
module.exports = names;