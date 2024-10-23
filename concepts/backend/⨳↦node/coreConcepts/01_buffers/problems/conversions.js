/* 
create a Buffer for string data 
convert buffer data -> base64 value
base64 -> string value again
*/
let textValue = "There is some random string that will be converted to base64 and then again decoded to string"

let bufferContainerForString = Buffer.from(textValue)
let base64StringValue = bufferContainerForString.toString("base64");

let decodeString = Buffer.from(base64StringValue,'base64');
console.log(decodeString.toString('utf-8'))