const chalk = require('chalk');

const success = (message = '') => console.log(`${chalk.green('success')} ${message}`);

module.exports = success;
