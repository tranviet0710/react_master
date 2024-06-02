function Person(name, age) {
  this.name = name;
  this.age = age;

  // cannot be accessed
  function sayHello() {
    console.log(`${this.name} hello world`);
  }
}

Person.prototype.sayHello = function () {
  console.log(`${this.name} hello world`);
};

Person.prototype.sayHello1 = () => {
  console.log(`${this.name} hello world`);
};

const p = new Person("Viet", 23);
p.sayHello();
p.sayHello1();
