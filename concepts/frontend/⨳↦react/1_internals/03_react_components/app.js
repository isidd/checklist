let rootNode = document.getElementById("app");
console.log(React);
let root = ReactDOM.createRoot(rootNode);

// root.render(App());
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement("p", null, "Some random text"),
    React.createElement("section", null, React.createElement(Counter))
  );
}

/* 
Component is way of returning a React Elements or React Element Tree and it is being executed by React at some point. 
*/

function Counter() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter"),
    React.createElement("p", null, "You have clicked 1 times"),
    React.createElement("button", null, "Click Me")
  );
}

/* 
                                             |--------------|
                                             |   Section    |
                                             |--------------|
                                      (props)/               \(props)
                                |-----------|                |-----------|              
                                |  Counter  |                |  Counter  |    
                                |-----------|                |-----------|       


                        Counter is a React component whose type is a function component  

*/

/* 
    Pure Component or Functions: 
    - For the same input always create a same output
    - causes no side effect
    React.memo()
    class App extends PureComponent{}
    This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison
*/

const counter = {
  name: "counter",
  value: 1,
};

function pureCounter(ctr, val) {
  return `${ctr.name} ${val}`;
}

console.log(pureCounter(counter, counter.value));
console.log(pureCounter(counter, counter.value + 1));
console.log(pureCounter(counter, counter.value));

console.log(counter);

console.log("-----------------------------------------------------------");
function notPureCounter(ctr, val) {
  ctr.name = ctr.name + " Siddhartha";
  return `${ctr} ${val}`;
}

console.log(notPureCounter(counter, counter.value));
console.log(notPureCounter(counter, counter.value + 1));
console.log(notPureCounter(counter, counter.value));
console.log(counter);

/* 
React is looking through the Tree if it sees a function Component -> it is going to call that  
    Props: 
    props are the arguments for the Component
    props defines the basic Component behavior  

*/

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement("p", null, "Some random text"),
    React.createElement(
      "section",
      null,
      React.createElement(Counter, { name: "One" })
    ),
    React.createElement(
      "section",
      null,
      React.createElement(Counter, { name: "Two" })
    )
  );
}

/* 
    Component is way of returning a React Elements or React Element Tree and it is being executed by React at some point. 
*/

function Counter(props) {
  console.log(Object.isFrozen(props));
  props.name = "third";
  //   this won't work as the props in React are immutable or the props object is frozen

  /* function Counter({name}) {
       name = "third";
       In this case de-structured property can be mutated 
    */
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, `Counter ${props.name}`),
    React.createElement("p", null, "You have clicked 2 times"),
    React.createElement("button", null, "Click Me")
  );
}
