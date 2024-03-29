/**
 * Write two JavaScript functions that calculate
 * the multiplication and division of two numbers.
 * The name of your first function must be multiplication
 * and the name of the second function must be division.
 * The functions must take 2 arguments corresponding to the
 * numbers to be multiplied or divided: i and j.
 * The multiplication function must return the
 * product of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 * The division function must return the
 * quotient of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

// End of code

// Do not modify code below this line.
// --------------------------------

function multiplication(i, j) {
    return (i * j).toFixed(2).toString();
  }
  
  const result = multiplication(2, 4);
  console.log("result...", result);
  
  function division(i, j) {
    return (i / j).toFixed(2).toString();
  }
  
  const response = division(4, 2);
  
  console.log("response...", response);
  module.exports = { multiplication, division };
  module.exports = { multiplication, division };
  module.exports = { multiplication,division };
  