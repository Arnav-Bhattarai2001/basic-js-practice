// // TYPES OF QUESTION

// // 1. DEFAULT FUNCTION:
// // used for pagination

// const defaultFunc = (name ="user") =>

// //2. PARAMETERIZED FUNCTION
// const sumation = ({a,b,c,d}) => {
//     console.log(a+b);
// };
// sumation({a:2, b:3, c:1, d:4});

// // 3. arrow function

// const summation = (a,b) => {
//     return a+b;
// };

// // 4. closure function

// let count = 0;
// const counter = () => {
//     count = count + 1;
//     return count;
// }

// const mainCounter = () => {
//     let count = 0;
//     return () => {
//         count = count + 1;
//         return count;
//     };
// };

// // 5. IIFEs (Immediately Invoked Functional Expression)

// ((name)) => {

//     console.log(`Hello ${name}`)
// })(`Arnav`)

// // 6. Recursive function

// // factorial of 5

// const factorial = (num) => {
//     if (num === 0) || (num === 1) {
//         return 1;
//     }
//     return num * factorial(num-1);
// };

// const fact = factorial(5);
// console.log(fact);

// write a recursion formula for countdown

const countDown = (counter) => {
  console.log(counter);
  let count = counter - 1;
  if (count === 0) {
    return 0;
  }
  return countDown(count);
};
countDown(10);

// 7. Inline function



















// 8. anonymous function
// 9. callback function
