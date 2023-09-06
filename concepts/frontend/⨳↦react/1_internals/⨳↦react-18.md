Link : https://www.youtube.com/watch?v=N0DhCV_-Qbg&ab_channel=Academind

Overview :

```sh
npm install react@18 react-dom@18
```

1.  Root rendering
    This change help us handle concurrency better

```js
// From ↓
ReactDOM.render(<App />, document.getElementById("app"));

// to ↓
let appRoot = ReactDOM.createRoot(document.getElementById("app"));
appRoot.render(<App />);
```

⨳ **_Concurrency_**

New method and set of features (and APIs) that help us state update prioritization
(urgent state can be prioritize over less urgent, talking long blocking updates)

in previous React => It alway process all the updates in order in which they were triggered and next state update could only be processed
once the previous update was done

With the introduction of Concurrency => we can tell react that a certain react updates has a lower priority than the another state update

⨳ **_New APIs_**

            - useTransition(function component) ↤↦ startTransition(class component)
            - startTransition
            - useDeferredValue

- **_useTransition_** :
  . It returns and array [isPending,startTransition] = useTransition()
  . wrap a state update with startTransition() to let React know it may be handled with lower priority lower priority
  setTransition(()=>setState(users))

- **_useDeferredValue_** :
  . tell React that the older value should be displayed until the new updated value is ready
  . useDeferredValue() is same as startTransition() but can be used in a cases where we don't have full control over the state update
  eg : receiving a stateful value as props
  . wrap a value and get a deferred(old) value until an updated value is available
  const deferredValue = useDeferredValue(value)

**_Rule_** : we will only use these where we have a blocking state update scenarios

⨳ **_New Hooks for library Authors (like css and Javascript Libraries) :_**

- useSyncExternalStore()
- useIntersectionEffect()
- useId()

⨳ **_State Batching :_**
. Multiple State update are executed together the component is therefore re-evaluated once
. This state batching already existed with older react versions but it was only for synchronous React event handler function
->Synchronous Event handler (this also gets batched in prev React versions)

```js
function increaseCounter() {
  setCounter(() => (cur) => cur + 1);
  setCounter(() => (cur) => cur + 1);
  setCounter(() => (cur) => cur + 1);
}

// It will groupe multiple state update calls together so that it executed as on state update call instead on multiple update calls
```

-> asyncEventHandler Event Handler (this is under new React 18)

```js
function increaseAsyncCounter() {
  setTimeout(() => {
    setCounter(() => (cur) => cur + 1);
    setCounter(() => (cur) => cur + 1);
    setCounter(() => (cur) => cur + 1);
  }, 2000);
}
// now this will also groupe multiple state update calls together so that it executed as on state update call instead on multiple update calls
```

⨳ **_Improved Suspense API :_**

```js
<Suspense fallback={<LoadingSpinner />}>
  <LazyComponent />
</Suspense>

// Lazy load means we implement code splitting to only load the code for certain component when it is needed this is good for performance as less code has to be downloaded initially and is often use in combination with routing
// React 18 enables *Suspense for Server Side Rendering* Suspense will also be useable for general data fetching(and not just code splitting in future)
```

⨳ **_Server Components (experimental) :_**
. Once this will be implemented React will work as a full stack framework or library which allows us to mix server side and client side code so that we are not just limited to UI interfaces but also perform server side only logic in our React app
It should be used for performing task on the server that should not be run on the client
for the Security/performance reasons
