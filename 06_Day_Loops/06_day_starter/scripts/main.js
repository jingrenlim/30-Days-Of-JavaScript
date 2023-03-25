import countries from "../data/countries.js";
console.log(countries);
// Loops
// for ... in loops
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

const countries2 = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries2.length; i++) {
  newArr.push(countries2[i].toUpperCase());
}
console.log(newArr);
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// 0 1 2 3 4 5

// do while loop. Will execute at least once
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);
// 0 1 2 3 4 5

// for ... or loop
// this will iterate through the elements of an array. not the index.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// break: to stop iteration
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
// 0 1 2

// continue: to continue the iteration
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
// 0 1 2 4 5

// Objects iteration
let object1 = {
  thyme: "123",
  rosemary: "234",
  tarragon: "345",
  mint: "456",
};

// Using for ... in --> This will only get the key. To get the value
// you need to use the key to get the value.
for (let index in object1) {
  console.log(index);
  console.log(object1[index]);
}

// Using for ... or
// Iterate through keys
for (let key of Object.keys(object1)) {
  console.log(key);
}

// Iterate through values
for (let value of Object.values(object1)) {
  console.log(value);
}

// Iterate through key values, the iteration needs to be let [key, value].
for (let [key, value] of Object.entries(object1)) {
  console.log(`key: ${key}, value: ${value}`);
}

// Exercise 3
let countriesCopy = countries.slice();
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);

// Extract all the countries contain the word 'land'
let landCountries = [];
for (let country of sortedCountries) {
  if (country.endsWith("land")) {
    landCountries.push(country);
  }
}
console.log(landCountries);

// Extract longest word
let longestCountry;
let countOfLength = 0;
for (let country of sortedCountries) {
  if (country.length > countOfLength) {
    countOfLength = country.length;
    longestCountry = country;
  }
}
console.log(longestCountry);

// Extract country with 4 characters
let fourLetterCountries = [];
for (let country of sortedCountries) {
  if (country.length == 4) {
    fourLetterCountries.push(country);
  }
}
console.log(fourLetterCountries);

// Extract all countries containing two or more words
let twoWordsOrMore = [];
for (let country of sortedCountries) {
  let countryArray = country.split(" ");
  if (countryArray.length > 1) {
    twoWordsOrMore.push(country);
  }
}
console.log(twoWordsOrMore);

// Reverse the country array and capitalise each country
let sortedCountriesUpper = sortedCountries
  .reverse()
  .map((word) => word.toUpperCase());
console.log(sortedCountriesUpper);
