import countries from "../data/countries_data.js";
console.log(countries);

/* Error Handling */
// Self study portion
// There are throw statements in JS
// There are try catch finally statements in JS
/* Exception types:
Just about any object can be thrown in JavaScript. Nevertheless, not all thrown objects are created equal. While it is common to throw numbers or strings as errors, it is frequently more effective to use one of the exception types specifically created for this purpose. 

- ECMAScript exceptions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

- DOMException: https://developer.mozilla.org/en-US/docs/Web/API/DOMException\
- DOMError: Deprecated. I guess use DOMException. https://developer.mozilla.org/en-US/docs/Web/API/DOMError
*/

/* throw statement */
// You can throw string, number and boolean type. Objects can also be throw
// though not recommended.
// All these work, I just comment out as they would terminate at the first line
// that throws exception.

// throw "some string";
// throw 42;
// throw true;
// throw {
//  toString() {
//    return "I'm an object!";
//  },
//};  <-- you can throw objects too.

// But honestly, you should throw Exceptions classes.

/* try ... catch */
// Example of try ... catch. Writing a function that could throw an exception
// and then you can handle in other parts of the code.

// function that could throw an exception.
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    // this is how you throw an Exception using new keyword and Error
    // and wrap the error message.
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
}

try {
  // statements to try
  let monthName = getMonthName(7); // function could throw exception
  console.log(monthName);
  monthName = getMonthName(13); // triggers exception
} catch (e) {
  // this e is our exception which is the identifier created in the
  // catch block
  let monthName = "unknown";
  console.log(monthName);
  console.log(e);
  // logMyErrors(e);
  // pass exception object to error handler (i.e. your own function)
}
// without try catch it just causes exception.
// monthName = getMonthName(14);

// finally: this executes after try and catch no matter what whether an
// exception has been raised or not. This allow the script to fail gracefully
// when an exception has occurred. finally can be used to close a database
// transaction or close an opened file etc.

// If the finally block returns a value, this return value will become the the
// return value of the entire try catch. It will basically overwrite any prior
// return values. Basically, as finally block is ran last, it will overwrite any
// return value that came before.
// This will also overwrite any throw statement before. This just means that the
// last thing that is throw or return overwrites over everything. Therefore, it
// basically means that we should not have any return or throws in finally
// statement. I mean, at least I do not think it makes sense to have a return or
// throw in a finally statement.

// Unconditional catch block:
// This catches all exceptions.
try {
  throw "myException"; // generates an exception
} catch (e) {
  console.log(e);
}

// Conditional catch blocks:
// When you want to handle different exceptions differently.
try {
  throw TypeError("throwing type error to test.");
} catch (e) {
  // You put a if else block in the catch block to check for
  // the instance of Error. Then in each block, you can handle each exception.
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
    console.log(e);
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptionsv
    console.log(e);
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
    console.log(e);
  } else {
    // statements to handle any unspecified exceptions.
    // This is basically the catch all if it does not lie in any of the
    // above three exceptions.
    console.log(e);
  }
}
// The common use case of this is to catch and handle only a subset of
// exceptions and then re-throw the error in other cases
try {
  throw RangeError("throwing error that will be handled.");
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
    console.log(e);
  } else {
    throw e; // re-throw the error unchanged
  }
}
/* The exception identifier
When an exception is thrown in the try-block, exception_var (i.e., the e in catch (e)) holds the exception value. You can use this identifier to get information about the exception that was thrown. This identifier is only available in the catch-block's scope. If you don't need the exception value, it could be omitted.
*/

// The finally block is used to handle tidying up steps. If an exception is
// thrown from the try block, even when there's no catch block to handle the
// exception, the finally block still executes, in which case the exception is
// still thrown immediately after the finally block finishes executing.
// Control flow statements (return, throw, break, continue) in the finally
// block will "mask" any completion value of the try block or catch block. It
// generally a bad idea to have control flow in finally block. Use it mainly for
// cleanup code.

/* Nested try ... catch statements */
// See what happens here...
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.log("outer", ex.message);
}

// "finally"
// "outer" "oops"
// inner try block throws an Error and the finally block executes and then
// the outer catch block handles the error. Which is why finally prints first
// then the outer oops gets printed.

// now if we have an inner catch block...
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.log("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.log("outer", ex.message);
}

// "inner" "oops"
// "finally"
// It is caught in the inner catch block and does not get caught in outer catch.

// Now lets rethrow the error
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.log("inner", ex.message);
    throw ex; // rethrow from inner catch block.
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.log("outer", ex.message);
}
// "inner" "oops"
// "finally"
// "outer" "oops"
// The exception is thrown from inner block and then the finally of inner block
// will still execute. Then inner loop rethrows exception to be caught in outer
// catch block.
// Any given exception will be caught only once by the nearest enclosing
// catch-block unless it is rethrown. Of course, any new exceptions raised in
// the "inner" block (because the code in catch-block may do something that
// throws), will be caught by the "outer" block.

// Returning from a finally block.
// If the finally-block returns a value, this value becomes the return value of
// the entire try-catch-finally statement, regardless of any return statements
// in the try and catch-blocks. This includes exceptions thrown inside of the
// catch-block. Below is an IIFE.

(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.log("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// "inner" "oops"
// "finally"
// The outer "oops" is not thrown because of the return in the finally-block.
// The same would apply to any value returned from the catch-block.

/* Error Object */
// Can be used as a base object for user-defined exceptions.
// Error is a serializable object, so it can be cloned with structuredClone()
// or copied between Workers using postMessage().

/* Error Types
EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
AggregateError
InternalError

Instance properties:
Error.prototype.constructor
Error.prototype.name
Error.cause --> constructor 2nd argument
Error.message --> constructor 1st argument

Instance methods
Error.prototype.toString()
*/

// Usage of cause and differentiating between similar errors
// Sometimes a block of code can fail for reasons that require different
// handling, but which throw very similar errors (i.e. with the same type and
// message).  If you don't have control over the original errors that are
// thrown, one option is to catch them and throw new Error objects that have
// more specific messages. The original error should be passed to the new Error
// in the constructor's options parameter as its cause property. This ensures
// that the original error and stack trace are available to higher-level
// try/catch blocks.
// Assume you have two functions that throw the same Error.
function doFailSomeWay() {
  throw new Error();
}

function doFailAnotherWay() {
  throw new Error();
}
// You can catch both errors and throw new errors with different error message
// and put the original error into the cause option so that the original error
// and stack trace are available to higher-level try/catch blocks.
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      console.log(err.cause);
      break;
    case "Failed in another way":
      console.log(err.cause);
      break;
  }
}
// So you use the cause to differentiate between the two errors that were the
// same by throwing different Error with different error message. But put the
// cause in the options so that you retain the original Error stacktrace.

// The value of cause can be of any type. You should not assume that the error
// you caught has an Error as its cause, in the same way that you cannot be sure
// that the variable bound in the catch statement is an Error either.
// You can pass structured data into the cause argument.

/* Providing structured data as the error cause 
Error messages written for human consumption may be inappropriate for machine parsing — since they're subject to rewording or punctuation changes that may break any existing parsing written to consume them. So when throwing an error from a function, as an alternative to a human-readable error message, you can instead provide the cause as structured data, for machine parsing.
*/
// This is basically providing the cause like the reason as to why the exception
// was raised.
// Below is an example as to how to use cause to store the data of why the
// exception is raised.
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
// The code basically does a few checks and then when an exception is thrown
// then put the error values in the cause with the code.

/* DOMException 
The DOMException interface represents an abnormal event (called an exception) that occurs as a result of calling a method or accessing a property of a web API. This is how error conditions are described in web APIs.
Each exception has a name, which is a short "PascalCase"-style string identifying the error or abnormal condition.
DOMException is a Serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

Constructor: DOMException()

Instance properties:
DOMException.message
DOMException.name

Error names:
IndexSizeError
HierarchyRequestError
WrongDocumentError
InvalidCharacterError
NoModificationAllowedError
NotFoundError
NotSupportedError
InvalidStateError
InUseAttributeError
SyntaxError
InvalidModificationError
NamespaceError
InvalidAccessError
TypeMismatchError (Deprecated)
SecurityError
NetworkError (Experimental)
AbortError (Experimental)
URLMismatchError (Experimental)
QuotaExceededError (Experimental)
TimeoutError
InvalidNodeTypeError
DataCloneError (Experimental)
EncodingError (Experimental)
NotReadableError (Experimental)
UnknownError (Experimental)
ConstraintError (Experimental)
DataError (Experimental)
TransactionInactiveError (Experimental)
ReadOnlyError (Experimental)
VersionError (Experimental)
OperationError (Experimental)
NotAllowedError
*/

/* Custom Exceptions with JS */
// By using CLASS
class PermissionError extends Error {
  constructor(message) {
    super(message); // pass message to super class constructor
    this.name = "Validation Error";
    this.message = message;
  }
}

// How to use it...
function permissionThrow(input) {
  if (input < 4) {
    throw new PermissionError("Permission level not high enough.");
  }
}

permissionThrow(5); // no error thrown
try {
  permissionThrow(3); // error will be thrown
} catch (err) {
  if (err instanceof PermissionError) {
    console.log(err);
  }
}

// Using functional programming style
function PermissionError2(message) {
  this.name = "PERMISSION ERROR";
  this.message = "Permission Level Not High Enough";
  this.stack = new Error().stack; // to get stack trace
  this.message2 = message;
}
// subclass extends superclass
PermissionError2.prototype = Object.create(Error.prototype);
// Set constructor back to PermissionError2
PermissionError2.prototype.constructor = PermissionError2;

function permissionThrowFunctional(input) {
  if (input < 4) {
    throw new PermissionError2("Permission level not high enough.");
  }
}

permissionThrowFunctional(5);
try {
  permissionThrowFunctional(3);
} catch (err) {
  if (err instanceof PermissionError2) {
    console.log(err);
  }
}
// Test that I extended it correctly
const permissionError123 = new PermissionError2("Message");
console.log("The message is " + permissionError123.message);
console.log(permissionError123.message2);
console.log(permissionError123 instanceof Error); // true
console.log(permissionError123 instanceof PermissionError2); // true
console.log(permissionError123);
console.log(permissionError123.toString()); // toString() returns the
// message and the name concaternated by a :

// MDN Recommendataions for creating your own custom exceptions
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent
    // constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown
    // (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.log(e.name); // CustomError
  console.log(e.foo); // baz
  console.log(e.message); // bazMessage, passed to parent constructor.
  console.log(e.stack); // will return the stacktrace.
}

// Now back to the 30 Day Of Javascript Content.
// The above mostly covers it so the only useful section here is...
/* Some common error types...
Error Types

ReferenceError: An illegal reference has occurred. A ReferenceError 
is thrown if we use a variable that has not been declared.
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)
Uncaught ReferenceError: lastName is not defined at <anonymous>:2:35

SyntaxError: A syntax error has occurred
let square = 2 x 2
console.log(square)
console.log('Hello, world")

Uncaught SyntaxError: Unexpected identifier
TypeError: A type error has occurred
let num = 10
console.log(num.toLowerCase())
Uncaught TypeError: num.toLowerCase is not a function at <anonymous>:2:17
*/
