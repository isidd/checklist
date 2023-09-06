const { Readable } = require("stream");
const fs = require("fs");

class FileReadStream extends Readable {
  constructor(highWaterMark, fileName) {
    super({ highWaterMark });
    this.fileName = fileName;
    this.fd = null;
  }
  _construct(callback) {
    fs.open(this.fileName, "r", (err, fd) => {
      if (error) return callback(err);
      this.fd = fd;
      callback();
    });
  }

  _read(size) {
    const buff = Buffer.alloc(size);
    fs.read(this.fd, buff, 0, null, (err, bytesRead) => {
      // no callback we have to call destroy method
      if (err) return this.destroy(err);
      this.push(bytesRead > 0 ? buff.subarray(0, bytesRead) : null);
    });
  }

  _destroy(error, callback) {
    if (this.fd) {
      fs.close(this.fd, (err) => {
        callback(error || err);
      });
    } else {
      callback();
    }
  }
}

const stream = new FileReadStream({ fileName: "sidd.txt" });

stream.on("data", (chunk) => {
  //   chunk.toString("utf-8");
  console.log(chunk);
});

// this will only be emit if we
stream.on("end", () => {
  console.log("Stream is done reading...!");
});
