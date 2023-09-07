const fruits = ['apple', 'orange', 'pear', 'banana'];

console.log(fruits);
console.log(fruits[1]);

fruits[5] = 'grape';
fruits.push('mango');
fruits.unshift('strawberry');

console.log(fruits);

fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('pear'));

// indexOf return -1 if there is no such element
console.log(fruits.indexOf('mango'));
console.log(Array.isArray(fruits));