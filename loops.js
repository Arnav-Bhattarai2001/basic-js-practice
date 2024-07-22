// 1.for
// 2.do while
// 3.while

// For 
// Syntax:
// for (begin ; step condition; increase begin step){
//    // CODE
// }

// JS Program for mul table

const table = Number(prompt("Enter the number for table; 2"));
if (isNaN(table)) {
  // if (typeof table !== "number"){
  alert("You didn't enter number!!");
}
for (let i = 1; i <= 10; i++) {
  // console.log(table * i);
  console.log(`${table}*${i}=${table * i}`);
}

// 2.DO WHILE LOOP

// begin step
// do {
//     //code execution
//     //increase begin step
// } while (STEP CONDITION)

// 3. WHILE LOOP

// begin step
// while(STEP CONDITION) {
//     Code execution
//     increase begin step
// }

// const table = Number(prompt("Enter the number for table; 2"));
// if (isNaN(table)) {
//   // if (typeof table !== "number"){
//   alert("You didn't enter number!!");
// }
// let i = 1;
// do {
//   console.log(`${table}*${i}=${table * i}`);
//   i++;
// } while (i <= 10);

// #WHILE LOOP

// const table = Number(prompt("Enter the number for table; 2"));
// if (isNaN(table)) {
//   // if (typeof table !== "number"){
//   alert("You didn't enter number!!");
// }
// let i = 1;
// while (i <= 10) {
//   console.log(`${table}*${i}=${table * i}`);
//   i++;
// }
