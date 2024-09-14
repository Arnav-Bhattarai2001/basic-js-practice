// // Use of array methods

// // write a js function that sorts the age in ascending order

// const people = [
//   { name: "raktim", age: 30 },
//   { name: "anjali", age: 18 },
//   { name: "paras", age: 25 },
// ];

// // const ageSorter = (arr) => {
// //   // process the value
// //   return arr.sort((a, b) => {
// //     // Callback function
// //     a.age - b.age;
// //   });
// // };

// const ageSorter = (arr) => {
//   const compareFn = (a, b) => a.age - b.age;
//   return arr.sort(compareFn);
// };

// // Or convert into implicit function for better understanding
// // const ageSorter = (arr) => {
// //   return arr.sort((a, b) => a.age - b.age);
// // };

// const result = ageSorter(people);
// console.log({ result });

// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.

const foodA = ["Noodle", "Pasta", "Ice-cream"];
const foodB = ["Fries", "Ice-cream", "Pizza"];


const findCommon = (a, b) => a.find((item) => b.includes(item));
console.log(findCommon(foodA, foodB));
