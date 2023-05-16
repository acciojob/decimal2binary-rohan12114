function decimalToBinary(decimalNumber) {
  // Base case: if the decimal number is 0, return '0' as binary representation
  if (decimalNumber === 0) {
    return '0';
  }

  let binaryNumber = '';
  
  while (decimalNumber > 0) {
    // Append the remainder of division by 2 to the binary number
    binaryNumber = (decimalNumber % 2) + binaryNumber;

    // Integer division of decimalNumber by 2
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryNumber;
}

// Example usage:
console.log(decimalToBinary(7));   // Output: 111
console.log(decimalToBinary(10));  // Output: 1010
console.log(decimalToBinary(33));  // Output: 100001
