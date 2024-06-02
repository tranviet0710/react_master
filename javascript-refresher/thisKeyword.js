// ES6: this keyword between regular function and anonymous function
const user2 = {
  name: "Viet",
  // function scope
  nfunc: function () {
    return this.name;
  },
  // global scope
  afunc: () => {
    return this.name;
  },
};

console.log(user2.nfunc());
console.log(user2.afunc());
