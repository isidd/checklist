```js
let rootNode = document.getElementById("app");
console.log(React);
let root = ReactDOM.createRoot(rootNode);

let isCounterOne = true;
root.render(React.createElement(App));

console.log(isCounterOne);

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement("p", null, "Some random text"),
    isCounterOne
      ? React.createElement(
          "section",
          null,
          React.createElement(Counter1, { name: "One" })
        )
      : React.createElement(
          "section",
          null,
          React.createElement(Counter2, { name: "Two" })
        )
  );
}

  /* 2 scenarios
     1. isCounterOne = false
*/ 
function update(e) {
  isCounterOne = !isCounterOne;
//   In this case the value of isCounterOne is changed to false and thats it 
//   But it not going to effect the template logic as There is nothing which is telling react to re-render 
}

function rerender(e) {
  isCounterOne = !isCounterOne;
  // this is the logic that tells react to re-render
  root.render(React.createElement(App));
  // In this case the React is intelligent enough to only append the section of the Counter2 not the complete tree
}


/* 
JSX (Javascript Syntax Extension / Javascript XML): It a XML-like syntax extension for ECMA Script
  It is not an HTML inside Javascript -> It is a markup language with no semantics
  It is used by the various transpilers/pre-processor to transform these token into ECMA Scripts
  - Transpilation : transforming the text of code written in one syntax and converting it into a different syntax that 
    does the same thing
  If we write markup in our javascript file to define our tree data we need a transpiler to look at our code and then 
  change it to something that Javascript recognizes before the code is given to the javascript engine to run..
`                       
                                    {
                                        type : 'article',
        <article>                       children : [
            <h2></h2>      ==>          { 
            <p></p>                          type : 'h2'
        </article>                       }, 
                                         {
                                              type : 'p'
                                          }
                                        ]
                                    }
    Babel is good transpiler that converts the JSX syntax to --> React POJO syntax

*/

function Counter1({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>You have clicked 1 times</p>
      <button onClick={() => update()}>Update</button>
    </article>
  );
}

function Counter2({ name }) {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <article>
      <h2>Counter {name} </h2>
      <p>You have clicked 1 timesss</p>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Update
      </button>
    </article>
  );
}


```