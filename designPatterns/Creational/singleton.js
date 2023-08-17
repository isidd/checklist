/*
    Singleton design pattern 
        - It is type of object which can be instantiated once
        - It's state is shared 
        - https://youtu.be/sJ-c3BA-Ypo 
 */

class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }
  log(message) {
    this.logs.push(message);
    console.log("Logged : " + message);
  }
  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const lg1 = new Logger();
lg1.log("Log 1");
lg1.log("Log 2");
const lg2 = new Logger();
lg2.log("Log 3");

lg2.printLogCount();

// Simple way to create a singleton object is by defining the object at global level

let Logger = {
  logs: [],
  log: function (message) {
    this.logs.push(message);
    console.log("Logged : " + message);
  },
  printLogCount: function () {
    console.log(`${this.logs.length} Logs`);
  },
};

Logger.log("Logged 1");
Logger.log("Logged 2");
Logger.log("Logged 1");
Logger.printLogCount("Logged 1");
