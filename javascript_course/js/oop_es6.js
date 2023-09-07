class Human {
    constructor(pfirstName, plastName, pdateOfBirth) {
        this.firstName = pfirstName;
        this.lastName = plastName;
        this.dateOfBirth = new Date(pdateOfBirth);
    }
    getDateOfBirth() {
        return this.dateOfBirth;

    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;

    }
}

const human1 = new Human('Tran', 'Viet', '10-7-2001');
const human2 = new Human('Pham', 'Nguyen', '09-13-2001');

console.log(human1);
console.log(human2);