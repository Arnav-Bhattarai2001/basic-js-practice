// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const num = Number(prompt("Enter a number"));

if (num > 0) {
  switch (true) {
    case num % 3 === 0 && num % 7 === 0:
      alert(`THE NUMBER ${num} is divisible by both 3 and 7`);
      break;
    case num % 3 === 0:
      alert(`THE NUMBER ${num} is divisible by 3 only`);
      break;
    case num % 7 === 0:
      alert(`THE NUMBER ${num} is divisible by 7 only`);
      break;
    default:
      alert(`THE NUMBER ${num} IS NEITHER DIVISIBLE BY 3 NOR 7`);
      break;
  }
} else {
  alert("Please enter positive number:");
}
