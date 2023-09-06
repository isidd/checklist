const fs = require("fs");
(() => {
  const writeStream = fs.createWriteStream("./store/source-copy.txt");
  const readStream = fs.createReadStream("./store/src.txt");
  readStream.pipe(writeStream);
})();
