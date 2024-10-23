const countElement = document.getElementById("count");

function setCount() {
  let count = Number(countElement.textContent);
  count = count + 1;
  countElement.textContent = count;
};


/* here I tell the browser every single steps how to update an interface..
get the value > set the value > update the interface..
*/