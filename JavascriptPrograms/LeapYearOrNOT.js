function LeapYearOrNot(number) {
  if (number % 400 == 0) {
    console.log("leap year");
    return;
  } else if (number % 100 == 0) {
    console.log("not a leap year");
    return;
  } else if (number % 4 == 0) {
    console.log("leap year");
    return;
  } else {
    console.log("not a leap year");
  }
}

LeapYearOrNot(800);

/*
divisible by 400 
not divisible by 100
divisible by 4
else not leap year
I mean by order of priority
*/
