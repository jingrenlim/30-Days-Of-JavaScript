// 30 Days of JS Content:
/*
A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.
*/

// Callbacks
// callback: a function that contains two paramters, the first parameter is err
// and the second is a result. If the err is false, there will not be error if
// not it will return an error.

// A function that takes a callback. This is a function that could raise an
// error. Here the something simulates that it always raises err as err is
// always true due to it being a text string so it does not really make sense.
// But in a more realistic example, you could do something async that could
// raise an err. And if an error is raised, you can send it to the callback to
// handle the error. And if no error is raised, then the callback will call the
// next operation.
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000); // set timeout for 2 seconds
};

// The callback that is sent. if error, log err. If not log result.
const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

// callback hell, it happens when you chain callbacks.
// This is as before Promises and async await, the only way to delay code
// execution is to put it into a callback.
function getUser(id, callback) {
  console.log("Getting user from database...");
  setTimeout(() => {
    // simulating waiting for the user from the database.
    callback({ id: id, githubUsername: "jerrycode06" }); //
  }, 2000);
}

function getRepos(userid, callback) {
  console.log("Getting user repos from github.");
  setTimeout(() => {
    // simulating waiting to get repos from the database.
    callback({ id: userid, repo1: "repo1", repo2: "repo2" });
  }, 2000);
}

getUser(1, (user) => {
  console.log("User", user);
  // requires user to be obtained first
  getRepos(user.id, (repos) => {
    console.log("Repos", repos);
    // And this can chain forever...
  });
});

// The following is a more realistic callback hell example where an exception
// could occur.
function additionHell(result, callback) {
  let err;
  setTimeout(() => {
    try {
      result += 1;
    } catch (e) {
      err = e;
    }
    console.log(result);
    callback(result, err);
  }, 4000);
}

function subtractHell(result, callback) {
  let err;
  setTimeout(() => {
    try {
      result -= 1;
    } catch (e) {
      err = e;
    }
    console.log(result);
    callback(result, err);
  }, 4000);
}

function divideHell(result, callback) {
  let err;
  // this function will divide by number.
  // JS doesn't throw error when division by zero. It returns
  // Nan if 0/0. NEGATIVE INFINITY if negative / 0 and POSITIVE INFINITY
  // if positive / 0.
  const divisor = 3000;
  setTimeout(() => {
    try {
      let answer = divisor / result;
      if (!isFinite(answer)) {
        throw new Error();
      }
    } catch (e) {
      err = e;
    }
    callback(result, err);
  }, 2000);
}

// Now lets chain the operations
additionHell(1, (result, err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(`The result is now ${result}`);
  }
  subtractHell(result, (result, err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(`The result is now ${result}`);
    }
    subtractHell(result, (result, err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`The result is now ${result}`);
      }
      divideHell(result, (result, err) => {
        if (err) {
          console.log(err);
          return; // the code terminates here due to error
          // nothing below will run
        } else {
          console.log(`The result is now ${result}`);
        }
        subtractHell(result, () => {}); // this line won't run
        // due to error thrown above and the fact that I return when there is
        // an exception. You can of course handle the error in other ways.
      });
    });
  });
});

// As you can tell, callback hell code leads to the pyarmid of doom which makes
// the code extremely hard to read and understand what is even going on.

/* Promise */
// A Promise is formed using a constructor using new keyword and accepts a
// callback that takes a resolve and reject functions.
// syntax
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});

// Constructing a Promise
// Resolved with resolve. success.
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

// So the result of resolve in the Promise will be passed to result in then.
// If error then it will be passed to catch loop and error parameter.
doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// Resolved with reject. reject.
// Promise
const doPromiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

doPromiseReject
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

// A practical example of a function that uses promise
function promiseTakingInput(some_number) {
  const promiseNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (some_number > 5) {
        resolve(some_number);
      } else {
        reject("The number is too small.");
      }
    }, 2000);
  });

  // both then and catch takes callbacks
  promiseNumber
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Just call the function as per normal
promiseTakingInput(78);
promiseTakingInput(3);

// Using the fetch api with Promises, the function is literally called fetch.
// its a global function and it resolves to a Response object. Which is why
// you must treat the response object.
const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json()) // treat the response object
  .then((data) => {
    // getting the data
    console.log("in fetch api");
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling the error

/* async and await */
// An async function returns a Promise.
const square = async function (n) {
  return n * n;
};
const result = square(2);
console.log(`Result of async functions: ${result}`); // it is a Promise object

// To access the value of the Promise, we use await. Can only be used in async
// functions. async await allows you to write the code WITHIN THE ASYNC FUNCTION
// like as if it was synchronous. So within the async function you can see the
// value of square. But when you return it out, it will return as a
// Promise { pending } state that you then have to treat it.
async function getResultFromSquare() {
  const value = await square(3);
  console.log(`The value from within another async ${value}`);
  return value;
}

// if we want to access the value outside of the async value instead of getting
// a Promise in pending state. So resolve it with then and catch like a Promise.
getResultFromSquare()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
const value = getResultFromSquare();
console.log(value);

// Comparison of promises and async await
// This is the async version of the fetch api code
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log("from within fetchData.");
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("------ async and await version of fetchData");
fetchData();
