import countries from "../data/countries_data.js";
console.log(countries);
/* Sets: Unique elements */
const companies = new Set(); // creates an empty set
console.log(companies);

// Creating a set from an array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Sets are iterables. So can apply functional methods that apply to array to
// sets too.
for (const language of setOfLanguages) {
  console.log(language);
}

// Adding an element to a set
console.log(companies.size); // 0, you find length using size in Set
companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size); // 5 elements in the set
console.log(companies);

// Deleting an element in a set using delete method
console.log(companies.delete("Google")); // returns True
console.log(companies.size); // 4 elements left in the set

// Checking if an element is in the set: returns boolean
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

// Clearing the set using clear method
companies.clear();
console.log(companies);

// Using set to count unique items in an array.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

// Set operations in JS is not implemented like they are in Python
// Union of sets: Use spread operator on arrays you want to union into a set
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

// Intersection of sets: Can be achieved using filter
let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4];

let A1 = new Set(a1); // A1 is not needed actually.
let B1 = new Set(b1);

let c1 = a1.filter((num) => B1.has(num)); // notice B1 is the set
let C1 = new Set(c1);
console.log(C1);

// Difference of sets: Can be achieve using filter too with a
// different predicate.
let c2 = a1.filter((num) => !B1.has(num));
let C2 = new Set(c2);
console.log(C2);
// Remember that difference is not commutative.

/* Map: Where the keys need quotes */
// Map holds key-value pairs and remembers the original insertion order of the
// keys. Both objects and primitive values may be used as key or a value.
const map = new Map(); // creating an empty map
console.log(map);

// Creating a map from an array. The array must be pairs of values.
let countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map2 = new Map(countries2);
console.log(map2);
console.log(map2.size); // use size to get size of map.
/* take note that the map in console tools will show like this...
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
*/

// Add values to the map using the set method
map2.set("Jonkoping", "Netherlands"); // takes a (key, value) pair like this.
console.log(map2);

// Getting a value from Map, use get
console.log(map2.get("Finland"));

// Checking key in Map
console.log(map2.has("Finland"));

// Iterating through a map
for (const country of map2) {
  console.log(country);
  // this will get each key value pair as a tuple
}
// can use destructuring syntax in loop to get the key and value
for (const [country, country2] of map2) {
  console.log(country);
  console.log(country2);
}

// Exercise 3
// Getting total amount of languages
let uniqueLanguages = new Set();
for (const data of countries) {
  data.languages.forEach((lang) => {
    uniqueLanguages.add(lang);
  });
}
console.log(uniqueLanguages.size);

// Find top 10 most spoken languages
function defaultMap(map, key) {
  if (map.get(key)) {
    map.set(key, map.get(key) + 1);
  } else {
    map.set(key, 1);
  }
}
let mapOfLanguagesCount = new Map();
for (const data of countries) {
  data.languages.forEach((lang) => {
    defaultMap(mapOfLanguagesCount, lang);
  });
}
console.log(mapOfLanguagesCount);
mapOfLanguagesCount = new Map(
  [...mapOfLanguagesCount.entries()].sort((a, b) => b[1] - a[1])
);
// To sort a map by the value, you have to use entries to get a iterator return
// which will yield each pair of key, value when you call next. Then you need to
// use spread operator to make it become a array of entries. Then apply sort to
// Array as sort only works with array, applying a comparator. Then turn this
// back into a Map.
console.log(mapOfLanguagesCount);
