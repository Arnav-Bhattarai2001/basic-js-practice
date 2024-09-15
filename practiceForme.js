// // IMPORTANT QUESTIONS :

// // 1. let food = ['Noodle', 'Pasta', 'Ice-cream'];
// // let food = ['Fries', 'Ice-cream', 'Pizza'];
// // Compare the 2 arrays and find common food if any.

// // const foodA = ["Noodle", "Pasta", "Ice-cream"];
// // const foodB = ["Fries", "Ice-cream", "Pizza"];

// // const findItem = (a, b) => a.find((item) => b.includes(item));

// // console.log(findItem(foodA, foodB));

// //2. eg : arnav bhattarai => Arnav bhattarai

// // const properCase = (text) => {
// //   return text
// //     .split(" ")
// //     .map(
// //       (word) =>
// //         word.slice(0, 1).toUpperCase() +
// //         word.slice(1, word.length).toLowerCase()
// //     )
// //     .join(" ");
// // };

// // console.log(properCase("arNav bhaTtarai"));

// // 3. Get values of all characters using reduce method
// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// // Get total mass of all characters using reduce method
// const getMass = (arr) => {
//   return arr.reduce((prev, current) => prev + Number(current.mass), 0); //for first iteration , prev is 0 and for next iterations, prev is previously added values.
// };

// console.log(getMass(characters));

// // Get the total number of characters in all the character names
// const getNumberOfCharacters = (array) => {
//   return array.reduce(
//     (previousValue, currentValue) => previousValue + currentValue.name.length,
//     0
//   );
// };
// console.log(getNumberOfCharacters(characters));

