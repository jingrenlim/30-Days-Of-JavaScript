// The math object provides alot of methods to work with numbers.
const PI = Math.PI;
console.log(PI); // 3.141592653589793
console.log(Math.round(PI)); // 3; to round values to the nearest number
console.log(Math.round(9.81)); // 10, round can only round to nearest number
console.log(Math.floor(PI)); // 3; rounding down
console.log(Math.ceil(PI)); // 4; rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);
// Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11);
// creates random number between 0 and 10, exclusive of stop value
console.log(num);

//Absolute value
console.log(Math.abs(-10)); //10
//Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); //1.4142135623730951
// Power
console.log(Math.pow(3, 2)); // 9
console.log(Math.E); // 2.718, natural log

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046
// Take note the log in Math is natural log. Not base two.

// Trigonometry, Javascript trig works in radians.
console.log(Math.sin(0)); // 0
console.log(Math.sin(60)); // as this is 197degrees.
console.log(Math.sin(Math.PI / 2)); // sin(90) = 1
console.log(Math.cos(0)); // cos(0) = 1
console.log(Math.cos(60)); // as this is 197 degrees.
