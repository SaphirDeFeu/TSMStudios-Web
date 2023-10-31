import * as path from "path";
import * as util from 'util';
import * as fs from 'fs';

console.log(path.join(__dirname, '../../logs'));

export default class Logger {
  logQueue: string[];
  logsDirectory: string;
  logFileName: string;
  isLogging: boolean;

  constructor() {
    this.logsDirectory = path.join(__dirname, '../../logs');
    this.logFileName = '';

    this.logQueue = [];
    this.isLogging = false;

    this.writeLog = util.promisify(this.writeLog);
  }

  async writeLog(log: string): Promise<void> {
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
        if(!nextLog) {
          return;
        }
        this.writeLog(nextLog);
      }
    } finally {
      this.isLogging = false;
    }
  }

  output(log: string): void {
    console.log(log);
    const regex = /\[[0-9]+m/g; 
    const cleanLog = log.replace(regex, '');
    this.writeLog(cleanLog);
    return;
  }
}
