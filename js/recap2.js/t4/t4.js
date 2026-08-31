function sortArray(numbers) {
  let sorted = [...numbers];
  sorted.sort((a, b) => a - b);
  return sorted;
}

let numbers = [8, 3, 10, 2, 5];

console.log('Original Array:', numbers);
console.log('Sorted Array:', sortArray(numbers));
