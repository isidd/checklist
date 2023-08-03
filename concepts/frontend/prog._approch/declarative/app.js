// this code tells How to update the DOM step by step
// this part is the React
const countApp = {
  getCount: () => {
    const countElement = document.getElementById("count");
    return parseInt(countElement.textContent);
  },
  setCount: (val) => {
    const countElement = document.getElementById("count");
    countElement.textContent = val;
  },
};

// this is declarative way of code | we are not saying how to update the interface
// I am just passing the values that interface depends on changed
//  we are just writing the logic, we are not getting into the details of the DOM
// this part is the code we are writing using React
function setCount() {
  const count = countApp.getCount();
  if (count >= 5) {
    countApp.setCount(0);
  } else {
    countApp.setCount(count + 1);
  }
}
