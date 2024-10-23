// Elements are the great way for creating immutable DOM elements
let rootNode = document.getElementById("app");

let root = ReactDOM.createRoot(rootNode); /* createRoot takes a container and some options, It expects that the container is a DOM 
element | it returns ReactDOMRoot  */

// Three ways of attaching root to the App.

root.render(React.createElement(App));
root.render(App());
root.render(<App />);

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Heading 1"),
    React.createElement("p", null, "Some random text"),
    React.createElement("a", { href: "https://google.com" }, "Click Me")
  );
}

/* 
    This Js code will run first than React as React is async 
    React is only going to run the code once the Javascript engine is available 
    so Js code is going to run first -> and then once the engine is available then React is going to run its code 
*/

// Before React does its work
let sectionElements = document.getElementsByTagName("section");
let firstSectionElement = sectionElements[0];
console.log(sectionElements);
console.log(firstSectionElement);

// After React does its work
setTimeout(() => {
  let sectionElements = document.getElementsByTagName("section");
  let firstSectionElement = sectionElements[0];
  console.log(sectionElements);
  console.log(firstSectionElement);
});

console.log((()=>({
  type: "section",
  key: null,
  ref: null,
  props: {
    children: "This is some example",
  },
  _owner: null,
  _store: {},
}))())
