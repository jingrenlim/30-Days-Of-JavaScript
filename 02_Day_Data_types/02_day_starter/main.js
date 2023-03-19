import word, { numOne, js } from "../primitive_data_types.js";

// importing a file will also print out all the console.log statements
// from that imported file.
// this is your main.js script
console.log("Hello World");
console.log(numOne);
console.log(js);
console.log(word); // default export needs to be outside.

// Checking Data Types and Casting...
let firstName = "Asabeneh"; // string
let lastName = "Yetayeh"; // string
let country = "Finland"; // string
let city = "Helsinki"; // string
let age = 250;
// number, it is not my real age, do not worry about it
let job; // undefined, because a value was not assigned

console.log(typeof "Asabeneh"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Changing DataType (Casting)
// String to Int:
// parseInt()
let num = 10;
let numInt = parseInt(num);
console.log(numInt);
// Number()
let numNumber = Number(num);
console.log(numNumber);
// plus sign (+)
let numplus = +num;
console.log(numplus);
console.log(typeof numplus);

// String to Float:
// It can done using Number or plus sign like above and also parseFloat()
let numFloat = parseFloat(num);
console.log(numFloat);
console.log(typeof numFloat);

// Float can be convert to Int using parseInt()

// Exercises: Level 3
let exerciseString =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let loveString = /love/gi;
let noOfLove = exerciseString.match(loveString);
let numberOfLove = noOfLove.length;
console.log(noOfLove);
console.log(numberOfLove);

let exerciseString2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(exerciseString2.match(/because/g));

// Clean the following sentence and find the most frequent word
let sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
sentence = sentence.replace(/[%$@#&;!,.?]+/g, "");
console.log(sentence);
let countMap = {};
for (let word of sentence.split(" ")) {
  if (!countMap[word]) {
    countMap[word] = 1;
  } else {
    countMap[word] += 1;
  }
}
console.log(countMap);
let maxValue = 0;
let keyMax;
for (const [key, value] of Object.entries(countMap)) {
  if (value > maxValue) {
    keyMax = key;
    maxValue = value;
  }
}
console.log(`The most frequent word is ${keyMax}.`); // I

// Calculate the total income of the person by extracting the number from the
// following text.
let totalAnnualIncome =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let numericalWords = totalAnnualIncome.match(/\d+/g);
console.log(numericalWords);
let totalAmtEarned = 0;
for (let word of numericalWords) {
  totalAmtEarned += parseFloat(word);
}
console.log(totalAmtEarned); // 30000
