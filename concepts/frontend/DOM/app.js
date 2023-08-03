const listElement = document.getElementById("list");
const newListItem = document.createElement("li");
newListItem.textContent = "Item 4";
console.log(listElement);
setTimeout(() => listElement.appendChild(newListItem), 10000);
