// var, let, const

/* In most situations, we dont use var anymore, because variable when declared with var, 
it is global, when we declare another variable with the same name => conflict */

/* use let when the value of variable can be changed */

/* const varible can't be assigned anymore, we cannot declare const variable with no value */

const a = 10;
console.log(a)


const rating = 4.5;
console.log(typeof (rating))

const x = null;
const y = undefined;

let z;
console.log(x, y, z);
console.log(typeof (x), typeof (y), typeof (z));