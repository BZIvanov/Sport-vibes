const logger = require('./logger');

// we are providing here message with level info
logger.log('info', 'It works!');

logger.error(new Error('Boom'));
