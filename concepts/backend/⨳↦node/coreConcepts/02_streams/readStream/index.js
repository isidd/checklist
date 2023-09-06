// const fs = require("fs/promises");
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
      if (!writeStream.write(" " + n + " ")) {
        readStream.pause();
      }
    });
  });

  writeStream.on("drain", () => {
    readStream.resume();
  });
})();
