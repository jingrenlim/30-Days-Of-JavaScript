import countries from "../data/countries_data.js";
console.log(countries);

/* Objects */
// Scope
// Variables can be declared globally or locally. Anything that is not declared
// by let, var or const is scoped at global level.

// Global scope
let a = "Javascript";
let b = 10;
function letsLearnScope() {
  // has access to global scope variables.
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b);
letsLearnScope();

// Local scope
// Which can be divided to either Block scope or Function scope
// Basically, you can only access variables in the same scope.
function localScope() {
  console.log(a, b);
  let c = 3;
  console.log(c);
}
localScope();
// console.log(c); will result in an error as it cannot access c in the
// function.

// A variable declared with var only scoped to function but variable declared
// with let or const is block scoped. Block in JS is a code in between two curly
// brackets.
// Demonstration of Function scope by var
function letsLearnScope3() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3
// notice that var can referenced outside of the block. let and const won't
// be able to reference outside of the block as they are block scope.
// A variable declared with var only scoped to function but variable
// declared with let or const is block scope (function block, if block,
// loop block, etc).
// Block in JavaScript is a code in between two curly brackets({}).

// In ES6 and above there is let and const, so you will not suffer from
// the sneakiness of var. When we use let our variable is block scoped
// and it will not infect other parts of our code.
// The scope of let and const are the same. The difference is only reassigning.
// We cannot change or ressign the value of const variable. Use let for any
// value which will change and const for any constant value and for any array,
// object, arrow function and function expression (basically mutable references)

/* Objects */
// Everything can be an object and objects do have properties and properties
// have values, so an object is a key value pair. The order of the key is not
// reserved and there is no order. To create an object literal, we use two
// curly brackets. The keys do not need quotes...

const emptyObject = {};
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person);

// Accessing the values in an object.
// dot notation if key name is one word.
// square brackets and quotes
console.log(person.age);
console.log(person["age"]);

// Creating object methods. Within an object, we can create methods
// where the method name is the key.
// use this to reference the instance of the object.
// refer to getFullName method of above object.
console.log(person.getFullName());

// Setting new key for an object.
// Can use dot notation or square brackets. I guess dot notation is
// very javascript.
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;
person["isMarried"] = false;

// Object Methods
// 1. Object.assign
// To copy an object without modifying the original object. Take note this
// creates a shallow copy as it copies Object values.
const copyPerson = Object.assign({}, person);
console.log(copyPerson);
// Javascript methods --> spread syntax, Array.prototype.concat()
// Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()
// One way to make a deep copy of a JS object, at least if the object can be
// serialised, is to use JSON.stringify() to convert the object to a JSON string
// and then JSON.parse() to convert the string back into a completely new JS
// object.
// Creating deep copy
const copyPersonDeepCopy = JSON.parse(JSON.stringify(person));
console.log(copyPersonDeepCopy);
// This new object will now not share any reference with the original object.

// 2. Object.keys: Get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys);
//['firstName', 'age', 'country','city', 'skills', 'title',
// 'address', 'getPersonInfo']

// 3. Object.values: Get the values of an object as an array
const values = Object.values(copyPerson);
console.log(values);

// 4. Object.entries: To get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);
// It returns the results in an array of arrays of key value pairs.

// 5. hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
console.log(copyPerson.hasOwnProperty("isMarried"));

// Exercise: Level 3:
const personAccount = {
  firstName: "some name",
  lastName: "some last name",
  incomes: [345, 1111, 1234, 456],
  expenses: [456, 357, 89, 12, 11],

  // take note that these have to be functions if you want to have access to
  // this keyword. Arrow functions do not have access to this.
  totalIncome: function () {
    return this.incomes.reduce((a, b) => a + b);
  },
  totalExpenses: function () {
    return this.expenses.reduce((a, b) => a + b);
  },
  noReferenceToThis: () => {
    return "If you do not need this then arrow is fine.";
  },
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log(personAccount.noReferenceToThis());
