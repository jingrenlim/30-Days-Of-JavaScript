import countries from "../data/countries_data.js";

// Javascript has class keyword but it is only syntactic sugar. It is a
// language with prototype inheritance. Here will detail the class way and
// functions way.

// via Class
class Person {
  constructor(firstname, lastname, skill = 8) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = 25; // default values, do not allow users to set
    this.skill = skill; // default from constructor
  }
  thisIsAClassProperty = "this is a class property from classes";

  // Instance Methods
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // Getter
  get getSkill() {
    return this.skill;
  }

  // Setter
  set setSkill(skill) {
    this.skill = skill;
  }
  // Getters and Setters are similar to methods.

  // Static Methods, do not use this as it is static.
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

// Inheritance via classes
class Teacher extends Person {
  constructor(gender, firstname, lastname, skill) {
    // access superclass constructor
    super(firstname, lastname, skill);
    this.gender = gender;
  }
  teach() {
    return "I am a teacher.";
  }

  // Overriding methods, override getFullName method
  getFullName() {
    return "I am a teacher overriden in class.";
  }
}

// via Functions and Prototypal inheritance
// How to provide keyword arguments in JS with defaults
function PersonFunc(firstname, lastname, { skill = 8 }) {
  // you can only define instance properties in func method
  this.firstName = firstname;
  this.lastName = lastname;
  this.age = 25; // default value, do not allow users to set
  this._skill = skill; // default from constructor, underscore to prevent
  // maximum call stack in setter. As I set the property on the object to be
  // called skill too.
}

// To define a class property, define on prototype
PersonFunc.prototype.thisIsAClassProperty =
  "This is a class property from func.";

// Instance or Class methods. I guess you still define it on the prototype
// And there is no real distinction between class methods and instance methods.
// Note that Arrow functions provide a lexical this that is instantiated at when
// the function is created. And hence in this global scope this is undefined
// and hence it does not work. Using function will work as function will
// use the function scope this. tldr, arrow function does not work on object
// prototype.
PersonFunc.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// Remember that Getters and Setters are just methods so in prototype way, use
// defineProperty. There is also defineProperties.
// Take note that you have to define a setter if the property is also a property
// you allow users to change. If not an error will be raised.
Object.defineProperty(PersonFunc.prototype, "skill", {
  get() {
    return this._skill;
  },
  set(skill) {
    this._skill = skill;
  },
});
// Naming the property same as the property you want to define will cause
// maximum call stack reached. Hence, the underscore. It also the case with the
// class example, just that you called it getSkill and setSkill.

// Adding static methods to PersonFunc
PersonFunc.showDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let dateMonthYear = date + "." + month + "." + year;
  let time = hours + ":" + minutes;
  let fullTime = dateMonthYear + " " + time;
  return fullTime;
};

// Inheritance via functions
function TeacherFunc(gender, firstname, lastname, skill) {
  // call the Parent class constructor passing the parameters along
  // using this take takes arguments in a spread.
  PersonFunc.call(this, firstname, lastname, { skill: skill });
  this.gender = gender;
}

// subclass extends superclass
TeacherFunc.prototype = Object.create(PersonFunc.prototype);
// But we must set the constructor back to TeacherFunc's constructor, if not
// it will take the constructor of the parent class which is PersonFunc.
TeacherFunc.prototype.constructor = TeacherFunc;

// In ES5, static methods on PersonFunc are only passed down via Object.assign
Object.assign(TeacherFunc, PersonFunc);

TeacherFunc.prototype.teach = function () {
  return "I am a teacher from functions.";
};
// Override the getFullName method
TeacherFunc.prototype.getFullName = function () {
  return "I am a Teacher Overriden from functions.";
};

// Testing Area
// By Class
console.log("Person via class");
let personViaClass = new Person("Tommy", "Tan");
console.log(personViaClass);
console.log(personViaClass.getFullName()); // Testing out Instance Methods.
console.log(personViaClass.getSkill); // Getters, notice no need ().
personViaClass.setSkill = 19; // Setters. Kinda weird syntax when property and
// setter are not the same name.
console.log(personViaClass);
let dateTime = Person.showDateTime(); // showDateTime static method
console.log(dateTime);
console.log(personViaClass.thisIsAClassProperty); // class property

// Inheritance
console.log("Teacher via class");
let teacherViaClass = new Teacher("male", "Teacher", "Tan", 80);
console.log(teacherViaClass.teach()); // test implemented on subclass
console.log(teacherViaClass);
console.log(teacherViaClass.skill); // testing direct access to attribute
console.log(teacherViaClass.getSkill); // testing inherited getter
teacherViaClass.setSkill = 123; // testing inherited setter
console.log(teacherViaClass.getSkill); // testing getter after setting
console.log(teacherViaClass);
let dateTimeViaInherit = Teacher.showDateTime(); // static method via inherit
console.log(dateTimeViaInherit);
console.log(teacherViaClass.getFullName()); // testing overridden method
console.log(teacherViaClass.thisIsAClassProperty); // class property

// By Func
console.log("Person via func");
let personViaFunc = new PersonFunc("Ponzi", "Schema", {});
// Have to pass an empty object to use the object default
// If you want to give it a value do {skill: 10}
// If you want to use keyword arguments, you must use object syntax.
// If you do skill = 8, it is still a positional argument.
console.log(personViaFunc);
console.log(personViaFunc.getFullName()); // Testing out Instance Methods.
console.log(personViaFunc.skill); // Testing getter like @property
console.log(personViaFunc._skill); // Testing direct access to attribute
personViaFunc.skill = 19; // Testing setter. However, the underlying is _skill
console.log(personViaFunc.skill); // Testing getter after setting
console.log(personViaFunc);
let dateTime1 = PersonFunc.showDateTime(); // showDateTime static method
console.log(dateTime1);
console.log(personViaFunc.thisIsAClassProperty); // calling class property

// Inheritance via functions
console.log("Teacher via func");
let teacherViaFunc = new TeacherFunc("female", "TeacherFunc", "Tan", 456);
console.log(teacherViaFunc);
console.log(teacherViaFunc.skill); // testing inherited getter
console.log(teacherViaFunc._skill); // testing direct access to attribute
teacherViaFunc.skill = 123; // testing inherited setter, underlying is _skill
console.log(teacherViaFunc.skill); // testing getter after setting
console.log(teacherViaFunc);
console.log(teacherViaFunc.teach());
let dateTimeViaInheritFunc = TeacherFunc.showDateTime();
// static method via inherit after Object.assign
console.log(dateTimeViaInheritFunc);
console.log(teacherViaFunc.getFullName()); // testing overridden method
console.log(teacherViaFunc.thisIsAClassProperty); // calling class property
