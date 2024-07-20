// CODE:
// const num1 = prompt("Enter first number:");
// const num2 = prompt("Enter second number:");
// const sum = num1 + num2;
// alert(`The sum of numbers ${num1} and ${num2} is ${sum}`);

// THIS CODE WAS RETURNING SUM OF 10 AND 20 IS 1020; THIS IS BECAUSE THE ENTERED VALUES '10 AND 20' ARE CONSIDERED TO BE STRINGS.
// THUS, WE NEED TO CONVERT THOSE STRINGS TO INTEGERS and HERE COMES THE ROLE OF "TYPE CONVERSION / TYPE COERCION".

// CODE:
const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));
const sum = num1 + num2;
alert(`The sum of numbers ${num1} and ${num2} is ${sum}`);
console.log({ num1, num2 }); // shows the values passed in (num1 and num2) ; done by using curly braces
