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

// function Counter1() {
//   return React.createElement(
//     "article",
//     null,
//     React.createElement("h2", null, "Counter One"),
//     React.createElement("p", null, "You have clicked 1 times"),
//     React.createElement("button", null, "Click Me")
//   );
// }

// function Counter2() {
//   return React.createElement(
//     "article",
//     null,
//     React.createElement("h2", null, "Counter Two"),
//     React.createElement("p", null, "You have clicked 1 times"),
//     React.createElement("button", null, "Click Me")
//   );
// }

function update(e) {
  console.log(e);
  isCounterOne = !isCounterOne;
  root.render(React.createElement(App));
}

/* 
    Passing element Properties (props)
*/

// function Counter1() {
//   return React.createElement(
//     "article",
//     null,
//     React.createElement("h2", null, "Counter One"),
//     React.createElement("p", null, "You have clicked 1 times"),
//     React.createElement(
//       "button",
//       { className: "btn", onClick: () => update() },
//       "Click Me"
//     )
//   );
// }

// function Counter2() {
//   return React.createElement(
//     "article",
//     null,
//     React.createElement("h2", null, "Counter Two"),
//     React.createElement("p", null, "You have clicked 1 times"),
//     React.createElement(
//       "button",
//       { className: "btn", onClick: () => update() },
//       "Click Me"
//     )
//   );
// }

/* 
JSX (Javascript Syntax Extension / Javascript XML): It a XML-like syntax extension for ECMA Script
  It is not an HTML inside Javascript -> It is a markup language with no semantics
  It is used by the various transpilers/pre-processor to transform these token into ECMA Scripts
  - Transpilation : transforming the text of code written in one syntax and converting it into a different syntax that 
    does the same thing
    Babel is good transpiler that converts the JSX syntax to --> React POJO syntax

*/

// function App() {
//   console.log("herere");
//   return (
//     <section>
//       <h1> Counters</h1>
//       <p>Some random text</p>
//       {isCounterOne ? <Counter1 /> : <Counter2 />}
//     </section>
//   );
// }

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
