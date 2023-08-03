const countElement = document.getElementById("count");
console.log(countElement);

function setCount() {
  let count = Number(countElement.textContent);
  count = count + 1;
  countElement.textContent = count;
}
