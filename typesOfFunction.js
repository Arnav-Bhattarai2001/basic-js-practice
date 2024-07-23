// TYPES OF FUNCTION :

// 1. DEFAULT Function :

const defaultFunc = (name) => {
  console.log(`Hello ${name}`);
};
defaultFunc("Arnav"); // Hello Arnav
defaultFunc("Admin"); // Hello Admin
defaultFunc(); // Hello undefined

const defaultFunc1 = (name = "User") => {
  console.log(`Hello ${name}`);
};
defaultFunc1("Arnav");
defaultFunc1("Admin");
defaultFunc1(); // Hello User

// 2. Parameterized Function :

const sumation = (a, b, c, d) => {
  console.log(a + b);
};
sumation(2, 3, 1, 4);

// Parameterized function applied :
const sumations = ({ a, b, c, d }) => {
  console.log(a + b + c + d);
};
sumations({ a: 2, b: 3, c: 1, d: 4 });

// 3. Arrow Function :

const summ = (a, b) => {
  return a + b;
};
