const cron = require('node-cron');
const formatDate = require('./utils/date-format')

const runner = {
  everySecond() {
    // with 6 parameters the first one is for seconds and optional, which means if you skip it, it will be every minute
    cron.schedule('* * * * * *', () => {
      console.log(formatDate(), 'every second')
    });
  },
  every5Seconds() {
    cron.schedule('*/5 * * * * *', () => {
      // it will run every 5 round seconds rounded to 5, if you start at 01h 02m 03s it will run in the following pattern 01h 02m 05s => 01h 02m 10s
      console.log(formatDate(), 'every round 5 second')
    });
  },
  everyMinute() {
    cron.schedule('* * * * *', () => {
      // note that every minute means not at the time you started the cron, but every round minute - 01h 02m 00s => 01h 03m 00s
      console.log(formatDate(), 'every round minute')
    });
  },
  every2Minutes() {
    cron.schedule('*/2 * * * *', () => {
      console.log(formatDate(), 'every round 2 minutes')
    });
  },
  sepcificSecondsInterval() {
    cron.schedule('10-20 * * * * *', () => {
      // running once each second for 10 seconds, example 01h 02m 10s - 01h 02m 20s
      console.log(formatDate(), 'between 10th and 20th seconds in a minute')
    });
  },
  specificSelectedSeconds() {
    cron.schedule('10,12,17 * * * * *', () => {
      // running three times every minute in the specified seconds
      console.log(formatDate(), 'it is 10, 12 or 17 second')
    });
  },
  midnight() {
    cron.schedule('0 0 0 * * *', () => {
      console.log(formatDate(), 'it is midnight')
    }, {
      scheduled: true,
      timezone: "Europe/Sofia",
    });
  },
  everyHour() {
    cron.schedule('0 * * * *', () => {
      console.log(formatDate(), 'every hour')
    });
  }
}

runner.everyHour();
