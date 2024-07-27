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


