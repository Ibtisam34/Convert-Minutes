function convertAgeToDays(age) {
    const daysInYear = 365;
    const days = age * daysInYear;
    return days;
  }
  // Testing the function
  const ageInYears = 25;
  const ageInDays = convertAgeToDays(ageInYears);
  console.log(`The age of ${ageInYears} years is approximately ${ageInDays} days.`);