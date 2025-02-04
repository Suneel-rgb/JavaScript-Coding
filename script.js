// Example of an Impure Function:

let counter = 0;

function incrementCounter() {
  counter += 1; // Modifies external variable (side effect)
  return counter;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
