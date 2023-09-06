const buff = Buffer.alloc(8);
console.log(buff);
/* 
buff -> will have 8 bytes allocated in the memory
<Buffer 00 00 00 00 00 00 00 00>
each one of these integers are expressed in hexa-decimal 
*/

buff.write("s", "utf-8");
console.log(buff);
/* 
utf-(8) -> 8 means 8 bites -> or 1 byte
that means each characters is expressed using 1 byte
<Buffer 73 00 00 00 00 00 00 00> -> first byte is now occupied
*/

buff.write("si", "utf-8");
console.log(buff);

/* 
<Buffer 73 69 00 00 00 00 00 00>
*/

buff.write("si", "utf-8");
console.log(buff.toJSON());

/* 
{ type: 'Buffer', data: [
    115, 105, 0, 0,
      0,   0, 0, 0
  ] }
*/

buff.write("12345678", "utf-8");
console.log(buff);

/* 
If we write more characters then its gonna ignore the additional characters since it is a  
*/
buff.write("1234567891011", "utf-8");
console.log(buff);

/* 
    specific binary data info in buffers
    buff.length
    buff[0]; 
    */

/* 
    Similar is the charCode in Javascript
*/

const char = String.fromCharCode(115);
console.log({ char });

// for hexa-decimal
const char1 = String.fromCodePoint(0x73);
console.log({ char });

/* 
  Others we have something called typed arrays it is kinda similar
*/

/* 
Buffer.from gives us dynamic length buffer
*/
const buff2 = Buffer.from("sidd", "utf-8");
console.log(buff2);

/* 
  Write exact sequence of bytes instead of encoding 
*/

const buff3 = Buffer.from([115]);
console.log(">>", buff3.toString("utf-8"));
// 'utf-8' -> 2^8 -> 256 ==> 0 to 255 [0 -> 255]
// 'utf-16' -> 2^16 -> 65536 > 0 to 65536 [0->65535]

const buff4 = Buffer.from([115, 105, 100, 100, 104, 97, 114, 116]);
console.log(">|>", buff4.toString());

/* 
  Node Js examples
*/

const fs = require("fs");
// fs.writeFileSync("out.txt", "Siddhartha Pharasi");
const a = fs.readFileSync("out.txt", "utf-8");
console.log(a);
