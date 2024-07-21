// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


const t = prompt("Enter 'C' to convert into celsius and 'F' to convert into fahrenhiet");
const value = Number(prompt(`Enter the temperature to convert into ${t}`)); 

const intoCelsius = ((value - 32) / 9) * 5;
const intoFahrenheit = ((value / 5)*9)


switch(true) {
    case t === "C";
    alert(`The desired Temperature in Celsius is $()`);

}
