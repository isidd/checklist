const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEvent = new Emitter();

myEvent.on("foo", (data) => {
  console.log(data);
});

myEvent.emit("foo", "Siddhartha");
