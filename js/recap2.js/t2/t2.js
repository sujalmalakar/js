let numbers = [];

let n1 = Number(prompt('Enter number 1'));
numbers.push(n1);

let n2 = Number(prompt('Enter number 2'));
numbers.push(n2);

let n3 = Number(prompt('Enter number 3'));
numbers.push(n3);

let n4 = Number(prompt('Enter number 4'));
numbers.push(n4);

let n5 = Number(prompt('Enter number 5'));
numbers.push(n5);

console.log('Numbers:', numbers);

let search = Number(prompt('Enter a number to search'));

if (numbers.includes(search)) {
  console.log('Number ' + search + ' is found');
} else {
  console.log('Number ' + search + ' is not found');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted Numbers:', numbers);
