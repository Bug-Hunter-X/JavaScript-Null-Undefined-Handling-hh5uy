function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values, defaulting to 0
  b = b === null ? 0 : b; // Handle null values, defaulting to 0

  // type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input.  Both parameters must be numbers.";
  }
  return a + b; // Simple addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo("hello", 2)); // Output: "Invalid input. Both parameters must be numbers."