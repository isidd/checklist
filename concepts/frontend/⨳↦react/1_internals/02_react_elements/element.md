**_React Elements_ :_**
    - Elements are the great way for creating immutable DOM elements
    
```js
     React.createElement(type, props, ...children)
     Eg:-> React.createElement("a", { href: "https://google.com" }, "Click Me")
     type -> 'h1' | 'a' | 'section' ..etc
     props -> { className: 'greeting' } , { href: "https://google.com" }
     ...children -> 'textContent (textNode)'  | 'createElement (DOM element)'
```
**_React Elements Tree_ :_**
    - creating the root of the react element 
        get the element to which we want to make the make the root 
```js
       let root =  document.getElementById("app");
```
    - attach the root to the ReactDOM root
```js
        let root = React.createRoot(root)
```
    -  render the app on react Root
```js
        root.render(App())  // -> this App is simple React Application contains trees of React Element 
        
        function App(){
            return (
                react.createElement("section",
                null,
                    React.createElement("h1", null, "Heading 1"),
                    React.createElement("p", null, "Some random text"),
                    React.createElement("a", { href: "https://google.com" }, "Click Me"))
            )
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
// this tag allow us to uniquely identify this as a React element..
  $$typeof : REACT_ELEMENT_TYPE 
//   Built in properties that belongs on the element
  type: "section",
  key: null,
  ref: null,
  props: {
    children: "This is some example",
  },
//   record the element responsible for creating this element 
  _owner: null,
  _store: {},
}))())

```