import countries from "../data/countries_data.js";
console.log(countries);

// Destructuring and Spread
/* Destructuring Arrays */
// Unpacking arrays and objects.
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

// What if the unpacking does not match up.
// [numOne, numTwo, numThree, numFour] = numbers;
// This will raise a ReferenceError when the match does not work.
// console.log(numOne, numTwo, numThree);

// You can also apply the unpack arrays.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

// If you want to skip on the values in the array, use additional comma.
const names = ["Asabeneh", "Brook", "David", "John"];
let [, secondPerson, , fourthPerson] = names;
// first and third person is omitted
console.log(secondPerson, fourthPerson);

// We can use default value in case the value of array for that index is
// undefined. Default value use equal sign. Can use default values when the
// values are mismatched.
let names3 = [undefined, "Brook", "David"];
let [
  firstPerson = "Asabeneh", // this equal sign is default
  secondPerson2,
  thirdPerson,
  fourthPerson4 = "John", // this means that when destructuring is mismatched
  // the value returned is undefined so you can use a default
  fifthPerson = "Sarah",
] = names3;
console.log(
  firstPerson,
  secondPerson2,
  thirdPerson,
  fourthPerson4,
  fifthPerson
);

// When we do not destructure all the variables in an array, use the spread
// operator.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3); // this will get first three
console.log(rest); // this will get the rest of the variables.

/* Destructuring during iteration */
// You can basically destructure like in python during iteration.
const countries3 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
for (const [country, city] of countries3) {
  console.log(country, city);
}
// If the destructuring doesn't match up, it cannot extend over more but can be
// lesser.
const fullStack4 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const [first, second, third] of fullStack4) {
  console.log(first, second, third);
  // "HTML", "CSS", "JS"
  // "Node", "Express", "MongoDB"
}
// This will print out the first three elements of each list in fullStack4.
/* Destructuring Objects */
// Use the key or property of the object with curly braces
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// Renaming during destructuring, put the new variables as the key in the
// destructuring syntax.
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// If the key is not found, the variable will be assigned to undefined. We can
// also give a default value during declaration
const rectangle2 = {
  width1: 20,
  height1: 10,
  area1: 200,
};
let { width1, height1, area1, perimeter1 = 60 } = rectangle2;
console.log(width1, height1, area1, perimeter1); //20 10 200 60
// perimeter1 is not a key of rectangle2 and will be assigned a default of 60

// If the key is available, then it will take the value in the object.
const rectangle3 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80,
};
let { width2, height2, area2, perimeter2 = 60 } = rectangle3;
console.log(width2, height2, area2, perimeter2); // 30, 10, 200, 80 instead
// and not 60 as perimeter2 is actually in the object.

/* Destructuring keys as a function parameter. */
// This example is without destructuring, you just mention the object key via
// dot notation.
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calculatePerimeter(rect)); // 60
// With destructuring, the keys have to match up to the destructuring in the
// keyword argument.
const calculatePerimeter3 = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeter3(rect)); // also 60

// Destructuring object during iteration, make sure the keys match up and use
// curly braces.
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];
// The true default here is of course never used as they all have completed key.
for (const { task, time, completed = true } of todoList) {
  console.log(task, time, completed);
}

// Spread or Rest operator.
// We use (...) in array spread to get the rest element as an array. In other
// words, we use spread operator to spread array elements to another array
const countries4 = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];
let [gem, fra, , ...nordicCountries] = countries4; // notice the comma, Belgium
// is skipped.
console.log(gem); // Germany
console.log(fra); // France
console.log(nordicCountries); // Finland, Sweden, Norway, Denmark, Iceland

// Spread operator to copy arrays
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

const frontEnd2 = ["HTML", "CSS", "JS", "React"];
const backEnd2 = ["Node", "Express", "MongoDB"];
const fullStack2 = [...frontEnd2, ...backEnd2];

console.log(fullStack2);

// Spread operator to copy object.
// We can also use spread operator to copy object, use { ...obj } but in curly
// braces.
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};
const copiedUser = { ...user };
console.log(copiedUser);
// {"name": "Asabeneh", "title": "Programmer", "country": "Finland", "city":
// "Helsinki" }
// You can also change the object while copying
const copiedUser2 = { ...user, title: "instructor", new: "new stuff" };
console.log(copiedUser2); // the title: instructor is changed and you can also
// add new key value pairs too.
// {"name": "Asabeneh", "title": "instructor", "country": "Finland", "city":
// "Helsinki", new : "new stuff"}

// Spread operator with arrow function
// For functions that take in an unlimited amount of parameters.
const sumAllNums = (...args) => {
  console.log(args); // this changes to an array like *args in python
  // [1, 2, 3, 4, 5]
};
sumAllNums(1, 2, 3, 4, 5);

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums2(1, 2, 3, 4, 5)); // 15

// Exercise: Level 3
// 1. Destructure the countries object
for (let { name, capital, population, languages } of countries) {
  console.log(name, capital, population, languages);
}

// 2. Destructure the following student object to name, skill array, jsscore and
// reactscore
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name1, skills, [, , jsscore, reactscore]] = student;
// you can destructure within a destructure.
console.log(name1, skills, jsscore, reactscore);

// 3. Write a function called convertArrayToObject which can convert the array
// to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const convertArrayToObject = (students) => {
  let ans = [];
  for (let [name, skills, scores] of students) {
    ans.push({
      name: name,
      skills: skills,
      scores: scores,
    });
  }
  return ans;
};
let studentObject = convertArrayToObject(students);
console.log(studentObject);

/* 
4. Copy the student object to newStudent without mutating the 
original object. In the new object add the following ...

Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets

*/
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

// Create deepcopy via JSON parse, stringify trick
let studentCopy = JSON.parse(JSON.stringify(student2));

studentCopy.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
studentCopy.skills.backEnd.push({ skill: "Express", level: 9 });
studentCopy.skills.dataBase.push({ skill: "SQL", level: 8 });
studentCopy.skills.dataScience.push("SQL");
console.log(studentCopy);
