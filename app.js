const chalk = require('chalk');
const moment = require('moment');

let timeStamp = moment();
let day = moment().format("DDDo");
let midnight = moment().startOf("day");
let dlst = moment().isDST();
let leapYear = moment().isLeapYear();

let secFromMidnight = moment().diff(midnight, "seconds");

let dlstValue;
function DST() {
  if (dlst === true) {
    dlstValue = "is";
  }else {
    dlstValue = "isn't";
  }
}
DST(dlst);

let lyValue;
function LY() {
  if (leapYear === true) {
    lyValue = "is";
  } else {
    lyValue = "isn't";
  }
}
LY(leapYear);


console.log(`It is ${chalk.blueBright(timeStamp)}.`);
console.log(`Today is the ${chalk.greenBright(day)} day of the year.`);
console.log(`there have been ${chalk.cyan(secFromMidnight)} seconds today.`);
console.log(`It ${chalk.bgGreen(dlstValue)} Daylight Savings Time.`);
console.log(`It ${chalk.bgRed(lyValue)} a leap year.`);
