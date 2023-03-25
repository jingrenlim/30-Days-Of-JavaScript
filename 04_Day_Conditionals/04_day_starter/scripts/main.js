// this is your main.js script
// alert("Open the browser console whenever you work on JavaScript");
// if else
const a = 7;
const b = 8;
if (b > a) {
  console.log("if executed.");
} else {
  console.log("never executed.");
}
let isRaining = true;
if (isRaining) {
  console.log("You need a rain coat.");
} else {
  console.log("No need for a rain coat.");
}
// You need a rain coat.

isRaining = false;
if (isRaining) {
  console.log("You need a rain coat.");
} else {
  console.log("No need for a rain coat.");
}
// No need for a rain coat.
// You can nest the if and else and also have if else if else...
// if else if else
let weather = "sunny";
if (weather === "rainy") {
  console.log("You need a rain coat.");
} else if (weather === "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather === "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

// Switch statement
weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}
// The switch statement starts with a switch keyword followed by a parenthesis
// and a code block. Case block runs if the value in the switch statement
// parenthesis matches with the case value. The break statement is to terminate
// the execution of the code so the code execution does not go down after the
// condition is satisfied. The default block runs if all cases do not satify
// the condtion.

// Example that uses conditions in the case statements. Set switch condition to
// true and then put the condition in the case blocks.
// let num = prompt("Enter number"); I comment out as it is annoying
let num;
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Numbers is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

// Ternary operator
let ternary = true;
const res =
  ternary === true
    ? console.log(`ternary is ${ternary}`)
    : console.log(`ternary is false`);
