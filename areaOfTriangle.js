/**
 * Write a JavaScript function that finds the area of a triangle
 * given the lengths of three of its sides
 * The name of your function must be areaOfTriangle
 * The function must take 3 arguments corresponding
 * to the length of one side of the trianle: a, b and c.
 * The function must return the area of the triangle.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

// End of code

// Do not modify code below this line.
// --------------------------------

function areaOfTriangle(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
      .toFixed(2)
      .toString();
  }
  const sideA = 5;
  const sideB = 7;
  const sideC = 8;
  const triangleArea = areaOfTriangle(sideA, sideB, sideC);
  
  console.log("the area of a triangle is...", triangleArea);
  module.exports = { areaOfTriangle };
  module.exports = { areaOfTriangle };
  module.exports = { areaOfTriangle };
  