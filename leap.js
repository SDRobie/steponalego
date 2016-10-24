function leapYear(date) {
  if (date % 4 != 0) {
      return false;
  } else if (date % 4 == 0 && date % 400 == 0) {
    return true;
  } else if (date % 4 ==0 && date % 100 ==0) {
    return false;
  } else {
    return true;
  }
}
console.log(leapYear(2000));
