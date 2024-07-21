// Statements
// 1. if else
// 2. Switch case

//1. if else
// SYNTAX:
// if (condition){
//     LOGIC
// }
// else {
//     LOGIC
// }

// const gender = confirm("Are you male?")
// if (gender) {
//     alert("You are male"); //if true
// } else {
//     alert{"You are female"};
// }

// const gender = prompt("Enter M for male and F for female:");
// if (gender === "M") {
//   alert("You are male");
// } else {
//   alert("You are female");
// }

// 2. Switch case

// CHECK MULTIPLE CASES

// WRITE A JS PROGRAM TO CHECK NAME OF DAYS
// CODE:

// const day = Number(prompt("Enter day number 1 or 2?"));
// switch (day) {
//   case 1:
//     alert("sunday");
//     break;
//   case 2:
//     alert("Monday");
//     break;
//   default:
//     alert("You have to choose betn 1 and 2");
//     break;
// }

// WRITE A JS PROGRAM TO CHECK GRADE OF STUDENT

// const score = Number(prompt("Enter your percentage?"));

// switch (true) {
//   case score >= 100:
//     alert("You have scored GRADE A ");
//     break;
//   case score >= 60 && score <80:
//     alert("You have scored GRADE B ");
//     break;
//   default:
//     alert("You have failed your exam.");
// }

// CONDITIONAL OPERATOR (TERNARY OPERATOR)

// IF (){} ELSE{} ES5
// TERNARY OPERATOR  ES6

// const gender = "m";
// if (gender === "m") {
//   console.log("male");
// } else {
//   console.log("female");
// }

// SYNTAX:
// (condition) ? true : false;

const gender = "m";
gender === "m" ? console.log("male") : console.log("female");

// =      Variable assign
// ==     data type and value compare
// ===    data type and value compare + data conversion to boolean  (always use for value comparisions)
