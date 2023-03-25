import countries from "../data/countries.js";
console.log(countries);
// Take note that for the above, the reason why we do not need to import
// countries is because of the CommonJS stuff. In the html script, the
// data/countries.js script is loaded before the main.js so therefore,
// it knows about the countries variable.
// However, I think it would be better to do the ES6 import/export syntax.
// Would be clearer and more explicit.

// Arrays
// Each value in an array has an index, and each index has a reference in a
// memory address. Each value can be accessed using their indexes. Starts from
// zero and the last index is -1 <-- BUT you have to use the at() to get it.
// JS arrays are objects and therefore, array[-1] = "something" will set the
// minus one property to "something" which is why negative index do not work in
// JS
/* What is meant by arrays are objects in JS...
var array = [1, 2, 3];

array[-1] = 42; Set 42 to the -1 key.

console.log(array); will print out [1, 2, 3]
console.log(array[-1]); will print out 42
*/
// So therefore, unless using at() method, JS indexes are positive only.
// Negative index do not work.
// As JS is dynamic language, the array can store values of different type.
const arr = Array();
const arr1 = []; // recommended.

// Create arrays with initialised values.
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"];
// array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
// array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"];
// array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
// array of web technologies
const countries2 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// array of strings, countries

// Print the array and its length
console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries2);
console.log("Number of countries:", countries2.length);

const arr3 = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr3);

// Creating an array using split
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Accessing array using index
let fruits2 = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits2[0]; // we are accessing the first item using its index

console.log(firstFruit); // banana

let secondFruit = fruits2[1];
console.log(secondFruit); // orange

let lastFruit = fruits2[3];
let lastFruitMinusOne = fruits2.at(-1);
// using negative indexes counting from the back of array is only supported
// if using array.at()
console.log(lastFruit); // lemon
console.log(lastFruitMinusOne);

// Last index can be calculated as follows
let lastIndex = fruits2.length - 1;
lastFruit = fruits2[lastIndex];
console.log(lastFruit); // lemon

const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers2.length); // => to know the size of the array, which is 6
console.log(numbers2); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers2[0]); //  -> 0
console.log(numbers2[5]); //  -> 100

let lastIndex2 = numbers.length - 1;
console.log(numbers[lastIndex2]); // -> 100

// Modifying array element
// An array is mutable (modifiable).
const numbers3 = [1, 2, 3, 4, 5];
numbers3[0] = 10; // changing 1 at index 0 to 10
numbers3[1] = 20; // changing  2 at index 1 to 20

console.log(numbers3); // [10, 20, 3, 4, 5]

const countries3 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries3[0] = "Afghanistan"; // Replacing Albania by Afghanistan
lastIndex = countries3.length - 1;
countries3[lastIndex] = "Korea"; // Replacing Kenya by Korea

console.log(countries3);

// Methods to manipulate array
// Array constructor
const arr2 = Array(); // creates an an empty array
console.log(arr2);

const eightEmptyValues = Array(8);
// it creates eight empty values, 8 undefined values
console.log(eightEmptyValues); // [empty x 8]

// fill
const eightXvalues = Array(8).fill("X");
// it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0);
// it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4);
// it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]

// concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// length
const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5.length); // -> 5 is the size of the array

// indexOf: To check if an item exist in an array. Returns -1 if does not exist
const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.indexOf(5)); // -> 4
console.log(numbers4.indexOf(0)); // -> -1
console.log(numbers4.indexOf(1)); // -> 0
console.log(numbers4.indexOf(6)); // -> -1

// lastIndexOf: Finds items in array but if multiple exist, it will give the
// last item index in the array.
const numbers7 = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers7.lastIndexOf(2)); // 7
console.log(numbers7.lastIndexOf(0)); // -1

console.log(numbers7.lastIndexOf(1)); //  6
console.log(numbers7.indexOf(1)); //  6
// basically indexOf will return the first instance position. even if there are
// multiple...
// lastIndexOf will return the last instance position.
console.log(numbers7.lastIndexOf(4)); //  3
console.log(numbers7.lastIndexOf(6)); // -1

// includes: To check if an item exist in an array. If exist, return true else
// return False.
const numbers8 = [1, 2, 3, 4, 5];
console.log(numbers8.includes(5)); // true
console.log(numbers8.includes(0)); // false
console.log(numbers8.includes(1)); // true
console.log(numbers8.includes(6)); // false

const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs2.includes("Node")); // true
console.log(webTechs2.includes("C")); // false

// Checking if datatype is array
const numbers12 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers12)); // true
const number12 = 100;
console.log(Array.isArray(number12)); // false

// Converting array to string
// toString
const numbers34 = [1, 2, 3, 4, 5];
console.log(numbers34.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// join: joining array elements. by default, it joins via commas.
const numbers23 = [1, 2, 3, 4, 5];
console.log(numbers23.join()); // 1,2,3,4,5

const names23 = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names23.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names23.join("")); //AsabenehMathiasEliasBrook
console.log(names23.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names23.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names23.join(" # ")); //Asabeneh # Mathias # Elias # Brook

const webTechs23 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs23.join());
// "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs23.join(" # "));
// "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice: Takes a starting index and ending index (exclusive).
// It creates a new list.
const arrayTest = [1, 2, 3, 4, 5];
console.log(arrayTest.slice()); // it copies all item
console.log(arrayTest.slice(0)); // it copies all item
console.log(arrayTest.slice(1, 4)); // [2, 3, 4]
console.log(arrayTest.slice(0, arrayTest.length)); // it copies all item
console.log(arrayTest); // [1, 2, 3, 4, 5], which is why it returns new array

// Splice: Takes three parameters
// Starting position, number of times to be removed, number of items to be added
// It is inplace and modifies the array.
let numbers56 = [1, 2, 3, 4, 5];
numbers56.splice();
console.log(numbers56); // -> does nothing
// As start position is omitted, it will be 0 but, there is no deleteCount so
// nothing is done.

const numbers78 = [1, 2, 3, 4, 5];
numbers78.splice(0, 1);
console.log(numbers78); // remove the first item

const numbers79 = [1, 2, 3, 4, 5, 6];
numbers79.splice(3, 3, 7, 8, 9);
console.log(numbers79);
// -> [1, 2, 3, 7, 8, 9], it removes three item and replace three items
// Take note that the deletecount counts the first element at the index in
// the first argument.

// Standard methods to add and remove stuff from array. JS arrays are built in
// queues already.
// push: adding item in the end
// pop: removing item in the end
// shift: removing one element from the beginning of the array
// unshift: adding an element to the front of the array

// sort: takes a comparator/callback
// There is reverse() too. Both are inplace (returns a reference to the array).
const webTechs35 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs35.sort();
console.log(webTechs35);
// ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs35.reverse(); // after sorting we can reverse it
console.log(webTechs35);
// ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// sort takes a comparator
webTechs35.sort((a, b) => (a - b > 1 ? 1 : -1));
console.log(webTechs35);
// a is first element, b is second element, if a - b > 1 means a should be
// placed after b, else if negative then a should be before b.
// If you reverse the return results then, it will be same as reversed().
// Basically, a - b is more than 1, and returns 1, then is like ascending order.

// Array can be array of arrays
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
// [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

// Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort ages
ages.sort((a, b) => (a - b >= 1 ? 1 : -1)); // Take note that you need equals
// to here so that it will account for the case where they are equal
ages.sort((a, b) => {
  if (a - b > 1) {
    return 1;
  } else if (a - b < 1) {
    return -1;
  } else {
    return 0;
  }
});
console.log(ages);
const max = ages.at(-1);
console.log(max);
const min = ages[0];
console.log(min);

// Finding median age
const findingMedian = (array) => {
  if (array.length % 2 == 0) {
    return array[array.length / 2];
  } else {
    const num = array.length / 2;
    const floormid = Math.floor(num);
    const ceilmid = Math.ceil(num);
    return (array[floormid] + array[ceilmid]) / 2;
  }
};
console.log(findingMedian(ages));

// Finding average age
const average = ages.reduce((a, b) => a + b) / ages.length;
console.log(average);
// Finding range of ages
console.log(max - min);
// Compare the value of (min - average) and (max - average), use abs() method.
const someFormula = Math.abs(min - average) - Math.abs(max - average);
console.log(someFormula.toFixed(2));
