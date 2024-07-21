// FUNCTIONS are the main building block of any program
// 2 Core principles
//   a. DRY (Do not repeat yourself)
//   b. SoC (Separation of Concern)

// 2 ways to write function
// 1. ES5

// QUESTION : Write  a sum function for adding 2 numbers

// // FUNCTION DECLARATION :
// // a,b and c are called parameters.
// function sum(a, b) {
//   //LOGIC is written here
//   const c = a + b;
//   return c; //return is used to give output
// }
// //FUNCTION CALL or EXECUTION
// const result = sum(2, 3);
// const result1 = sum(5, 5);
// console.log({ result });

// # write a JAVASCRIPT function for finding a square of a Number

// function square(a) {
//   const s = a * a;
//   return s;
//   // OR directly write : [return a*a;]
// }
// const result = square(5);
// console.log(result);

// 2. ES6

// SYNTAX:

const squares = (p) => {
  return p * p;
};
const newAnswer = squares(4);
console.log({ newAnswer });
