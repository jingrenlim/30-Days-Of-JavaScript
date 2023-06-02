import countries from "../data/countries_data.js";

/* Javascript and JSON differences
JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is not JSON. For example:

Objects and Arrays
Property names must be double-quoted strings; trailing commas are forbidden.

Numbers
Leading zeros are prohibited. A decimal point must be followed by at least one digit. NaN and Infinity are unsupported.

Any JSON text is a valid JavaScript expression, but only after the JSON superset revision. Before the revision, U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR are allowed in string literals and property keys in JSON; but the same use in JavaScript string literals is a SyntaxError.

Other differences include allowing only double-quoted strings and no support for undefined or comments. For those who wish to use a more human-friendly configuration format based on JSON, there is JSON5, used by the Babel compiler, and the more commonly used YAML.

tldr, basically JSON is not exactly Javscript. But very close.

Static Methods
JSON.parse()
Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.
Does not allow trailing commas and does not allow single quotes.

JSON.stringify()
Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.
*/

/* 30 Days of Javascript Content */
// We can change Json to JS Object and vice versa.

// JSON.parse()
// JSON.parse is how we change from a JSON to Javascript object.
// JSON.parse(json[, reviver])
/* JSON.parse(json, (key, value) => {
   optional callback function
})
*/
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const userObj = JSON.parse(usersText);
console.log(userObj);

// example with revival
// the fact that the callback function is able to target each json object means
// that the parse function in able to find the smallest unit of json within the
// large json, in the event of nested json or array of json. No, upon further
// investigation, seems like it does not and it just parse everything from
// most inner nesting to outer nesting.
const usersObj = JSON.parse(usersText, (key, value) => {
  // console.log(key); // these is the keys of the individual json object
  // console.log(value); // these are the values of the individual json object
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj);

// Converting Object to JSON
// JSON.stringify
/*
JSON.stringify(obj, replacer, space)
json or text , the data
replacer is an optional callback function
*/
// A lengthy example of converting a js object to json.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
// (JS Object, undefined to show no callback, 4 space indents)
console.log(txt);
// text means JSON- because json is a string form of an object.

// Using a filter array with JSON.stringify
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt2 = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
// you literally supply an array of keys you want to keep in the
// serialised string and it will only keep those strings in the array.
console.log(txt2);

// Exercise 3
const txt4Exercise = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

// Parse the above object to object
const parseToObj = JSON.parse(txt4Exercise);
console.log(parseToObj);

// Testing revival. It parses from the most inner nesting to the outer nesting.
const testingWithRevival = JSON.parse(txt4Exercise, (key, value) => {
  // changing all the skills to uppercase
  if (typeof value == "string" && key != "email") {
    let newValue = value.toUpperCase();
    return newValue;
    // in the revival you just need to return it
    // you do not need to assign in into the object
  }
  return value; // you either use a ternary operator or do both return values.
});
console.log(testingWithRevival);
// I think revival isn't super good unless you wanna change all of one type of
// thing into something. probably better to parse first and then do the post
// processing.

// Find the user with the most amount of skills from the variable stored in txt
let maxCount = 0;
let currentMax = "";
for (let key in parseToObj) {
  for (let attribute in parseToObj[key]) {
    let count =
      attribute == "skills" ? parseToObj[key][attribute].length : null;
    if (count > maxCount) {
      maxCount = count;
      currentMax = key;
    }
  }
}
console.log(currentMax); // Asab

// JSON MDN docs
// JSON.parse docs
/*
JSON.parse parameters (text, reviver (key, value))
return value: object, array string, number, boolean or null based on given json text. raises SyntaxError if string to parse is not valid json.

__ the reviver parameter __
How the reviver processes the json parameter: The computed value and all its properties (in a depth-first fashion, beginning with the most nested properties and proceeding to the original value itself) are individually run through the reviver.

Be sure to return all processed and unprocessed values: The reviver is called with the object containing the property being processed as this, and two arguments: key and value, representing the property name as a string (even for arrays) and the property value. If the reviver function returns undefined (or returns no value — for example, if execution falls off the end of the function), the property is deleted from the object. Otherwise, the property is redefined to be the return value. If the reviver only transforms some values and not others, be certain to return all untransformed values as-is — otherwise, they will be deleted from the resulting object.

Similar to the replacer parameter of JSON.stringify(), reviver will be last called on the root object with an empty string as the key and the root object as the value.

Reviver is run after the object is parsed: Note that reviver is run after the value is parsed. So, for example, numbers in JSON text will have already been converted to JavaScript numbers, and may lose precision in the process. To transfer large numbers without loss of precision, serialize them as strings, and revive them to BigInts, or other appropriate arbitrary precision formats.
*/

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
/*
1
2
4
6
5
3
 
The DFS goes ...
first tree: 1
second tree: 2
third tree: 3 -> 4 goes to inner tree: 5 -> 6

So remember that it starts from the most nested number. Or you can say it starts from leaves then goes towards the roots.
*/

// Using reviver when paired with the replacer of JSON.stringify.
// To ensure that the SerDe is done correctly and that the serialisation
// and deserialistion is a proper round trip. The serialization process
// must preserve the type information.
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

// arrow function if put curly braces will require return keyword.
// serialising Map to Array
const jsonText = JSON.stringify(map, (key, value) => {
  // The key of Map objects is the index is not what you want.
  // Using the type info to serialisation
  return value instanceof Map ? Array.from(value.entries()) : value;
});

console.log(jsonText);

// deserialising Array back to Map
const map2 = JSON.parse(jsonText, (key, value) => {
  console.log(key);
  console.log(value);
  // To reform the Map, the very last key parsed is "" and
  // the value is the root which is the whole Map. So that condition is used to
  // in the deserialisation to get back the entire Map.
  return key === "" ? new Map(value) : value;
});

console.log(map2);

/* Constraints of JSON.parse
JSON has no namespace for annotating type metadata, in order to revive values that are not plain objects, you can consider the following...
- Serialize the entire object to a string and prefix it with a type tag.
- "Guess" based on the structure of the data (for example, an array of two-member arrays)
- If the shape of the payload is fixed, based on the property name (for example, all properties called registry hold Map objects).

Also...
JSON.parse() does not allow trailing commas
-- both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');

JSON.parse() does not allow single quotes
-- will throw a SyntaxError
JSON.parse("{'foo': 1}");
*/

// JSON.stringify docs
/*
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)

If space is a number, then it will insert indentations in the JSON string.
If space is a string up to 10 characters, this string is inserted before every nested object or array.

Return value: A JSON string representing the given value or undefined.

Exceptions
  TypeError
  Thrown if one of the following is true:
    value contains a circular reference.
    A BigInt value is encountered.

Exact stringify serialisation mapping is in the MDN docs...

The replacer parameter can be either a function or an array.

As an array, its elements indicate the names of the properties in the object that should be included in the resulting JSON string. Only string and number values are taken into account; symbol keys are ignored.

As a function, it takes two parameters: the key and the value being stringified. The object in which the key was found is provided as the replacer's this context.

The replacer function is called for the initial object being stringified as well, in which case the key is an empty string (""). It is then called for each property on the object or array being stringified. Array indices will be provided in its string form as key. The current property value will be replaced with the replacer's return value for stringification. This means:

- If you return a number, string, boolean, or null, that value is directly serialized and used as the property's value. (Returning a BigInt will throw as well.)
- If you return a Function, Symbol, or undefined, the property is not included in the output.
- If you return any other object, the object is recursively stringified, calling the replacer function on each property.

Typically, array elements' index would never shift (even when the element is an invalid value like a function, it will become null instead of omitted). Using the replacer function allows you to control the order of the array elements by returning a different array.

There are a bunch of JSON.stringify examples on the mdn docs to show what happens when trying to stringify different data types.
*/

// Using function as replacer
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
const fooExamples = JSON.stringify(foo, replacer);
console.log(fooExamples); // '{"week":45,"month":7}'

// Using an array as a replacer
const foo2 = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};

const foo2Examples = JSON.stringify(foo2, ["week", "month"]);
console.log(foo2Examples);
// '{"week":45,"month":7}', only keep "week" and "month" properties
