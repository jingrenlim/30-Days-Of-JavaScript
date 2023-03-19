// In JS, datatypes can be divided into primitive data types and
// non - primitive data types. (object references)

// Primitive DataTypes - Immutable
// Number - Integers, floats. Strings - Any data under single quote, double
// quotes or back tick quote. Booleans - true or false value. Null - empty
// value or no value. Undefined - a declared variable without a value.
// Symbol - A unique value that can genrated by Symbol constructor.
// Symbol value returned is gaurenteed to be unique.

// Non-primitive DataTypes - Mutable
// Objects
// Arrays
let word = "JavaScript";
export default word;
// we dont' modify string
// we don't do like this, word[0] = 'Y' --> an error will be raised.
export let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

export let js = "JavaScript";
export let py = "Python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false
