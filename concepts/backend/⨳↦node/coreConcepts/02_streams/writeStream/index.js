const fs = require("fs/promises");
const fileMod = require("fs");

// =====================================================Promise version=======================================================//

// Execution Time : 6 sec
// CPU Usage : 100% (one core)
// Memory : 50MB/sec
const d = Promise.resolve(() =>
  (async () => {
    console.time("writeMany");
    const handleFile = await fs.open("store/test.txt", "w");
    for (var i = 0; i < 1000000; i++) {
      handleFile.write(`${i} `);
    }
    console.timeEnd("writeMany");
  })()
);

// d.then((r) => r());

// =====================================================Callback Version=======================================================//

// Execution Time : ~2 sec
// CPU Usage : 100% (one core)
// Memory : 50MB/sec
let c = Promise.resolve(() =>
  (async () => {
    console.time("writeMany1");
    fileMod.open("store/test1.txt", "w", (err, fd) => {
      // (error, fileDescriptor > each open file file has a unique file descriptor(id))
      for (var i = 0; i < 1000000; i++) {
        fileMod.writeSync(fd, `${i} `);
        //   this is going to execute in synchronous way that means the order will be maintained
      }
      console.timeEnd("writeMany1");
    });
  })()
);

// c.then((c) => c());
/* 
for (var i = 0; i < 10000000; i++) {
      fileMod.writeSync(fd, `${i} `);
      //   this is going to execute in synchronous way that means the order will be maintained
    }

    It will take all the memory(RAM) and will crash as we are pushing so much events to the event loop and so it will quickly 
    run out of memory

*/

// =====================================================Callback Version(Buffer)=======================================================//

// Execution Time : ~2 sec
// CPU Usage : 100% (one core)
// Memory : 50MB/sec
let b = Promise.resolve(() =>
  (async () => {
    console.time("writeMany2");
    fileMod.open("store/test2.txt", "w", (err, fd) => {
      // (error, fileDescriptor > each open file file has a unique file descriptor(id))
      for (var i = 0; i < 1000000; i++) {
        const buff = Buffer.from(`${i} `);
        fileMod.writeSync(fd, buff);
        //   this is going to execute in synchronous way that means the order will be maintained
      }
      console.timeEnd("writeMany2");
    });
  })()
);

// b.then((r) => r());

// =====================================================Streams Solution=======================================================//

// NOT A GOOD PRACTICE (Memory usage jumps to 200MB )
// execution time : < 1sec
// CPU Usage : 100%
// Memory Usage : 200MB
let a = Promise.resolve(() => {
  return (async () => {
    console.time("writeMany4");
    const stream = fileMod.createWriteStream("store/buff.txt");
    for (var i = 0; i < 1000000; i++) {
      const buff = Buffer.from(`${i} `, "utf-8");
      stream.write(buff);
    }
    console.timeEnd("writeMany4");
  })();
});

// a.then((r) => r());

// =====================================================Stream Version=======================================================//

// Execution Time : ~300ms
// Memory Usage : 50MB
let e = Promise.resolve(() => {
  return (async () => {
    console.time("writeMany5");
    const stream = fileMod.createWriteStream("store/buff.txt");
    // console.log(stream.writableHighWaterMark);
    // console.log(stream.writableLength);
    // stream.write(Buffer.from("Siddhartha"));

    // console.log(stream.writableHighWaterMark);

    // const buff = Buffer.alloc(16383, "a");
    // console.log(stream.write(buff));
    // console.log(stream.write(Buffer.alloc(1, "a")));
    // stream.on("drain", () => {
    //   console.log("we are now safe to write more..!");
    //   stream.write(Buffer.from("Siddhartha"));
    //   console.log(">>", stream.writableLength);
    // });

    let i = 0;
    const writeMany = () => {
      while (i < 100000) {
        const buff = Buffer.from(`${i} `, "utf-8");
        if (i === 100000 - 1) {
          return stream.end(buff);
        }
        //  if this returns false that means Internal buffer is full and it breaks from the loop and gets catch by "drain"
        if (!stream.write(buff)) break;
        i++;
      }
    };

    // this will emit when the Internal buffer is full..
    //

    stream.on("drain", () => {
      writeMany();
    });

    stream.on("finish", () => {
      console.timeEnd("writeMany5");
    });

    writeMany();
  })();
});

e.then((r) => r());
