// writing clean code. kinda a superfluous section that talks about
// styleguides.

/* Styleguides
I am using ESLint and Prettier as styleguides. I think can use a 
code formatter to enforce styling.

Common Javascript Style Guides
- Airbnb JavaScript Style Guide --> most popular
- JavaScript Standard Style Guide
- Google JavaScript Style Guide

I won't go too much into it as I think people use code formatters to format
their code anyways. Plus, I think I code in pretty good style anyways. 

I will just highlight some important facts for JS.
*/

/* Objects */
// Objects are declared with const
// declaring object literal
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
// iterating through object keys
for (const key in person) {
  console.log(key, person[key]);
}

// Classes are declared with PascalCase. while variables and functions
// are declared with camelCase.
