// 1.for
// 2.do while
// 3.while

// For SyntaxError
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
