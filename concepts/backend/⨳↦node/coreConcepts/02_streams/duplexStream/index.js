const { Duplex } = require("stream");

class CustomDuplex extends Duplex {
  constructor(
    writableHighWaterMark,
    readableHighWaterMark,
    readFileName,
    writeFileName
  ) {
    super({ writableHighWaterMark, readableHighWaterMark });
    this.readFileName = readFileName;
    this.writeFileName = writeFileName;
    this.readFd = null;
    this.writeFd = null;
    this.chunks = [];
    this.chunkSize = 0;
  }

  _construct(callback) {
    fs.open(this.readFileName, "r", (err, readFd) => {
      if (err) return callback(err);
      this.readFd = readFd;
      fs.open(this.writeFileName, "w", (err, writeFd) => {
        if (error) return callback(err);
        this.writeFd = writeFd;
        callback();
      });
    });
  }

  _write(chunk, encoding, callback) {
    // do our write operation
    this.chunk.push(chunk);

    this.chunkSize += chunk.length;

    if (this.chunkSize > this.writableHighWaterMark) {
      fs.write(this.writeFd, Buffer.concat(chunk), (err) => {
        if (err) return callback(err);
        this.chunk = [];
        this.chunkSize = 0;
        callback();
      });
    } else {
      // when we are done we should call our callback function
      callback();
    }
  }

  _read(size) {
    const buff = Buffer.alloc(size);
    fs.read(this.readFd, buff, 0, null, (err, bytesRead) => {
      // no callback we have to call destroy method
      if (err) return this.destroy(err);
      this.push(bytesRead > 0 ? buff.subarray(0, bytesRead) : null);
    });
  }

  _final(callback) {
    fs.write(this.writeFd, Buffer.concat(this.chunk), (err) => {
      if (err) return callback(err);
      this.chunk = [];
      callback();
    });
  }

  _destroy(error, callback) {
    callback(error);
  }
}

const duplex = new CustomDuplex({
  readFileName: "read.txt",
  writeFileName: "write.txt",
});

duplex.write(Buffer.from("this is string 0 \n"));
duplex.write(Buffer.from("this is string 1 \n"));
duplex.write(Buffer.from("this is string 2 \n"));
duplex.write(Buffer.from("this is string 3 \n"));
duplex.write(Buffer.from("this is string 4 \n"));
duplex.write(Buffer.from("this is string 5 \n"));
duplex.end(Buffer.from("This is the end string"));

duplex.on("data", (chunks) => {
  console.log(chunks);
});
