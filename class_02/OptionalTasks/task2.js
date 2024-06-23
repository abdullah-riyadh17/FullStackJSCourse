function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

// Example usage
console.log(getDayName(3)); // Tuesday
console.log(getDayName(7)); // Saturday
console.log(getDayName(0)); // Invalid day number

