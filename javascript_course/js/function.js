function addNums(num1, num2) {
    return num1 + num2;
}

const arrow_addNums = (num1, num2) => {
    return num1 + num2;
}

const shorten_arrow_addNums = (num1, num2) => num1 + num2;

console.log(addNums(1, 2));
console.log(arrow_addNums(1, 2));
console.log(shorten_arrow_addNums(1, 2));


people.forEach(person => console.log(person));