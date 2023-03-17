// Non-primitive data types are modifiable or mutable.
// Rule of thumb, we do not compare non-primitive data types.
// Do not compare arrays, functions or objects. Non-primitive values are
// referred to as reference types, because they are being compared by reference
// instead of value. Two objects are only strictly equal if they refer to the
// same underlying object.

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // [10, 2, 3] as mutable

nums = [1, 2, 3];
let numbers_1 = [1, 2, 3];
console.log(nums == numbers_1); // false as different location in memory.

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
console.log(userOne == userTwo); // false due to different location in memory.

let numbers = nums;
console.log(nums == numbers); // true

userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
userTwo = userOne; // as userTwo is now pointing at same object as userOne ie
// same memory location.
console.log(userOne == userTwo); // true
