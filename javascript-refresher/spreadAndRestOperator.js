// SPREAD OPERATOR
// Array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Object
const user1 = {
  name: "Viet",
  age: 23,
};
const user2 = {
  ...user1,
  job: "IT",
};
console.log(user2);

// REST OPERATOR
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));
