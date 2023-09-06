const { Writable } = require("stream");
const fs = require("fs");
// const { Writable, Readable, Duplex, Transform } = require("stream");

class FileWriteStream extends Writable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark }); // it has other options also https://nodejs.org/api/stream.html#implementing-a-writable-stream
    this.fileName = fileName;
    this.fd = null;
    this.chunk = [];
    this.chunkSize = 0;
    this.writeCount = 0;
  }

  //  we have to specifically implement one or more specific methods
  // https://nodejs.org/api/stream.html#api-for-stream-implementers

  //   this will run after the constructor, and it will pull off calling all the other methods until we
  //   call the callback function
  _construct(callback) {
    fs.open(this.fileName, "w", (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        // no arguments means it was successful
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    // do our write operation
    this.chunk.push(chunk);

    this.chunkSize += chunk.length;

    if (this.chunkSize > this.writableHighWaterMark) {
      fs.write(this.fd, Buffer.concat(chunk), (err) => {
        if (err) return callback(err);
        this.chunk = [];
        this.chunkSize = 0;
        ++writeCount;
        callback();
      });
    } else {
      // when we are done we should call our callback function
      callback();
    }
  }

  _final(callback) {
    fs.write(this.fd, Buffer.concat(this.chunk), (err) => {
      if (err) return callback(err);
      this.chunk = [];
      callback();
    });
  }

  _destroy(error, callback) {
    console.log("Number of writes", this.writeCount);
    if (this.fd) {
      fs.close(this.fd, (err) => {
        // never use throw new Error => we should always pass errors by calling callback.
        callback(err || error);
      });
    } else {
      callback();
    }
  }
}

const stream = new FileWriteStream({
  highWaterMark: 1000,
  fileName: "sidd.txt",
});
// since it is node -v 14 _construct is not available
stream.write(Buffer.from("This is Siddhartha"), "utf-8", (err) => {
  console.log(err);
});

// this will called at the
stream.end(Buffer.from("This is Siddhartha"));

// _final event is been called before the stream is about to be closed
// finish event -> is only been called on _final method callback()
stream.on("finish", () => {
  console.log("Stream was finished..!");
});
