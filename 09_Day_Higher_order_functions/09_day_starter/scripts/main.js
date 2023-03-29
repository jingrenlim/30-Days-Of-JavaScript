import countries from "../data/countries_data.js";
console.log(countries);
let countriesName = countries.map((obj) => obj.name);
console.log(countriesName);

// Higher order functions
// Functions which take other functions as a parameter or return a function as
// a value.
// 1. Callback
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));

// 2. Functions that return functions
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));
// This is similar to decorators and you chain the input arguments.

// forEach takes a callback. --> application of callbacks
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));

/* Setting Time */
// - setInterval
// - setTimeout

// 1. setInterval - takes a callback and a duration as parameter.
// duration is in milliseconds and the callback will be always called in
// that interval of time.
function sayHello() {
  console.log("Hello");
}
let intervalId = setInterval(sayHello, 1000); // 1000 milliseconds is 1 second.
// Take note that above will repeat sayHello every 1 second. To stop it,
// setInterval will return an interval ID. Call clearInterval() on it.
clearInterval(intervalId); // this will stop it from runnning at 1 second
// interval forever.

// 2. setTimeout. Same as setInterval but it only does it one time.
function sayHello2() {
  console.log("Hello!");
}
let timeoutId = setTimeout(sayHello2, 2000);
clearTimeout(timeoutId); // setTimeout is cancelled by clearTimeout.
// If called immediately in this way, then Hello! just would not be printed out
// at all as it will be cancelled immediately. Same as setInterval, duration is
// in milliseconds.

/* Functional Programming */
// All of them take callbacks. All of them return new arrays. Do not mutate
// original input.

// 1. forEach: Does something to each element.
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => console.log(num));
numbers2.forEach((num) => (sum += num));
console.log(sum);

// 2. map: Iterate through each element in an array and returns a new array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const numbersSquare = numbers2.map((num) => num * num);
console.log(numbersSquare);

// 3. filter: Takes a predicate. Filter out items which fulfull filtering
// condition and return a new array.
const countriesEndsByia = countriesName.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndsByia);
const countriesContainingLand = countriesName.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// 4. reduce: Takes a callback. The callback takes accumulator, current and
// optional initial value as a parameter and returns a single value. It is a
// good practice to define an initial value for the accumulator. If left out,
// by default, accumulator will take the array first value. If array is empty,
// JS will throw an error.
const numbers3 = [1, 2, 3, 4, 5];
const sum2 = numbers3.reduce((acc, cur) => acc + cur, 0); // the second argument
// is the initial value and becomes the accumulator.
console.log(sum2);

// 5. every: Check if all the elements are similar in one aspect. It returns a
// boolean. Takes a predicate. Basically all.
const names4 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names4.every((name) => typeof name === "string");
// Are all strings?
console.log(areAllStr);

// 6. find: Returns the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log(age);

const score3 = scores.find((user) => user.score > 98);
console.log(score3);

// 7. findIndex: Return the position of the first element which satisfies the
// condition.
const names5 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages5 = [24, 22, 25, 32, 35, 18];

const result = names5.findIndex((name) => name.length > 7);
console.log(result); // 0
const age5 = ages5.findIndex((age) => age < 20);
console.log(age5); // 5

// 8. Checks if any of the elements are similar in one aspect. It returns a
// boolean. Basically any
const names7 = ["Asabeneh", 789, "Elias", "Brook"];
const bools = [true, false, true, true];

const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue); //true

const areAllStr7 = names7.some((name) => typeof name === "number");
// Are all strings ?
console.log(areAllStr7); // false

// 9. sort: Takes a comparator. By default, sort sort values as strings. This
// will work well for string arrays but for numbers it will give us the wrong
// answer. Sort method modifies the original array. Hence, might be good to make
// a copy before you start using sort method.

// Sorting string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());
// ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

// Sorting numerical arrays
const numbers23 = [100, 9.81, 23, 21, 4, 37, 58.9, 91];
// If positive, then return 1 and if negative then return -1 and same return 0
// is ascending order.
console.log(numbers23.sort());
// the above will sort 100 to the front as it will convert them to strings and
// sort them in its natural order which is alphanumerically.
// To solve it, we provide a callback.
// Sort in ascending order.
numbers23.sort((a, b) => {
  return a - b; // first minus second is positive. then is positive is implied.
}); // then put a after b
console.log(numbers23);
// Sort in reverse order
numbers23.sort((a, b) => {
  return b - a;
}); // if second minus first is positive, then put a after b.
console.log(numbers23);
/* The full sort comparator structure
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  a must be equal to b
  return 0;
}
*/

// Sorting Object Arrays
// Use the object keys as comparison.
// dot notation and bracket both works.
// Sorting the countries object array in ascending name length.
// so the a and b in the comparator are objects.
const nameInAscending = countries.sort((a, b) => {
  return a.name.length - b.name.length;
});
console.log(nameInAscending);
// Fully written out
const nameInAscending2 = countries.sort((a, b) => {
  if (a.name.length > b.name.length) {
    return 1;
  } else if (a.name.length < b.name.length) {
    return -1;
  } else {
    return 0;
  }
});
console.log(nameInAscending2);
