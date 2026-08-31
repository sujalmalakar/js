let celsius = prompt("Enter temperature in Celsius:");

celsius = Number(celsius);

let fahrenheit = (celsius * 9) / 5 + 32;
let kelvin = celsius + 273.15;

document.getElementById("result").innerHTML =
  "Fahrenheit: " + fahrenheit + " °F<br>" +
  "Kelvin: " + kelvin + " K";