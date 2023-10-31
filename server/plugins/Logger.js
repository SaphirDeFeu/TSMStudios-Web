const fs = require('fs');
const util = require('util');
const path = require('path');

console.log(path.join(__dirname, '../logs'));

class Logger {
  constructor() {
    this.logsDirectory = path.join(__dirname, '../logs');
    this.logFileName = '';

    this.logQueue = [];
    this.isLogging = false;

    this.writeLog = util.promisify(this.writeLog);
  }

  async writeLog(log) {
    if (this.isLogging) {
      this.logQueue.push(log);
      return;
    }

    this.isLogging = true;
    try {
      if (!this.logFileName) {
        const now = new Date();
        const dateFormatted = `${now.getUTCDate()}-${now.getUTCMonth() + 1}-${now.getUTCFullYear()}`;
        this.logFileName = `log_${dateFormatted}.log`;
      }

      const logEntry = `${log}\n`;
      await fs.promises.appendFile(path.join(this.logsDirectory, this.logFileName), logEntry);

      if (this.logQueue.length > 0) {
        const nextLog = this.logQueue.shift();
        this.writeLog(nextLog);
      }
    } finally {
      this.isLogging = false;
    }
  }

  output(log) {
    console.log(log);
    const regex = /\[[0-9]+m/g; 
    const cleanLog = log.replace(regex, '');
    this.writeLog(cleanLog);
    return;
  }
}

module.exports = Logger;