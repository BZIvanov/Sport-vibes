const { join } = require('path');
const { createLogger, transports, format } = require('winston');
const { timestamp, combine, errors } = format;

const filePath = join(__dirname, 'logs');

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: filePath,
      filename: 'info.log',
    }),
  ],
});

module.exports = logger;
