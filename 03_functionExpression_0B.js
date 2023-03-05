var checkLeapYear=function(leapYear){
  if ((leapYear%4) == 0) {
     console.log(`The given year ${leapYear} is:Leap year`);
  } else {
     console.log(`The given year ${leapYear} is:Not leap year`);
  }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear('Twenty Twenty');
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);