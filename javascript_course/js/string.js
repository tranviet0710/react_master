const name = 'Viet';
const age = 22;

console.log('My name is ' + name + ' and i am ' + age);
// We dont use this concatenaton anymore
// Pain in the ass

// With es6, es2015 we use template string
const hello = `My name is ${name} and i am ${age}`;
console.log(hello);


const str = "My name is Viet";

console.log(str.length);
console.log(str.toUpperCase())
console.log(str.substring(0, 7).toLowerCase());