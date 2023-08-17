let rootNode = document.getElementById("app");
console.log(React);
let root = ReactDOM.createRoot(rootNode);
console.log(root);
const App = () => React.createElement("button", null, "Click Me");
root.render(App());
