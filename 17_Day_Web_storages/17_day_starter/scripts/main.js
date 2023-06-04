// Web storage
/*
Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. Web Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

The data being stored can be accessed using JavaScript, which gives you the ability to leverage client-side scripting to do many things that have traditionally involved server-side programming and relational databases. 

There are two Web Storage objects:
- sessionStorage
- localStorage
localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.

The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).
*/

// In your chrome console, click on Application and then on the sidebar of
// Storage, there is Local Storage and Session Storage

/*
__ sessionStorage __
sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.

__ localStorage __
The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration data. The data will be available on the browser even after the browser is closed. localStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows.

Web Storage data is, in both cases, not available between different browsers. For example, storage objects created in Firefox cannot be accessed in Internet Explorer, exactly like cookies. There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()
*/

/*
__ HTML5 Web Storage Objects __
HTML web storage provides two objects for storing data on the client:
- window.localStorage - stores data with no expiration date
- window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.

Web Storage objects:
- localStorage - to display the localStorage object
- localStorage.clear() - to remove everything in the local storage
- localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
- localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
- localStorage.removeItem() - to remove stored item from a localStorage. It takes key as a parameter.
- localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/

// Remember that SessionStorage and LocalStorage have siimilar methods.
// Take note that when we set data to be stored in a localStorage, it will be
// stored as a string. If we are storing an array or an object, we should
// stringify it first to keep the format unless otherwise we lose the
// array structure or the object structure of the original data. Basically, everything is stored as a string.

// Storing items in localStorage
// string
localStorage.setItem("key_2", "value that is stored");
// "key" as key does not get shown.
// as value is string, we do not stringify it.

// number
localStorage.setItem("age", 200);

// if we are storing array or objects, we should stringify it first.
const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);

let skills_many = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills_many);
localStorage.setItem("skills", skillJSON);

// Storing an object in localStorage. It has to be stringified first. Basically,
// when you are storing non- primitive types, they have to be stringified first.
const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);
console.log(localStorage);

// Getting items from localStorage
// Getting an items that does not exist
let firstName = localStorage.getItem("firstName");
console.log(firstName); // no exception is raised and it returns null

// Getting back a primitive type
let age = localStorage.getItem("age");
console.log(age);
console.log(typeof age); // this was a number, but we get it back as string
age = parseInt(age); // converting back to integer
console.log(age);
console.log(typeof age);

// Getting back an object datatype
let skills_get = localStorage.getItem("user");
console.log(skills_get);
skills_get = JSON.parse(skills_get); // use JSON.parse to convert back to object
console.log(skills_get);

// Removing item from localStorage. It takes a key as parameter
localStorage.removeItem("age");
console.log(localStorage);
// Try removing an item that does not exist
localStorage.removeItem("does_not_exist");
// nothing happens, no exception raised.

// localStorage.key(). It takes an index as a paramter.
// the index is based on the order that you did initially in adding into
// localStorage. And it is queue based. not stack based.
// Following the above order, key_2 was added in first, then age, then skills
// then user. then age was removed. When you try localStorage.key(2), it returns
// key_2. Which means that the first that got added in gets shoved along when
// newer objects are added in.
let element = localStorage.key(2);
console.log(element);

// Clearing the localStorage, remember to remove this line when you want to
// study what happens in the developer console.
localStorage.clear();
