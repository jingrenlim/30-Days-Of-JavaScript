import {
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
} from "./variable.js";

// Note that you have to use modules and load in your modules as
// type=module then yoou can use ES6 modules syntax. To be able to use
// ES6 module imports in nodejs, set the type property to `module` in
// your package.json file. If you do not then you have to do the
// CommonJS require() syntax. Take note that you cannot mix and match the
// import/export syntax ES6 syntax and the CommonJS `require()` syntax.

// the variable values can be accessed from other variable.js file
console.log(firstName, lastName, country, city, age, isMarried);
console.log(gravity, boilingPoint, PI); // 9.81, 100, 3.14
console.log(name, job, live);

// Day 1 Exercise

// Comments can make code readable
// WelcomeTo30DaysOfJavascript
/*
comments can make code readable, easy to reuse and informative.
*/
