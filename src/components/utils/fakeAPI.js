const fetchAPI = date => {
  const result = [];
  const currentDate = new Date(date);
  
  for (let i = 17; i <= 23; i++) {
    // Check if the current hour (i) matches the hour of currentDate
    if (currentDate.getHours() === i) {
      // If the minutes of currentDate are less than 30, add a time slot of the format 'i:30'
      if (currentDate.getMinutes() < 30) {
        result.push(i + ':30');
      }
      // If the minutes of currentDate are 30 or greater, add a time slot of the format '(i + 1):00'
      if (currentDate.getMinutes() >= 30) {
        result.push((i + 1) + ':00');
      }
    } else {
      // If the current hour (i) doesn't match the hour of currentDate, generate random time slots
      if (Math.random() < 0.5) result.push(i + ':00');
      if (Math.random() < 0.5) result.push(i + ':30');
    }
  }
  
  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI, // This function generates a list of time slots based on the input date.
  submitAPI // Use to simulate a successful API submission
};
