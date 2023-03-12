// Declaring different variables of different data types
// Introduction of Data types
// Primitive datatypes in JS: String, Number, Boolean, undefined, Null and
// Symbol.

// Numbers are Integers and Floats.
// Strings are a collection of one or more characters between
// two single quotes, double quotes or backticks.
// Booleans are either True or False.
// Undefined: In JS, if we don't assign a value to a variable, the value
// is undefined. In addition to that, if a function is not returning anything.
// It returns undefined.
// Null: Null in Javascript means an empty value.

// To check datatypes of a certain variable, use typeof operator.
const firstName = "Asabeneh"; // first name of a person
console.log(typeof firstName);
const lastName = "Yetayeh"; // last name of a person
const country = "Finland"; // country
const city = "Helsinki"; // capital city
const age = 100; // age in years
const isMarried = true;

// Declaring variables with number values
const gravity = 9.81; // earth gravity  in m/s2
const boilingPoint = 100; // water boiling point, temperature in oC
const PI = 3.14; // geometrical constant

// Variables can also be declaring in one line separated by comma
// but ESLint and Prettier will prevent me from doing so and this is also
// not recommended.
const name = "Asabeneh"; // name of a person
const job = "teacher";
const live = "Finland";

/*
Variables are containers of data. When a variable is declared using var, let and const, a memory location is assigned and the memory space is filled with that data. Let and const are recommended to be used over var.

A valid JS variable name must follow the following rules:
- A JS variable name must not begin with a number.
- A JS variable name does not allow special characters except dollar sign and underscore.
- A JS variable name follows camelCase convention. Except classes use PascalCase.
- A JS variable name should not have space between words.
*/
// export the variables to be imported in main.js
export {
  firstName,
  lastName,
  country,
  city,
  age,
  isMarried,
  gravity,
  boilingPoint,
  PI,
  name,
  job,
  live,
};
