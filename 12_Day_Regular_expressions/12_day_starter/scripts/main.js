import countries from "../data/countries_data.js";
console.log(countries);

/* optional flags in regex
g	Performs a global match, finding all matches rather than just the first.
i	Makes matches case-insensitive. Matches both uppercase and lowercase.
m	Performs multiline matches. (Changes behavior of ^,$)
s	Allows . to match newline characters.
u	Enables Unicode support.
y	Matches are sticky, looking only at exact position in the text.
*/

// Creating a regexp with constructor
// without flag
let pattern = "love";
let regex = new RegExp(pattern);
// with flag
let flag = "gi";
let regexWithFlag = new RegExp(pattern, flag);
// in oneline
let regEx = new RegExp("love", "gi");

// However, it is more common to create regex using backslash
let regExWithoutContructor = /love/gi;

// regex methods
// 1. test, from the regex expression and returns a boolean
let pattern2 = /love/;
const testString = "I love Javascript";
const result = pattern2.test(testString);
console.log(result); // true

// 2. match, returns an array containing all of the matches,
// including capturing groups, or null if no match is found. If we do not
// use a global flag, match() returns an array containing the
// pattern, index, input and group.
const result2 = testString.match(pattern);
console.log(result2);
// it will return a array containing the regex details
// with global flag, it will return the array of the number of occurances.
const pattern3 = /love/g;
const result3 = testString.match(pattern3);
console.log(result3);

// 3. search, it returns the index of the match or -1 if search fails
const result4 = testString.search(pattern3);
console.log(result4);
// seems to be first occurance

// 4. replace(): Executes a search for a match in a string, and replaces
// the matched substring with a replacement substring.
const txt =
  "Python is the most beautiful language that a human begin has ever created. \
I recommend python for a first programming language";
let matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
// without global flag it will only replace the first occurance
// with global flag, it will replace all occurances...
let matchReplaced2 = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced2);

// Original regex match Python or python but we can just do case insensitive
// replace.
let matchReplaced3 = txt.replace(/Python/gi, "JavaScript");
console.log(matchReplaced3);

// A very contrived example
const txt2 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
  T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
  p%e%o%ple.\
  I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
  D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";
let matches = txt2.replace(/%/g, "");
console.log(matches);
// replacing all % with empty character.
/* RegEx Glossary
    []: A set of characters
        [a-c] means, a or b or c
        [a-z] means, any letter a to z
        [A-Z] means, any character A to Z
        [0-3] means, 0 or 1 or 2 or 3
        [0-9] means any number 0 to 9
        [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
    \: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
    \s mean: whitespace
    \S mean: not whitespace
    \w mean: word character
    \W mean: not word character
    . : any character except new line character and line terminators (\n)
    ^: starts with
        r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.
    $: ends with
        r'substring$' eg r'love$', sentence ends with a word love
    *: zero or more times
        r'[a]*' means a optional or it can occur many times.
    +: one or more times
        r'[a]+' means at least once or more times
    ?: zero or one times
        r'[a]?' means zero times or once
    \b: word boundery, matches with the beginning or ending of a word
        Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.
    {3}: Exactly 3 characters
        {3,}: At least 3 characters
        {3,8}: 3 to 8 characters
    |: Either or
        r'apple|banana' mean either of an apple or a banana
    (): Capture and group
*/
// Honestly, regex needs to always google to look up the rules. I will note
// some notable examples.
// Period(.)
const pattern4 = /[a].+/g;
// . any character, + any character one or more times
const txt4 = "Apple and banana are fruits";
const matches4 = txt4.match(pattern4);
console.log(matches4); // ['and banana are fruits']

// Quantifiers in regexp
// Specify the length of the substring to check for...
const txt5 = "This regular expression example was made in December 6,  2019.";
const pattern5 = /\d{1,4}/g; // 1 to 4
const matches5 = txt5.match(pattern5);
console.log(matches5); // ['6', '2019']

// Carat
// Starts with:
const txt6 = "This regular expression example was made in December 6,  2019.";
const pattern6 = /^This/g; // ^ means starts with
const matches6 = txt6.match(pattern6);
console.log(matches6); // ['This']

// But it is negation when it is in a group
const pattern7 = /[^A-Za-z,. ]+/g;
// ^ in set character means negation, not A to Z, not a to z, no space,
// no comma no period
const matches7 = txt6.match(pattern7);
console.log(matches7); // ["6", "2019"]

// Exact match, use a starting ^ and an ending $.
let pattern8 = /^[A-Z][a-z]{3,12}$/;
let name8 = "Asabeneh";
let result8 = pattern8.test(name8);
console.log(result8); // true

// Exercise: Level 3
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
  let cleaner = /[%$@&#;?]/g;
  sentence = sentence.replace(cleaner, "");
  return sentence;
}
let sentence_ans = cleanText(sentence);

// Find 3 most frequent words
const threeMostFrequent = (sentence) => {
  let wordDictionary = {};
  let wordArray = sentence.split(" ");
  for (let word of wordArray) {
    if (!wordDictionary[word]) {
      wordDictionary[word] = 1;
    } else {
      wordDictionary[word] += 1;
    }
  }
  // Sort dictionary based on value in descending order by turning into
  // a pair wise array
  wordDictionary = Object.entries(wordDictionary);
  wordDictionary.sort((a, b) => b[1] - a[1]);
  let wordCollector = [];
  // Get top three frequent
  for (let i = 0; i < 3; i++) {
    let top = wordDictionary.shift();
    wordCollector.push({
      word: top[0],
      count: top[1],
    });
  }
  return wordCollector;
};
let answer = threeMostFrequent(sentence_ans);
console.log(answer);
