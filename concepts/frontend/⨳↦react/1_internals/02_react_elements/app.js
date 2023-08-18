// Elements are the great way for creating immutable DOM elements
let rootNode = document.getElementById("app");
console.log(React);
let root = ReactDOM.createRoot(rootNode);

root.render(App());

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

({
  type: "section",
  key: null,
  ref: null,
  props: {
    children: "This is some example",
  },
  _owner: null,
  _store: {},
});
