const { DateTime } = require('luxon');

console.log(DateTime.now().toISO()); // 2021-03-12T15:04:17.332+02:00

console.log(DateTime.now().toISODate()); // 2021-03-12

console.log(DateTime.local().toISODate()); // 2021-03-12

console.log(DateTime.local().minus({ day: 1 }).toISODate()); // 2021-03-11

console.log(DateTime.local().minus({ week: 1 }).toISODate()); // 2021-03-05

console.log(DateTime.fromISO('2021-03-14')); // DateTime.js

// the provided date is different time zone, but toLocaleString will also set to current time zone
const myLocalDate = DateTime.fromISO('2021-03-29T19:21:37.950Z');
console.log(myLocalDate.toLocaleString(DateTime.DATETIME_MED)); // Mar 29, 2021, 10:21 PM
