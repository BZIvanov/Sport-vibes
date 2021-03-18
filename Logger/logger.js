const { join } = require('path');
const { createLogger, transports, format } = require('winston');

const filePath = join(__dirname, 'logs');

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      dirname: filePath,
      filename: 'info.log',
      level: 'info',
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
