### **Core React Concepts:**
1. **JSX (JavaScript XML):**
    
    JSX (Javascript Syntax Extension / Javascript XML): It a XML-like syntax extension for ECMA Script
    It is not an HTML inside Javascript -> It is a markup language with no semantics
    It is used by the various transpilers/pre-processor to transform these token into ECMA Scripts
    - Transpilation : transforming the text of code written in one syntax and converting it into a different syntax that 
        does the same thing
    If we write markup in our javascript file to define our tree data we need a transpiler to look at our code and then 
    change it to something that Javascript recognizes before the code is given to the javascript engine to run..
    ```html                                                   
                <h1>Siddhartha</h1>                                 
                <p>                                             
                    Count
                    <strong>
                        <em> 1 </em>  
                    </strong>
                    times
                </p>
                <button>Click me</button>
                <marquee>Counter</marquee>
            </article>
    ```
    ```js
    const markup = {
    type: "article",
    children: [
        {
        type: "h1",
        children: [
            {
            type: "text",
            value: "Vardan",
            },
        ],
        },
        {
        type: "p",
        children: [
            {
            type: "text",
            value: "Count",
            },
            {
            type: "strong",
            children: [
                {
                type: "em",
                children: [
                    {
                    type: "text",
                    value: " 1 ",
                    },
                ],
                },
            ],
            },
            {
            type: "text",
            value: "times",
            },
        ],
        },
        {
        type: "button",
        children: [
            {
            type: "text",
            value: "Click me",
            },
        ],
        },
        {
        type: "marquee",
        children: [
            {
            type: "text",
            value: "Counter",
            },
        ],
        },
    ],
    }
    /*
     Babel is good transpiler that converts the JSX syntax to --> React POJO syntax
    */
    ```

    - How does JSX differ from HTML?
        JSX -> 
            1. JSX is the Syntax Extension for Javascript 
            2. Its a markup language with no semantics and need a transpiler to convert it into Javascript Objects.
            3. We can embedded expression inside <h1>{3+3}</h1>
            4. JSX gets compiled into JavaScript before being rendered.
            5. JSX allows for conditional rendering using JavaScript expressions, such as the ternary operator or logical &&.
                const isLoggedIn = true;
                const message = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>;
            6. Babel is a transpiler that converts JSX to Javascript Objects.

        HTML ->
            1. HTML is a static language used to structure the content of a webpage
            2. Comment <!-- -->
            3. HTML directly describes the structure of the webpage and is rendered by the browser without needing an additional compilation step
            4. In HTML, you can't directly render elements conditionally. You would need to use JavaScript for this kind of behavior (e.g., by dynamically inserting or removing elements).
                <script>
                if (isLoggedIn) {
                    document.getElementById('message').innerHTML = 'Welcome back!';
                } else {
                    document.getElementById('message').innerHTML = 'Please log in';
                }
                </script>
                <div id="message"></div>

    - How is JSX transformed into JavaScript code?
         Using Transpilers like Babel

    - JSX syntax rules (e.g., class vs. className, self-closing tags).
            1. Every JSX expression must have a single root element.
                const element = (
                        <div>
                            <h1>Hello, world!</h1>
                            <p>Welcome to React!</p>
                        </div>
                        );
            2. All tags must be properly closed | <img src="image.jpg" alt="Image" />;
            3. JSX uses camelCase for attribute names
                const element = <div className="container" tabIndex={0}></div>;
            

2. **React Components:**

        Its a self contained unit of code that can 
            - render UI element 
            - handle logic
            - manage state
        we can reuse these component and it can be 
            - class based as well as
            - function based 
        Component Composition : 
            Components can be composed of other components. A component can contain child components and pass props down to them, creating a tree-like structure.
    ```js
        import React from 'react';
        const Header = () => <h1>Welcome to my website!</h1>;
        const MainContent = () => <p>This is the main content of the page.</p>;
        const Footer = () => <footer>© 2024 My Website</footer>;
        const App = () => (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        );
        export default App;
    ```

    - **Functional vs. Class Components**: What are the differences?

        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Feature**                |               **Functional Components**                    |                   **Class Components**                   |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Syntax**                 | Simple functions returning JSX                             | ES6 classes extending `React.Component`                  |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **State Management**       | `useState` Hook                                            | `this.state` and `this.setState`                         |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Lifecycle Methods**      | `useEffect` Hook (for side effects)                        | `componentDidMount`, `componentDidUpdate`,               |
        |                            |                                                            | `componentWillUnmount`                                   |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Hooks Support**          | Fully supports hooks (`useState`, `useEffect`, etc.)       | No hooks(except in React 16.3+ with`React.createContext`)|
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Error Boundaries**       | Not directly available (use class components for error     | Supports error boundaries using `componentDidCatch`      |
        |                            | boundaries)                                                |                                                          |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Performance**            | Generally more lightweight and simpler to optimize         | Can have more overhead due to class-based structure      |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|
        | **Preferred Approach**     | Preferred (with hooks) for most modern applications        | Older approach, but still valid for some cases           |
        |----------------------------|------------------------------------------------------------|----------------------------------------------------------|

   
   - **Component Lifecycle** 

    |------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|
    |    **Phase**           |             **Method**               |               **Description**                                                                |
    |------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `constructor(props)`                 | Initialization of state and props.                                                           |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `getDerivedStateFromProps()`         | Called before each render, allows updating state based on props.                             |
    |       **Mounting**     |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `render()`                           | The function that returns the JSX to be rendered.                                            |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `componentDidMount()`                | Invoked after the component has been mounted, suitable for side effects (e.g., fetching data)|
    |------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `getDerivedStateFromProps()`         | Called before each render, updates state based on props.                                     |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `shouldComponentUpdate()`            | Allows preventing unnecessary re-renders.                                                    |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |       **Updating**     | `render()`                           | Re-renders the component.                                                                    |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `getSnapshotBeforeUpdate()`          | Called before changes from the virtual DOM are reflected in the actual DOM.                  |
    |                        |--------------------------------------|----------------------------------------------------------------------------------------------|
    |                        | `componentDidUpdate()`               | Called after the component has updated, useful for handling side effects.                    |
    |------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|
    |       **Unmounting**   | `componentWillUnmount()`             | Cleanup method before the component is removed from the DOM.                                 |
    |------------------------|--------------------------------------|----------------------------------------------------------------------------------------------|


    - **Functional Components**: 
        A functional component in React is a JavaScript function that returns JSX 
            There are Lifecycle Methods Not Available in Hooks
                - componentWillMount() | componentDidMount =>  useEffect(   ()=>{},[])
                - componentWillReceiveProps() | useEffect(() => {},[propOrState])
                - componentWillUpdate() | | useLayoutEffect(() => {// Code that runs synchronously before the DOM is painted},[propOrState]) // Runs before render or when `dependency` changes
                - getSnapshotBeforeUpdate() | useLayoutEffect(() => {Capture scroll position, or other DOM state before the update},[stateOrProps]) // Runs synchronously before the DOM updates
                - componentWillUnmount() | useEffect(() => { return ()=>cleanup},[propOrState])
                - getDerivedStateFromProps()  | same as componentWillReceiveProps

    - **Pure Components**:
            A Pure Component in React refers to a component that does not re-render unless its props or state change. It is a performance optimization technique, especially useful when your component’s rendering logic does not depend on anything other than props and state
            React provides the React.PureComponent class, which automatically implements a shallow comparison of props and state. If there is no change (i.e., shallow comparison indicates that props and state are the same), the component will skip the re-render.
            It automatically implements shouldComponentUpdate()
            we can use React.memo() for Functional Component 
        * How are they different from regular components? 


    - **Children Prop**: Passing components as children.

3. **Props and State:**
    - Difference between props and state.
    - How do you pass data between parent and child components?
    - How do you update state, and what is the importance of `setState()` in class components or `useState()` in functional components?
    - Immutable vs. mutable state in React.

4. **Event Handling:**
    - How are events handled in React?
    - Understanding synthetic events.
    - Event delegation in React.
    - Handling forms and controlled vs. uncontrolled components.

5. **Conditional Rendering:**
    - How do you conditionally render elements in React?
    - Using `if`, ternary operators, or logical operators (`&&`) in JSX.

6. **Lists and Keys:**
    - How do you render a list of items in React?
    - The importance of `key` prop and what happens when it’s not used.

7. **Forms and Input Handling:**
    - Controlled vs uncontrolled components.
    - Managing forms using React state.
    - Handling form submissions.

### **Advanced React Concepts:**
1. **Hooks:**
    - **useState()**: How to manage state in functional components.
    - **useEffect()**: Handling side effects, like data fetching, subscriptions, and manual DOM manipulation.
    - **useContext()**: Sharing state across components without prop drilling.
    - **useReducer()**: Managing complex state logic.
    - **Custom Hooks**: Creating reusable hooks for logic abstraction.
    - **useMemo() and useCallback()**: Optimizing performance by memoizing values and functions.

2. **Context API:**
    - What is the Context API used for?
    - How do you create a context and provide it to a tree of components?
    - How does `useContext()` work?

3. **React Router:**
    - Setting up routes in a React app.
    - How do `Route`, `Switch`, `Link`, and `NavLink` work?
    - Programmatic navigation and `history.push()`.
    - Dynamic routes and route parameters.
    - Nested routes.

4. **Code Splitting and Lazy Loading:**
    - What is code splitting in React?
    - How to implement lazy loading of components using `React.lazy()` and `Suspense`.
    - Benefits of code splitting in large applications.

5. **Error Boundaries:**
    - What are error boundaries?
    - How to implement error boundaries using `componentDidCatch` or `static getDerivedStateFromError`.
    - Why are error boundaries important in React?

6. **Higher-Order Components (HOCs):**
    - What are HOCs and how are they used in React?
    - Examples of common use cases for HOCs.

7. **Render Props:**
    - What are render props, and how do they work in React?
    - Examples of using render props for component logic sharing.


### **Performance Optimization:**
1. **React Reconciliation:**
    - Understanding the virtual DOM and reconciliation process.
    - How React determines which parts of the DOM need to be updated.

2. **Memoization:**
    - How to optimize components using `React.memo()`.
    - Using `useMemo()` and `useCallback()` for performance optimization.
    - Debouncing and throttling input events for performance.

3. **Profiling and Optimization Tools:**
    - Using React Developer Tools to profile component re-renders.
    - Understanding why re-renders happen and how to prevent unnecessary renders.

4. **Avoiding Unnecessary Re-renders:**
    - How to prevent unnecessary re-renders using `shouldComponentUpdate`, `React.memo()`, or `useMemo()`.

---

### **State Management:**
1. **Redux:**
    - Core concepts of Redux: Store, Actions, Reducers, Dispatch, and Selectors.
    - The flow of data in Redux: Action Creators, Dispatching actions, and reducing actions.
    - Understanding `mapStateToProps` and `mapDispatchToProps`.
    - Middleware in Redux: `redux-thunk`, `redux-saga`.
    - Redux DevTools.

2. **Other State Management Libraries:**
    - **Recoil**: Understanding atoms, selectors, and React state management using Recoil.
    - **Zustand**, **MobX**, **React Query**, etc.
    - Comparing Redux vs. Context API vs. other libraries.

---

### **Testing in React:**
1. **Unit Testing React Components:**
    - Using testing libraries like **Jest** and **React Testing Library**.
    - Writing tests for components, including user interaction and state changes.
    - Mocking functions and components.

2. **Snapshot Testing:**
    - What is snapshot testing, and how does it work?
    - Using Jest snapshots to test component render outputs.

3. **Test-Driven Development (TDD):**
    - How TDD can be used in React development.
    - Writing tests before writing components.

---

### **Build and Deployment:**
1. **Webpack and Babel:**
    - What is Webpack and how does it work with React?
    - How is JSX transformed using Babel?

2. **React App Deployment:**
    - Deploying React apps to platforms like Vercel, Netlify, and AWS.
    - Build process using `npm run build` or `yarn build`.
    - Configuring deployment settings and handling environment variables.

3. **Progressive Web Apps (PWA):**
    - How to make a React app a PWA?
    - Service workers and caching.

---

### **Best Practices and Patterns:**
1. **Component Design Patterns:**
    - Atomic Design in React.
    - Smart vs. Presentational components.
    - Compound Components.

2. **Code Style and Linting:**
    - Recommended coding styles and tools like ESLint, Prettier.
    - Importance of maintaining code quality.

3. **Handling Side Effects in React:**
    - Best practices for managing side effects in React (using `useEffect`, libraries like `react-query`, or even Redux-Saga).

---------


### **Common Interview Questions:**
1. **Explain the React lifecycle.**
2. **What is the difference between props and state?**
3. **What are controlled and uncontrolled components?**
4. **What is the purpose of `useEffect`?**
5. **How does React handle updates to state and props?**
6. **What is the virtual DOM?**
7. **How does React’s Context API work?**
8. **What is Redux, and why would you use it?**
9. **How do you prevent unnecessary re-renders in React?**
10. **What is the difference between React’s `useMemo()` and `useCallback()`?**
11. **How do you test React components?**
12. **How would you optimize performance in a large React application?**
13. **Explain the role of keys in React lists.**

By understanding and being able to explain these topics, you'll be well-prepared for ReactJS interviews.