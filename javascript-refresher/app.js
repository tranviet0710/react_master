// const user = {
//     name: 'Viet',
//     age: '21',
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     },
//     greeting: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// user.greet(); // => this.name
// user.greeting(); // => window.name

import defaultValue, { age, uni } from "./utils.js";
console.log("age: ", age);
console.log("uni: ", uni);
console.log("default: ", defaultValue);
