import countries from "../data/countries.js";
console.log(countries);
// Functions
// A function can be created or declared in couple of ways:
// Declaration function
// Expression function
// Anonymous function
// Arrow function

// Function Declaration with Return Value
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}

console.log(addTwoNumbers());

// Function with many parameters
function functionName(parm1, parm2, parm3) {
  console.log(parm1);
  console.log(parm2);
  console.log(parm3);
}
let [parm1, parm2, parm3] = [1, 2, 3];
functionName(parm1, parm2, parm3);

// Functions with unlimited number of parameters
// Let us access the arguments object
function sumAllNums() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
}
sumAllNums(1, 2, 3, 4);
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// But code ninja has raised that 'caller', 'callee', and 'arguments'
// properties may not be accessed on strict mode functions or the arguments
// objects for calls to them
// Therefore, I do not like this arguments object method. Use spread operator...

// Using spread operator
function sumAllNumsSpread(...args) {
  console.log(args);
}
sumAllNumsSpread(1, 2, 3, 4);
// It has the same logic as in Python *args.
// Take note that arrow functions do not have the arguments properties so you
// can only do it like this.
const sumAllNumsSpreadArrow = (...args) => {
  console.log(args);
};
sumAllNumsSpreadArrow(1, 2, 3, 4);

// Anonymous function without name
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in \
    anonymousFun"
  );
};
anonymousFun();
// Anonymous function with parameter
const anonymousFunWithParameter = function (n) {
  return n * n;
};
console.log(anonymousFunWithParameter(2));

// Self Invoking Functions
// Also known as IIFE (Immediately Invoked Function Expression)
// This is a JS function that runs as soon as it is defined.
/* Structure of IIFE
(function () {
  
})();

(() => {

})();

(async () => {

})();
*/
// It helps prevent polluting the global namespace as they are executed
// and we don't need to use it again. So this is good for stuff that we will not
// use again.
// How to write: You surround it with parenthesis and then if they have
// arguments, you put them in brackets outside.
(function (n) {
  console.log(n * n);
})(2);
// 4, but instead of just printing if we want to return and store the data,
// we do as shown below
let squaredNum = (function (n) {
  return n * n;
})(10);
console.log(squaredNum);
// Put the value in brackets outside
let multipleTogether = ((a, b) => {
  return a * b;
})(2, 3);
console.log(multipleTogether);
// So i guess that this is good for when you write setup code that you
// will only run once.

// Arrow Function
// If functions take one argument, you can leave out the brackets, but most
// code linter will put the brackets in.
const square = (n) => n * n; // You can also write it in one line
console.log(square(2));

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};
const countries2 = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries2));
// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(printFullName("Asabeneh", "Yetayeh"));

// Function with default parameters
// Basically same as python and default arguments use arrow.
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}
console.log(greetings());
console.log(greetings("Asabeneh"));

// You can also do the same with arrow functions
const greetings2 = (name = "Peter") => {
  let message = name + ", welcome to 30 Days Of JavaScript!";
  return message;
};
console.log(greetings2());
console.log(greetings2("Asabeneh"));

// Exercise 3
// Write a function called reverseCountries, it takes countries array and copies
// it and return the reverse of the original array
const reverseArray = (arr) => {
  let copyArr = arr.slice();
  return copyArr.reverse();
};
console.log(reverseArray(countries2));
