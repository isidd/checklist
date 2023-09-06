Link : https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&ab_channel=WebDevSimplified

Overview :
React hooks provides us a way to manage the function components lifecycle and states
It gives us control over our function component

                                <!-- ***Rules*** -->

1. Hooks are only accessible inside
   - React functions &
   - Custom hooks
2. Only call React hook at the top level of React function component
   - Don't call it in nested function
   - Don't call them in any block statement
   - Don't call them in loops
3. Hooks must be executed in same exact order

- **_<!- useState ->_**

```js
const [state, setState] = useState(initialValue);
// if  => initial value is computation heavy then we can pass a call back function from useState
const [state, setState] = useState(
  () =>
    function () {
      return initialValue;
    }
);
// this is going to run only once and will work as a constructor

// setting state
{
  setState(state + 1);
  setState(state + 1);
  setState(state + 1);
}
// set state is a async execution so this this effect will override with the same value ;
// There also be a race conditions

// to get the latest state
setState((prevState) => prevState + 1);
setState((prevState) => prevState + 1);
setState((prevState) => prevState + 1);
// this is the correct way of setting a state


// Updating an Object state
state = {
    name : "Siddhartha",
    age : 29
}

setState({age : 30}) // this will override the state object with the new one

// correct way
setState((oldState)=>{
    ...oldState,
        age : 30
})
```
