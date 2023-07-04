function calculateTriangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
  }
  // Testing the function
  const base = 10;
  const height = 5;
  const triangleArea = calculateTriangleArea(base, height);
  console.log(`The area of the triangle with base ${base} and height ${height} is ${triangleArea}.`);