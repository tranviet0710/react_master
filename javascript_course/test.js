// var x = 5;
// function test() {
//     console.log(x);
//     var x = 10;
// }
// test();


// const test2 = (arguments) => {
//     console.log(arguments);
// }
// test2(1, 2, 3);


// function test3() {
//     console.log(arguments);
// }
// test3(1, 2, 3);

// function test4() {
//     function test5() {
//         console.log(username);
//     }
//     var username = "vietdev";
// }

// test(4);

// function test6() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// test6();


// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(2)(6)(1));

function evaluate(operation) {

    return (a) => {
        return (b) => {
            if (operation == "sum") return a + b;
            else if (operation == "multiply") return a * b;
            else if (operation == "divide") return a / b;
            else if (operation == "subtract") return a - b;
            else return "Invalid operation";
        }
    }

}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("subtract")(4)(2));