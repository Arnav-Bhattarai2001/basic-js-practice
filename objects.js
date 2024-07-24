const person = {};

// Create
const arnav = {
  name: "Arnav Bhattarai", // property(key value pair)
  dob: "2001-10-18",
  gender: "m",
  hasValidLiscense: true,
  phone: {
    home: 1234567,
    phone: 987654321,
  },
  age: function age() {
    return 2024 - Number(this.dob.split("-")[0]); // (function ES5) method
  },
  newAge: () => {
    return 2024 - Number(arnav.dob.split("-")[0]); //(function ES6) method
  },
};

// READ
// PROPERTY

console.log(arnav.name, arnav.gender);

// METHOD
console.log(arnav.age());
console.log(arnav.newAge());

// Update
arnav.name = "arnav bhattarai";
console.log({ arnav });   

// DELETE

delete arnav.newAge;

// spread Operator

const { newAge, ...rest } = arnav;
console.log({ rest });

// Immutable JS (object/ array)
