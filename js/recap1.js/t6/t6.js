let number = Number(prompt('Enter a positive integer:'));

let table = "<table border='1'>";

for (let row = 1; row <= number; row++) {
  table = table + '<tr>';

  for (let column = 1; column <= number; column++) {
    let product = row * column;

    table = table + '<td>' + product + '</td>';
  }

  table = table + '</tr>';
}

table = table + '</table>';

document.getElementById('result').innerHTML = table;
