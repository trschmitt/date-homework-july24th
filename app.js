const chalk = require('chalk');
const moment = require('moment');

let timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let day = moment().format("DDDo");
let midnight = moment().startOf("day");
let dayLightSave = moment().format("dddd, MMMM Do YYYY, h:mm:ss a").isDST();
let leapYear = moment().format("YYYY").isLeapYear();

let secFromMidnight = moment().diff(midnight, "seconds");


console.log(`${chalk.blue(timeStamp)}`);
console.log(`Today is the ${day} day of the year.`);
console.log(`${chalk.secFromMidnight}`);
