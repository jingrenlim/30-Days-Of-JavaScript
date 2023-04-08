import countries from "../data/countries_data.js";
console.log(countries);

/* Console Object Methods */
// Difference between console.log(), document.write() or
// document.getElementById.
// We use console object methods to show output on the browser console
// and we use document.write to show output on the browser document(view port).
// Both methods used only for testing and debugging purposes. The console method
// is the most popular testing and debugging tool on the browser. We use
// document.getElementById() when we like to interact with DOM try using
// JavaScript.

// This chapter is better to look at console log
// 1. console.log(): Show output on the browser console. We can do C - like
// substitution and also style the logging output using css with %c.
// Showing output on browser console
console.log("30 Days of JavaScript");
// C like substitution using %d for integer and %s for string/char
console.log("%d %s of JavaScript", 30, "Days");
// CSS
console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript",
  "color:green",
  "", // to account for the space between 30 Days and Of
  "color:red",
  "", // to account for the space between Of and JavaScript
  "color:yellow"
); // log output green red and yellow text

// 2. console.warn(): gives warning to the browser. will show up in Yellow with
// the yellow warning logo
console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");

// 3. console.error(): Shows an error message. Will show up red.
console.error("This is an error message");
console.error("We all make mistakes");

// 4. console.table(): display data as a table on the console. Display tabular
// data as a table. Take one required argument data, which must be an array or
// an object, and one additional optional parameter columns.
// With Array
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);
// The display is kinda like jupyter notebook.

// With Object: index column containing the keys and a value column containing
// the values of the object.
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

// 2d array: Will get two columns with one index.
const countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries2);

// An array of objects: the keys become column headers and index become
// numerical order.
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

// You restrict te columns displayed using the optional columns argument
// Just show the city and age column
console.table(users, ["city", "age"]);

// 5. console.time(): Starts a timer you can use to track how long an
// operation takes. You give each timer a unique name, and may have up to
// 10,000 timers running on a given page. When you call console.timeEnd()
// with the same name, the browser will output the time, in milliseconds, that
// elapsed since the timer was started.
const countries3 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop"); // starts the timer for regular for loop
for (let i = 0; i < countries3.length; i++) {
  console.log(countries3[i][0], countries3[i][1]);
}
console.timeEnd("Regular for loop"); // call timeEnd with same name to stop the
// timer for that timer.

console.time("for of loop");
for (const [name, city] of countries3) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries3.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

// 6. console.info(): It displays information message on browser console.
// Looks same as log. I guess just different log level.
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

// 7. console.assert(): Writes an error message to console if the assertion is
// false. If the assertion is true, nothing happens. The first parameter is the
// assertion expression. If this expression is false, an Assertion failed error
// message will be displayed. The second argument is the error message
console.assert(4 > 3, "4 is greater than 3"); // no result as true.
console.assert(3 > 4, "3 is not greater than 4");
// Assertion failed: 3 is not greater than 4
for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  // can do string interpolation in the error message
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
  // error message as a object.
}

// 8. console.group(): The console.group() can help to group different
// log groups.
const names1 = ["Asabeneh", "Brook", "David", "John"];
const countries1 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user1 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users1 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names1);
console.groupEnd();

console.group("Countries");
console.log(countries1);
console.groupEnd();

console.group("Users");
console.log(user1);
console.log(users1);
console.groupEnd();
// If you look at the console.log(), the console log messages are now
// grouped together with group headers.

// 9. console.count(): It prints the number of times the console.count() is
// called. It takes a string label parameter. It is very helpful to count the
// number of times a function is called.
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();
/* The string label is printed with the count after that
Function has been called: 1
Function has been called: 2
Function has been called: 3
*/

// 10. console.clear(): clears the browser console
// console.clear();
// A console was cleared message will show up.
// Probably good to comment this out.
