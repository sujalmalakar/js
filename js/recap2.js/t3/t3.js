let numbers = [];
let input;

while (input != 'done') {
  input = prompt("Enter a number or 'done' to finish");

  if (input != 'done') {
    numbers.push(Number(input));
  }
}

let even = [];

for (let number of numbers) {
  if (number % 2 == 0) {
    even.push(number);
  }
}

if (even.length > 0) {
  document.getElementById('result').innerHTML = 'Even Numbers: ' + even;
} else {
  document.getElementById('result').innerHTML = 'Even Numbers: None';
}

document.getElementById('end').innerHTML = 'End of program';
