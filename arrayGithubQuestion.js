// // Question 1 : SORT
// // a. Sort by name
// // b. Sort by mass
// // c. Sort by height
// // d. Sort by gender

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

// // a. Sort by name

// const sortName = [...characters];

// const nameSorter = (a, b) => {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
//   if (nameA < nameB) {
//     return -1; // a comes before b
//   }
//   if (nameB > nameA) {
//     return 1; // a comes after b
//   }
//   return 0; // names are equal
// };
// const sortNameResult = sortName.sort(nameSorter);
// console.log(sortNameResult);

// /*
// A comparison function is used to determine the order of elements. It takes two arguments, typically two elements from the array, and returns:

// a. (nameA < nameB) -1 == if the first element should come before the second element.
// b. (nameB > nameA) 1 == if the first element should come after the second element.
// c. (nameB = nameA) 0 == if the elements are equal and their order doesn't matter.
// */

// // b. Sort by mass

// const sortMass = [...characters];

// const massSorter = (mass) => {
//   const massNumber = Number(sortMass.mass);
//   const compareFn = (a, b) => a.mass - b.mass;
//   return mass.sort(compareFn);
// };
// const sortMassResult = massSorter(sortMass);
// console.log(sortMassResult);

// // c. Sort by height

// const sortHeight = [...characters];

// const heightSorter = (height) => {
//   const heightNumber = Number(sortHeight.height);
//   const compareFn = (a, b) => a.height - b.height;
//   return sortHeight.sort(compareFn);
// };
// const sortHeightResult = heightSorter(sortHeight);
// console.log(sortHeightResult);

// // d. Sort by gender

// const sortGender = [...characters];

// const genderSorter = (a, b) => {
//   const genderA = a.gender.toLowerCase();
//   const genderB = b.gender.toLowerCase();
//   if (genderA < genderB) {
//     return -1;
//   }
//   if (genderA > genderB) {
//     return 1;
//   }
//   return 0;
// };
// const genderSortResult = sortGender.sort(genderSorter);
// console.log(genderSortResult);

// // Question 1 : MAP

// // a . Get an array of all names
// // b . Get an array of all heights
// // c . Get an array of objects with just name and height properties
// // d . Get an array of all first names

// // a . Get an array of all names

// // const names = nameMap.map((a, b) => a + b);
// // const names = nameMap.map( a => a.name);

// const nameMap = [...characters];
// const names = nameMap.map((nameMapped) => nameMapped.name);
// console.log(names);

// // b . Get an array of all heights

// const heightMap = [...characters];
// const heights = heightMap.map((heightMapped) => heightMapped.height);
// console.log(heights);

// // c . Get an array of objects with just name and height properties

// const nameHeightMap = [...characters];
// const heightAndNames = nameHeightMap.map((hn) => ({
//   name: hn.name,
//   height: hn.height,
// }));
// console.log(heightAndNames);

// // d . Get an array of all first names

// const nameMaps = [...characters];
// const named = nameMaps.map((nameMapped) => nameMapped.name.split(" ")[0]);
// console.log(named);
