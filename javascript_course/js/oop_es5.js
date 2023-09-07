function Person(pfirstName, plastName, pdateOfBirth) {
    this.firstName = pfirstName;
    this.lastName = plastName;
    this.dateOfBirth = new Date(pdateOfBirth);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}


Person.prototype.getDateOfBirth = function () {
    return this.dateOfBirth;
}

const person1 = new Person('Tran', 'Viet', '10-7-2001');
const person2 = new Person('Pham', 'Nguyen', '09-13-2001');

console.log(person1);
console.log(person2);