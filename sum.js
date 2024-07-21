// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

const a = Number(prompt("Enter first number : "));
const b = Number(prompt("Enter second number : "));
const sum = a + b;
const tripleSum = sum * 3;
if (a === b) {
  alert(`The values are same and the triple of their sum is : ${tripleSum}`);
} else {
  alert(`The sum of two numbers is : ${sum}`);
}
