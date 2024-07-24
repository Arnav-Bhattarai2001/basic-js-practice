// // TYPES OF FUNCTION :

// // 1. DEFAULT Function : Used for pagination  


// const defaultFunc = (name) => {
//   console.log(`Hello ${name}`);
// };
// defaultFunc("Arnav"); // Hello Arnav
// defaultFunc("Admin"); // Hello Admin
// defaultFunc(); // Hello undefined

// const defaultFunc1 = (name = "User") => {
//   console.log(`Hello ${name}`);
// };
// defaultFunc1("Arnav");
// defaultFunc1("Admin");
// defaultFunc1(); // Hello User

// // 2. Parameterized Function :

// const sumation = (a, b, c, d) => {
//   console.log(a + b);
// };
// sumation(2, 3, 1, 4);

// // Parameterized function applied :
// const sumations = ({ a, b, c, d }) => {
//   console.log(a + b + c + d);
// };
// sumations({ a: 2, b: 3, c: 1, d: 4 });

// // 3. Arrow Function :

// const summ = (a, b) => {
//   return a + b;
// };

// // 4. closure Function :

// // FOR EXPLANATION:
// // let count = 0;
// // const counter = () => {
// //   count = count + 1;
// //   return count;
// // };
// // console.log(counter());
// // console.log(counter());
// // console.log(counter());

// // ACTUAL COUNTER FUNCTION:
// const mainCounter = () => {
//   let count = 0;
//   return () => {
//     count = count + 1;
//     return count;
//   };
// };
// const count1 = mainCounter(); // dashain counter
// const count2 = mainCounter(); // tihar counter
// console.log(count1());
// console.log(count1());
// console.log(count1());

// console.log(count2());
// console.log(count2());

// // 6. Recursive function

// // factorial of 5

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };

// const fact = factorial(5);
// console.log(fact);

// // write a recursion formula for countdown

// const countDown = (counter) => {
//   console.log(counter);
//   let count = counter - 1;
//   if (count === 0) {
//     return 0;
//   }
//   return countDown(count);
// };
// countDown(10);

// // 7. Anonymous function

// (a) => {
//   console.log(a);
// };

// // 8. Inline Function :

// // const test = () => {}; // We get Inline Function if we assign Anonymous Function to a Variable.

// const test = () => {
//   const d = 1;
//   console.log({ d });
// };
// test();

// // ES6 :
// const tests = () => {
//   const dd = 1;
//   console.log({ d });
// };
// const dd = "alpha"; //  The variable dd(inside function) didnt get affected the declaration of same variable outside the function.
// console.log({ d });
// tests();

// // ES5 :
// const d = "alpha";
// function testss() {
//   console.log(`global variable : ${d}`);
// }
// testss();

// // Output : [global variable : alpha]
// // bahira declare gareko variable "d" ko value bhitra function le liyo , So in ES5 function self contained hudaina

// // 9. CallBack Function :

// const print = (data) => {
//   console.log({ data });
// };

// const parent = (abcde) => {
//   const num = "Arnav";
//   abcde(num);
// };

// parent(print);

// 10. Pure Function : 

// In JavaScript, a pure function is a function that always produces the same output for the same input


const upperConverter = (text) => {
  console.log(text.toUpperCase());
};

upperConverter("Arnav");
upperConverter("Asmi");
upperConverter("Bhattarai");

// 11. Implicit Function :

// 12. Explicit Function :
