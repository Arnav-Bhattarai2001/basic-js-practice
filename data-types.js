// Datatype(5 types)
// 1.Primitive Datatypes
// 2. Complex
// type conversion / coercion
// const a = "2";
// console.log(typeof a); //check type
// const num= Number(a);  //type conversion
// console.log(num);

// const a = 2;
// console.log(a);

// const b = Number(a);
// console.log(b);

// const c = String(b);
// console.log(c);

const a = "2"; // If declared within double inverted comma, then it is regarded as "String" by JavaScript
console.log(typeof a);

const b = 2;
console.log(typeof b); //If not declared within double inverted comma, then it is regarded as "Number" by JavaScript

const c = Number(a); //Type conversion from "string" to "number"
console.log(c);
console.log(typeof c);
