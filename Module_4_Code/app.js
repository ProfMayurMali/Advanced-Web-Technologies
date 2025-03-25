const chalk = require('chalk');

// Function to log error messages
const logError = message => {
  console.error(chalk.red(`[ERROR] ${message}`));
};

// Function to log warning messages
const logWarning = message => {
  console.warn(chalk.yellow(`[WARNING] ${message}`));
};

// Function to log regular messages
const logMessage = message => {
  console.log(chalk.blue(`[INFO] ${message}`));
};

// Simulated usage
logError('This is an error message');
logWarning('This is a warning message');
logMessage('This is a regular message');
