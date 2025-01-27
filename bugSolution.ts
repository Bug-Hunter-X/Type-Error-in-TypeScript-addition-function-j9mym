function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Invalid input types. Both parameters must be numbers.');
    return 0; // or throw an error
  }
}

let result = add(5, 3); // result is 8
console.log(result); // Output: 8

result = subtract(10, 5); // result is 5
console.log(result); // Output: 5

// No more Type Error
result = addSafe(5, 'hello');
console.log(result); // Output: error message and 0
result = addSafe(5, 3);
console.log(result); // Output: 8