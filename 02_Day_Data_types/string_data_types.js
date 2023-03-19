// Strings are texts, which are single, double, back-tick quotes.
let space = ""; // an empty space string
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying, 'Seeing is Believing' is not correct in 2020.";
let quoteWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2020.`;

// I put all the stuff in string_methods in here... all combined into here
// Everything in Javascript is an object. Strings are immutable. Below will
// detail the strings available...

// 1. length - returns the number of chars in string including empty spaces
let js = "JavaScript";
console.log(js.length); // 10
firstName = "Asabeneh";
console.log(firstName.length); // 8

// Accessing characters in a string. We can access each char in a string using
// its index. Count starts from 0.
let string = "JavaScript";
let firstLetter = string[0];
console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];
console.log(lastLetter); // t

let lastIndex = string.length - 1;
console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

// toUpperCase() and toLowerCase(): self- explanatory
string = "JavaScript";
console.log(string.toUpperCase()); // JAVASCRIPT
firstName = "Asabeneh";
console.log(firstName.toUpperCase()); // ASABENEH
country = "Finland";
console.log(country.toUpperCase()); // FINLAND
// toLowerCase()
console.log(string.toLowerCase()); // javascript
console.log(firstName.toLowerCase()); // asabeneh
console.log(country.toLowerCase()); // finland

// substr() - this is a deprecated method from most browsers use substring
// instead. It takes two arguments, the first argument is the starting index,
// then the second index is the number of characters to include (it starts
// counting from the first character defined by first argument as 1 - one
// index). If second argument is larger than the entire string, it will
// take the entire string.
console.log(string.substr(4, 6)); // Script
console.log(country.substr(3, 4)); // land

// substring(): It takes two arguments, the starting index and stopping index
// but it excludes the stopping index. If second argument is not provided, it
// will extend to the end. If second argument is larger then word, it will
// take the entire string.
// Use this instead of substr...
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land

// split(): splits a string into an array.
// Can take regular expression, a string sequence. If undefined is passed in
// it will return an array with the single string in the array.
let string4 = "30 days of Javascript";
console.log(string4.split());
// Changes to an array -> ["30 Days Of JavaScript"]
console.log(string4.split(" "));
// Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(string4.split("")); // undefined is not the same as empty string
/* will split each letter, [
  '3', '0', ' ', 'd', 'a',
  'y', 's', ' ', 'o', 'f',
  ' ', 'J', 'a', 'v', 'a',
  's', 'c', 'r', 'i', 'p',
  't'
]
*/
// using a regex
console.log(string4.split(/\s/));
// Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// trim(): remove trailing spaces in the beginning or end of the string
// there is trimStart and trimEnd
firstName = "    whitespaces   ";
console.log(firstName.trim()); // whitespaces

// includes(): it takes a substring argument and it checks if substring
// argument exists in the string. it returns a boolean.
console.log(string4.includes("Days")); // false - it is case sensitive!
console.log(string4.includes("days")); // true
console.log(string4.includes("Script")); // false
console.log(string4.includes("script")); // true
console.log(string4.includes("java")); // false
console.log(string4.includes("Java")); // true

// replace(): takes a parameter the old substring and a new substring
// returns new string
console.log(string4.replace("Javascript", "Python")); // 30 Days Of Python
console.log(string4); // 30 days of Javascript, as it returns a new string
// it does not change the string.
// If the oldsubstring argument does not exist, then nothing happens.

// charAt(): Takes index and return the value at the index.
console.log(string4.charAt(0)); // 3
lastIndex = string4.length - 1; // rmb that length needs to minus one
console.log(string4.charAt(lastIndex)); // t

// charCodeAt(): Takes index and it returns char code (ASCII number) at that
// index
console.log(string4.charCodeAt(3)); // d ASCII number is 100
console.log(string4.charCodeAt(lastIndex)); // t ASCII is 116

// indexOf(): Takes a substring and if the substring exist, it returns the first
// position of the substring. If it does not exist, then it returns -1.
console.log(string4.indexOf("d")); // 3
console.log(string4.indexOf("days")); // 3
console.log(string4.indexOf("Days")); // -1
console.log(string4.indexOf("a")); // 4
console.log(string4.indexOf("Javascript")); // 11
console.log(string4.indexOf("script")); // 15
console.log(string4.indexOf("Script")); // -1

// lastIndexOf(): Takes a substring and if the substring exists in a string, it
// returns the last position of the substring if it does not exist it returns
// -1. Take note that it returns the last occurrance of the substring.
let string5 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string5.lastIndexOf("love")); // 67
console.log(string5.lastIndexOf("you")); // 63
console.log(string5.lastIndexOf("JavaScript")); // 38

// concat(): It takes many substrings and joins them. Returns new string.
string = "30";
console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

// startsWith(): takes a substring as an argument and it checks if the string
// starts with that specified string. Returns a boolean.
string = "Love is the best to in this world";

console.log(string.startsWith("Love")); // true
console.log(string.startsWith("love")); // false, it is case sensitive.
console.log(string.startsWith("world")); // false

// endsWith(): takes a substring as an argument and it checks if the string
// ends with that specified substring.It returns a boolean(true or false).
string = "Love is the most powerful feeling in the world";

console.log(string.endsWith("world")); // true
console.log(string.endsWith("love")); // false
console.log(string.endsWith("in the world")); // true

// search: it can take a substring as an argument and it returns the index of
// the first match. The search value can be a string or a regular expression.
// it returns the first occurance only.
string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string.search("love")); // 2
console.log(string.search(/javascript/gi)); // 7

// match: it takes a substring or regex as an argument and it returns an array
// if there is match if not it returns null.
let string8 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string8.match("love"));
/*
[
  'love',
  index: 2,
  input: 'I love JavaScript. If you do not love JavaScript what else can you love.',
  groups: undefined
]
*/
console.log(string8.match(/love/gi)); // returns ["love", "love", "love"]

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d/g;
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx));
// ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g));
// ["2019", "30", "2020"]

// repeat(): it just repeats the string.
string = "love";
console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
