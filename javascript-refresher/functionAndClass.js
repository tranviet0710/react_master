function greet() {
  const greeting = "hello world";
  console.log(greeting);
  return greeting;
}

const greeting = greet();
console.log(greeting);

const user = {
  name: "Viet",
  age: "23",
  greet() {
    console.log(`I am ${this.name}. I am ${this.age}`);
  },
};
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.name);
  }
}

const user1 = new User("Viet", 23);
console.log(user1);
user1.greet();
