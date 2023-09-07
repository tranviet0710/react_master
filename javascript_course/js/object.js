const person = {
    firstName: 'Tran',
    lastName: 'Viet',
    age: '25',
    hobbies: ['Coding', 'Music', "Soccer"],
    address: {
        street: 'Chon Tam 8',
        district: 'Lien Chieu',
        city: 'Da Nang',
    },
}

console.log(person.address);

person.email = 'trancongviet0710@gmail.com';
console.log(person);
// Destructuring assignment
const { firstName, lastName, } = person;
console.log(lastName);
console.log(firstName);

// Uncaught SyntaxError: Identifier 'age' has already been declared (at object.js:1:1)
// Conflict with the age variable declared in string.js
console.log(age);


// Convert from object to JSON
const personJSON = JSON.stringify(person);
console.log(personJSON);
// Convert from JSON to object
const person_parsed = JSON.parse(personJSON);
console.log(person_parsed);