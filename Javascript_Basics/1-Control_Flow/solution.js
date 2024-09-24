function checkAge(age) {
  if(age < 18) {
    return "You are a minor.";
  } else {
    return "You are an adult.";
  }
}

function getDiscount(customerType) {
  return customerType === "member" ? 20 : 5;
}

function displayMessage(isLoggedIn) {
  if(isLoggedIn) {
    return "Welcome back!";
  }
}

function getDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}
