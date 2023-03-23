// this is your main.js script
// Booleans are true or false. Arises from comparison operator.
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

// Truthy values
// All numbers (positive and negative) are truthy except zero
// All strings are truthy except an empty string (")
// The booleans true

// Falsy values
// 0
// 0n --> this is zero in bigint primitive. done by appending n to the end of
// an integer, or by calling BigInt() function without the new operator and
// giving it a integer value or string value
// null
// undefined
// NaN
// the boolean false
// '', "", `` --> empty string

// Remember that undefined in JS is if we define a variable and do not assign
// anything to it.
let firstName;
console.log(firstName); //not defined, because it is not assigned to a value yet

// Undefined is not null, null means no value
let empty = null;
console.log(empty); // -> null , means no value

// Operators
// Assignment operators =
let firstName2 = "Asabeneh";
let country = "Finland";
// There is also =, +=, -=, *=, /=, %=, **=
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.333333,1, 64

const PI = 3.14;
let radius = 100; // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); //  31400 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);

// Comparison Operators
// ==  --> Equal in value only. (equivalent)
// === --> Equal in value and data type. (exactly equal)
// != --> Not equal
// >, <, >=, <=

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// General tips in JS, always use 3 equals unless you have a good reason
// to use 2. Using === is safer.
// If a value is not true with ==, it will not be equal using ===.

// && (ampersand), || (pipe), ! (negation)
// &&: AND
// ||: OR
// !: NOT

// && ampersand operator example
let check1 = 4 > 3 && 10 > 5; // true && true -> true
check1 = 4 > 3 && 10 < 5; // true && false -> false
check1 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example
let check = 4 > 3 || 10 > 5; // true  || true -> true
check = 4 > 3 || 10 < 5; // true  || false -> true
check = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples
let check2 = 4 > 3; // true
check2 = !(4 > 3); //  false
let isLightOn2 = true;
let isLightOff2 = !isLightOn; // false
let isMarried2 = !false; // true

// Increment Operator
// pre increment:
let count = 0;
console.log(++count); // 1
console.log(count); // 1

// post increment:
count = 0;
console.log(count++); // 0
console.log(count); // 1
// I use post increment most of the time.

// Decrement Operator
// pre- decrement
count = 0;
console.log(--count); // -1
console.log(count); // -1

// post- decrement
count = 0;
console.log(count--); // 0
console.log(count); // -1

// Ternary Operators
/*
Syntax:
let ans = (condition) ? (if true result) : (if false result)
*/
let isRaining2 = true;
const result = isRaining2
  ? console.log("You need a rain coat.")
  : console.log("No need for rain coat.");
console.log(result);

// Operator Precedence in JS follows PEMDAS. (Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).)

// // Window Methods
// // alert: alert(message)
// alert("Welcome To 30 Days of JS!"); // this will actually shoot a alert onto
// // browser. Do not use too much alert because it is destructing and annoying,
// // use it just to test.

// // prompt method: prompt('required text', 'optional text')
// // first argument shows the message, second argument is the placeholder text in
// // input box.
// let number = prompt("Enter number", "number goes here");
// console.log(number);

// // confirm method
// // The confirm() method displays a dialog box with a specified message, along
// // with an OK and a Cancel button. A confirm box is often used to ask
// // permission from a user to execute something. Window confirm() takes a string
// // as an argument. Clicking the OK yields true value, whereas clicking the
// // Cancel button yields false value.
// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // result will be true or false based on what you click on the dialog box

// There are more window methods which will be covered in another section

// Date Objects
// Creating a time object. This basically initialises now().
const now = new Date();
console.log(now); // 2023-03-23T15:41:05.977Z
// The console in Devtools can apply the right timezone adjustment.
// In other words, it shows 23:47:41 GMT+0800

// Date object methods
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 2, because the month is March,  month(0-11)
console.log(now.getDate()); // 23, gets day of the month
console.log(now.getDay()); // 4, because the day is Thursday
// Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(now.getHours()); // 23, as it 23:47:41 so this adjust of timezone?
console.log(now.getMinutes()); // 50, because the time is 23:50:21
console.log(now.getSeconds()); // 53, because the time is 23:50:53
console.log(now.getTime()); // 1679586713170, this is the number of seconds
// passed from January 1, 1970 to now(). This is unix time.
// using now() gets you unix time immediately.
const allSeconds = Date.now();
console.log(allSeconds); // 1679586874908, this is the number of seconds passed
// from January 1, 1970 to now().
const timeInSeconds = new Date().getTime(); // checking equality
console.log(allSeconds == timeInSeconds); // true

// Formatting Date to human readable format
const now1 = new Date();
const year = now1.getFullYear(); // return year
const month = now1.getMonth() + 1; // return month(0 - 11)
const date = now1.getDate(); // return date (1 - 31)
const hours = now1.getHours(); // return number (0 - 23)
const minutes = now1.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 23/3/2023 23:57

// You can also get the timezone offset
const offset = now1.getTimezoneOffset();
console.log(offset); // 480. The offset is in minutes. 480 mins is 8 hours.

// Exercise: Level 3
// Create a human readable date format where the numbers are always two digits.
// padded with zero.
const two_digit = new Date();
const year1 = two_digit.getFullYear();
const month1 = String(two_digit.getMonth() + 1).padStart(2, "0");
const day1 = String(two_digit.getDate()).padStart(2, "0");
const hour1 = String(two_digit.getHours()).padStart(2, "0");
const min1 = String(two_digit.getMinutes()).padStart(2, "0");
const sec1 = String(two_digit.getSeconds());
const millisec1 = String(two_digit.getMilliseconds());
console.log(`${year1}-${month1}-${day1} ${hour1}:${min1}:${sec1}.${millisec1}`);
