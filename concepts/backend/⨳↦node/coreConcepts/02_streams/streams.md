Link : https://www.youtube.com/watch?v=e5E8HHEYRNI&ab_channel=Cododev

Overview :

                                            Streams
                        An abstract interface working with streaming data in Node Js
                                        continues flow of data

        What ?
           500 people are comping in Party -> that means small chunks of people will come to party continuously
           not everyone will come at the same time

        How ?
                                It is not ideal to copy whole file
                                          Copy/Pasting
                                |----------|         |----------|
                                |File(10GB)|   ==>   |File(10GB)|
                                |----------|         |----------|

                                             Stream
                                |----------|         |----------|
                                |   File   |         |   File   |
                                |----------|         |----------|
                                    ▢ ==> small chunks (50kb)
                                    ▢ ==> small chunks (20kb)
                                    ▢ ==> small chunks (30kb)
                              by-default ▢ -> chunk size will 16kb
                    It is going to get more writes but it is quite efficient


                                        Process

        |--------|        |----------|
        |        | Stream |  Online  |
        |  Node  |   ==>  |  Video   |  (chunk of data is shared between node server and online video editing tool)
        |        |        |  Editing |
        |--------|        |----------|
      |---------------------------------------------------------------------------------------------|
      |                                     Operating System                                        |
      |---------------------------------------------------------------------------------------------|
        |---------|          |---------|           |-▢------------|           |------------------|
        |   CPU   |          |   RAM   |           | ▢  Storage   |           |   Network Card   |
        |---------|          |---------|           |-▢------------|           |------------------|


|---------------------------------------Motherboard---------------------------------------------------------|

    . Without Stream => we write about 1M times
    . With Streams => we wait for data to gather and gets it big enough as the size of the chunk and then write

**_<!- Writable Stream (fs.createWriteStream()) ->_**
fs.createWriteStream() -> this is going to return

                                     Writable Object
                        |-------------------------------------|
                        |     events | properties | methods   |
                        |    |----------------------------|   |
    stream.write(data)->| -> |->    ▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢   |   | --> write the data once the internal buffer is fulled
                        |    |----------------------------|   |
                        |     Internal buffer 16384 Bytes     |
                        |-------------------------------------|

. Inside our writable stream object we have internal buffer 16384 Bytes by default
. It will keep pushing chunks of data ▢(300/200/21223->bytes) until our buffer is completely filled
. now it will take the buffer data and do 1 write
. If the last chunk exceeds the internal buffer space -> then it will increased bytes will be in memory and node will keep track if it and once the internal buffer is emptied it will push the remaining chunk to the Intern buffer
. if the single chunk is as big as ▢(800MB) -> the node will have to put big amount of data in memory -> which is why we use buffer to lower this memory issue

```js
const stream = fileMod.createWriteStream("store/buff.txt");
console.log(stream.writableHighWaterMark);
const buff = Buffer.alloc(16384, 10);
stream.write(buff); // this will return false and at this point we need to wait for it to empty itself

// bad pressuring (we are not waiting when the internal buffer is full )
for (var i = 0; i < 1000000; i++) {
  const buff = Buffer.from(`${i} `, "utf-8");
  stream.write(buff);
}
```

(stream.writableLength === stream.writableHighWaterMark) that means the internal buffer is full and it will return false
. (stream.writableLength === stream.writableHighWaterMark) after this condition is met we need to wait otherwise we keep pushing to it buffering back data => bad pressuring
How can we let the Internal buffer empty ?
-> stream.on("drain") whenever this event happen it means buffer is now emptied and now we are safe to write more data

```js
const stream = fileMod.createWriteStream("store/buff.txt");
console.log(stream.writableHighWaterMark);
const buff = Buffer.alloc(16383, 10);
console.log(stream.write(buff));
console.log(stream.write(Buffer.alloc(1, "a")));
stream.on("drain", () => {
  console.log("we are now safe to write more..!");
  stream.write(Buffer.from("Siddhartha"));
  console.log(">>", stream.writableLength);
});
```

. should not exceed stream.writableLength stream.writableHighWaterMark | it is bad practice -> it will have performance issues
. stream.on("finish") will listen to stream.end()
. at the completion of stream we get -> stream.on("finish") listener

**_<!- Readable Stream (fs.createReadStream()) ->_**
fs.createReadStream() -> this is going to return

                                     Readable Object
                        |-------------------------------------|
                        |     events | properties | methods   |
                        |    |----------------------------|   |
    stream.push(data)-> | -> |->▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢ ▢ |   | --> stream.on('data',(chunk)=>{})
                        |    |----------------------------|   |
                        |     Internal buffer 16384 Bytes     |
                        |-------------------------------------|

. When ever we have the data of big chunk(800MB) to Write
We first need to create a -> Readable Stream (it will give us a data of ~16KB) and then -> we write to writable stream

- Note : Duplex and Transform streams will have same Object as above and has a method events and property of both and also have 2 Internal Buffer one for reading and one for writing.
  To check the size of Internal Buffer
  -> stream.readableHighWaterMark -> ~64kb
  -> stream.readableLength

```js
const fs = require("fs");
(async () => {
  const stream = fs.createReadStream("./store/buff.txt");
  stream.on("data", (data) => {
    console.log(data.length); // this will be ~65KB instead of 16KB
    console.log(data);
  });
})();
```

. We can change this using

```js
// 400 bytes
const stream = fs.createReadStream("./store/buff.txt", { highWaterMark: 400 });

// change back to 64KB
const stream = fs.createReadStream("./store/buff.txt", {
  highWaterMark: 64 * 1024,
});
```

                                      <<( Bit Mapping )>>
                                      1byte -> 8 bits |▢▢▢▢▢▢▢▢
                                      1hex character -> 4 bits | ▢▢▢▢
                                      character encoding utf-8 -> 1 char -> 8bits | ▢▢▢▢▢▢▢▢
                                      buffer -> 8bits | ▢▢▢▢▢▢▢▢ <0000 0100, 0101 1101> -> 2 bytes
                                          but is represented by hexa-decimal no.
                                      <0000 0000, 0101 1101> -> <00,12>

. if we want to manipulate the chunk of data from readStream the there will be issue at the end and starting of the
chunk

Sol:

```js
const fs = require("fs");

(async () => {
  const readStream = fs.createReadStream("./store/buff.txt");
  const writeStream = fs.createWriteStream("./store/dist.txt");
  readStream.on("data", (chunk) => {
    const number = chunk.toString("utf-8").split(" ");

    let split = "";
    // checking for the first element of the chunk
    if (Number(number[0]) != Number(number[1]) - 1) {
      if (split) number[0] = split + number[0];
    }
    // checking for the last element of the chunk
    if (
      Number(number[number.length - 2] + 1) !==
      Number(number[number.length - 1])
    ) {
      split = number.pop();
    }

    number.forEach((num) => {
      let n = Number(num);
      if (n % 2 == 0) {
        if (!writeStream.write(" " + n + " ")) {
          readStream.pause();
        }
      }
    });
  });

  writeStream.on("drain", () => {
    readStream.resume();
  });
})();
```

. mostly used methods -> writeStream.pause() , writeStream.resume()
. at the completion of stream we get -> stream.on("end") listener
. it has 3 modes
-> readable.readableFlowing === null (we have't done anything )
-> readable.readableFlowing === false (It is in pause mode)
-> readable.readableFlowing === true (It is flowing)

**_<!- pipe (readableStream().pipe(writableStream())) ->_**

pipe does not have error handling thing
for this we use a library called < pump >
or in the latest Node versions we have < pipeline >

**_<!- Duplex Stream ->_**

                                            Duplex Object
                                |-------------------------------------|
                                |                                     |
            (src.txt)           |    |----------------------------|   |
          stream.push(data)---->|    |  Readable Internal Buffer  |   |---->stream.on('data',(chunks)=>{})
                                |    |----------------------------|   |
                                |                                     |
                                |-------------------------------------|
                                |                                     |
                                |    |----------------------------|   |
         stream.write(data)---->|    |  Writable Internal Buffer  |   |---->write the data once filled
                                |    |----------------------------|   |           dist.txt
                                |                                     |
                                |-------------------------------------|

. Duplex Stream has 2 buffers (Readable and Writable)
. There 2 buffers are totally separated from each other(It can read from one source and can write to another source they don't have to be in relation)
.
