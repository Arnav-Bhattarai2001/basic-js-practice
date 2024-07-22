// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// BY USING FUNCTION

const t = prompt(
  "Enter 'C' to convert into celsius and 'F' to convert into fahrenhiet"
);
function intoC(a) {
  return ((a - 32) / 9) * 5;
}

function intoF(b) {
  return (b / 5) * 9 + 32;
}

switch (true) {
  case t === "C":
    const toConvertIntoCelsius = Number(
      prompt(`Enter the temperature to convert into ${t}`)
    );
    const x = intoC(toConvertIntoCelsius);
    alert(`The desired Temperature in Celsius is ${x} C`);
    break;

  case t === "F":
    const toConvertIntoFahrenheit = Number(
      prompt(`Enter the temperature to convert into ${t}`)
    );
    const y = intoF(toConvertIntoFahrenheit);
    alert(`The desired Temperature in Fahrenheit is ${y} F`);
    break;
  default:
    alert(
      "Please enter either 'C' to convert into celsius or 'F' to convert into fahrenhiet"
    );
}
