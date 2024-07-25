// ARRAYS
// Collection of items
// CRUD

// CREATE

// const arr = new Array();
// console.log({ arr });

// const arrV1 = [];

const cars = [
  { name: "Tesla", model: 2012 },
  { name: "Nexon", model: 2023 },
  { name: "i10", model: 2011 },
  { name: "Scorpio", model: 2017 },
];

// Read

console.log(cars[0]);

// Update

// const newName = "Tesla Model X";
// cars[0].name = newName;

// const copiesOfCars = Cars; // referential value [don't use]
// const copyOfCars = cars;
// console.log({ copyOfCars });
// const newName = "Tesla Model X";
// cars[0].name = newName;

// console.log({ copyOfCars });

const copyOfCars = [...cars]; //[{},{},{},{}]
const newName = "Tesla Model X";
copyOfCars[0].name = newName;

console.log({ copyOfCars });

// delete

const [a, ...rest] = copyOfCars;
// const [a,b,c, ...rest] = copyOfCars;

console.log({ rest });

//Array operations (methods)
// mozilla

// cars.length();
// cars.sort();
// cars.push();
// cars.pop();

// cars.slice(2);
// cars.slice(2,4);
// cars.slice(start, end(end not included));

// Map;
// Filter;
// reduce;
// slice;
// splice;
// some;
// every;
// includes();
// find();
