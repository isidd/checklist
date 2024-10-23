### React Event Objects

- Reacts approach to helping us manage events is to use event Delegation and then let us specify the individual targets on which we want our events to be handled

- React listen to all the events at the root called
  listenToAllSupportedEvents
  the root element of our application has been delegated to for dealing with any events that is happening in any of the elements inside of our root

```jsx
// React attaches event listener or delegate event at the root of the application
const rootNode = document.getElementById("app");
rootNode.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    console.log("you clicked button");
  } else {
    console.log("you didn't clicked the button");
  }
});
```

```jsx

function Counter1() {
  const clickHandler = (event) => {
    console.log("React handle click");
    console.log(event);
    /* This event will not be a DOM event. its a SyntheticBaseEvent & the native event that is actually from the DOM is called pointerEvent
    SyntheticBaseEvent : it is not a real event its just a Javascript
    We don't have to do anything special in order to determine target React does for us
    React -> has a single event listener on main and when when the button is clicked there will be a event capturing we reach to the bottom and then event bubbled back up and eventually made it to the main
    the event listener inside React knows that button was the target
    */
  };

  return (
    <article>
      <h2> Counters</h2>
      <p>you clicked one times</p>
      <button onClick={() => {
        for(i=0i<100;i++){
            clickHandler()
            }
            }}>Click Me</button>
    </article>
  );
}

function Counter2() {
    // event will not be added to the button element to the DOM so current content on the Fiber trees is aware that no handler is attached with this element
  return (
    <article>
      <h2> Counters</h2>
      <p>you clicked one times</p>
      <button onClick={() => update()}>Click Me</button>
    </article>
  );
}

```
