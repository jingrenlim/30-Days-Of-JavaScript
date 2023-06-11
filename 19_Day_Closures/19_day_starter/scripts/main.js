// Closures are just inner functions that access the variables
// of the outer function. Kinda like python decorators.
// The usefulness of closures is that closures can store state.
// Basically, it is because functions are first class objects.

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}
const innerFunc = outerFunction();
// you can call this repeatedly and then the count will increase
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// You can be creative and return an obj
function outerFunction1() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }
  // you can return an objects that attributes the inner functions
  return {
    plusone: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFunc2 = outerFunction1();
// then you can call them like this to access each inner function
console.log(innerFunc2.plusone);
console.log(innerFunc2.minusOne);
