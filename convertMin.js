function convertMinutesToSeconds(minutes) {
    return minutes * 60;
  }
  // Testing the function
  const minutes = 5;
  const seconds = convertMinutesToSeconds(minutes);
  console.log(`${minutes} minutes is equal to ${seconds} seconds.`);