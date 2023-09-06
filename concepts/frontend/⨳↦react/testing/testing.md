### Testing

- Link : https://www.youtube.com/playlist?list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd

Overview :
Testing -> main goal is to create a Software that works | verify between the actual output and the expected output

     Manual Testing : An individual will open a software in the host environment and ensure everything works
                      If a new feature is released we repeat the same step
                      For new feature we not only test the new feature but the existing feature also

            Drawbacks :
                    - time consuming
                    - complex repetitive task has a change of human error
                    - we may not be able to test all the features that we should

    Automated Testing : Automated tests are program that automate task for testing the software
                    - write code to test the code
                    - additional effort is req. when we develop a new feature

            Advantages :
                    - Not time consuming
                    - Reliable consistent and not error prone
                    - easy to identify and fix feature that breaks tests
                    - gives confidence when shipping software

    Touch points :
        - Jest and React testing library
        - Fundamentals of writing a test
        - test component with user interactions
        - test components wrapped in provider
        - test component with mock functions and API
        - static analysis testing

- **_Jest Vs React testing library_**

  > Jest is a javascript testing library.

      Jest is a test runner that finds test run test determine weather a test passed or failed and returns it back to the human readable manner

  > React Testing Library is Javascript testing utility that provides virtual-DOM for testing react component

        we can use the virtual-DOM to interact and verify the behavior of the react component.
        its a family of packages which helps test UI component
        Core library is called DOM testing library amd RTL is the wrapper around the core library
      ***pointers :***
        - with react testing library we are not concerned with the implementation details of a component
        - instead we are testing how the component behaves when a user interacts with it
        - RTL will not care if we add 4+4 or 5+3 to display 8 | as long as user sees 8 it has no problems
        - refactoring will not effect the test as long as the end result is same
        - RTL makes a balance between unit and E2E testing

- **_Types of test_**

  1.  Unit tests
      > focus is on testing the individual building blocks of app such as class or function or component.
      > Each unit or building block is tested in isolation, independent of other units
      > any dependencies are mocked
      > easier to write and maintain
  2.  Integration tests
      > focus is on testing the combination of units and ensuring they work together
      > takes longer then unit test
  3.  E2E tests

      > focus is on testing the entire application flow and ensuring it works as designed from start to finish
      > this evolves the real UI, real backend database, real services etc.
      > it takes the longest time as they cover most amount of code
      > it has cost implication as we consume the real API or services

                                Testing Pyramid

                                     /\
                                    /__\ <- E2E testing
                                   /____\ <- Integration testing
                                  /______\  <- unit testing

**Every test generally involves:**
Render the component
Find an element rendered by component
Assert against the element found in step 2 which will pass or fail the test

**_Anatomy of Test file :_**

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "./App";

test("render learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  Signature;
  test(name, fn, timeout);
    - name -> name use to identify the test
    - fn -> that contains expectations to the test
    - timeout -> its an optional argument for specifying how to wait before aborting the test,(default time is 5sec)

  render(<Component />) -> is responsible for creating virtual-DOM for the passed component
    // Now we need to get hold of the element against which we need to assert for that we have v
  screen -> is an object that is used to query the virtual-DOM
    Query:
        - getByText() - getByMe()

    Expectations:
        - toBeInTheDocument() | this is coming from jest-DOM library

    > test and expect -> are methods from jest which cra globally provide in every test
});
```

- Test Driven Deployment(TDD)
  -> its a process where we write test before writing the software code
  -> after test written, we then write the code to ensure the test pass
  Red->Green testing (initially all the test will fail then we write the code then it passes the test )

**_<!- Test with component accepts props ->_**

```jsx
test("render learn react link", () => {
  render(<User name="Siddhartha" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

- Jest watch Mode :
  watch mode is an option that we can pass to jest asking to watch files that have changed since last commit and execute test related to only those file which gets change
  It will only check on non-committed files.

  Watch mode options:
  a -> run all test
  o -> only run test related to changed flies
  p -> filter by filename
  t -> filter by test name

  we can also do test(name,fn,timeout) -> test.only(name,fn,timeout) | for running only this test
  we can also do test(name,fn,timeout) -> test.skip(name,fn,timeout) | for skipping this test

**_<!- Grouping The Tests ->_**

- describe(name,fn) :
  name -> groupe name
  function -> that contains the test to be executed

  ```jsx
  describe("initial", () => {
    test("render learn react link", () => {
      render(<User name="Siddhartha" />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    <!-- we can also nest the grouping -->

      describe("test-nesting", () => {
          test("greet", () => {
          render(<Greet name="Siddhartha" />);
          const linkElement = screen.getByText(/Hello/i);
          expect(linkElement).toBeInTheDocument();
        });
      })
    test("greet", () => {
      render(<Greet name="Siddhartha" />);
      const linkElement = screen.getByText(/Hello/i);
      expect(linkElement).toBeInTheDocument();
    });

  });
  with describe -> also have describe.only() & describe.skip()
  ```

- file extension :
  - .test.js or .test.jsx
  - .spec.js or spec.tsx
  - folders _test_

> with Jest we can use test() or it() global methods

    for test.only() -> fit()
    for test.skip() -> xit()

**_<!- Code coverage ->_**

- Code Coverage : Its a metric that helps us understand how much of the code is tested

  - Statement Coverage : how many statements in code have been executed
  - Branches Coverage : how many branches of control structure have been executed
  - Function Coverage : how much function defined have been called
  - Line Coverage : how many of lines of the source code have been tested

  ```js
  command -> npm run test --coverage --watchAll->(this is to check all the files not the changed ones )

  <!-- to cover specific folder -->

  command -> npm run test --coverage --watchAll --collectCoverageFrom="src/components/**/*.{ts,tsx}"

  <!-- to not cover specific folder -->
  command -> npm run test --coverage --watchAll --collectCoverageFrom="!src/components/**/*.{types,stories,constants}.{ts,tsx}"

  ```

  **_<!- Coverage Thresholds ->_**

```json
  <!-- inside package.json setting threshold for code coverage  -->
    "jest" :{
      "coverageThreshold" :{
        "global" : {
          "branches" : 80,
          "functions" : 80,
          "lines" : 80,
          "statements" : -10 "(if there are more than 10 uncovered statements)"
        }
      }
    }
    // Build will fail if test cases will not meet these requirements

```

**_<!- Assertions(Jest) ->_**

- Assertions : When writhing test we need to check that the values meets a certain condition, it decides if the test
  passes or fails

  expect(value) -> the argument should be the value that our code produce | in our case it is a DOM node
  we will use expect with a matcher function to assert something about the value
  A matcher can optionally accept an argument which is correct expected value
  eg : toBeInTheDocument()

- **_What to test ?_**

  > test component render
  > test component render with props
  > test component render with different states
  > test component reacts to events (button and form control/ user interactions)

- **_What not to test_**

  > implementation details (we test the behavior not how it is implemented)
  > third party code
  > code that is not important from user point of view (for a function that displays date in user-friendly format then we don't have to test if the function was called by the component instead we need to directly test if the date is in expected format)

      ***RTL Quires***
          Queries are the methods that testing library provides to find element on the page
          to get single element on the page we have
              getBy..
              queryBy..
              findBy..

          to find multiple elements on the page we have
              getAllBy..
              queryAllBy..
              findAllBy..

          (*getBy*)  -> It returns an element if found on the rendered virtual-DOM, if no element found it ill give us an
                        error and test fails.

          (*queryBy*) -> It returns elements/Array[elements]. If there is no element found on the rendered-DOM the
                         queryBy/queryAllBy will return null/[] (so this is important if we want non rendered element)

          (*findBy*) -> It returns a promise which resolves when element is found which matches a given query. it rejects
                        if no element is found after a default timeout of 1000ms

          (..) -> can be | role, labelText, placeholderText, text, displayValue, altText, title, testId


        role :
            <button/> -> button role
            <a> -> link role
            <h1>-<h6> -> heading role
            <checkboxes> -> checkbox role
            <radio> -> radio role
            <input> -> textbox role
            <select> -> combobox role
            ....
            we can explicitly define the role
              <a role="button">

```jsx
describe ->
  1. render "(mostly with the toBeInTheDocument case)"
  2. test component render with different states
  3. test component reacts to events (button and form control/ user interactions)

<label htmlFor="name" >Name</label>
<input type="text" id="name" />

describe('application render',()=>{
  test("renders correctly",()=>{
    render(<App />)
    const nameInputElement = screen.getByRole('textbox')
    expect(nameInputElement).toBeInTheDocument()
  })
})


What if there is 2 elements with the same role
<label htmlFor="name" >Name</label>
<input type="text" id="name" />

<label htmlFor="bio" >Bio</label>
<textarea name="bio" id="bio" />

// for this we pass the second argument

const nameInputElement = screen.getByRole('textbox',{name:"Name"}) //aria-label,label,textContent
const nameInputElement = screen.getByRole('textbox',{name:"Bio"}) //aria-label,label,textContent
// In case of heading
const headingElement = screen.getByRole('heading',{level:1}) //aria-label,label,textContent
const subHeadingElement = screen.getByRole('heading',{level:2}) //aria-label,label,textContent

// incase of multiple elements with the same label
const nameInputElement = screen.getByLabelText('textbox',{selector:"input"})

// getByTestId -> matches the data-testid attribute


    expect(nameInputElement).toBeInTheDocument()

```

**_<!- Querying multiple elements ->_**

```jsx
[Component.tsx];
export const Skills = ({ skills }) => {
  const [isLoggedIn, setIsLogin] = useState(false);
  useEffect(()={
    setTimeout(()=>{setIsLogin(true)},500);
    // if the timeout is greater that default testing time 1001
    setTimeout(()=>{setIsLogin(true)},1001)

  },[])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill} </li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login </button>
      )}
    </>
  );

  [test.tsx];

  describe("skills", () => {
    const skills = ["HTML", "Javascript", "Rust"];
    test("render correctly", () => {
      render(<Skills skills={skills} />);
      const listElement = screen.getByRole("list") | "ul";
      expect(listElement).toBeInTheDocument();
    });

    test("render a list of skills", () => {
      render(<Skills skills={skills} />);
      const listItemElement = screen.getByRole("listitem") | "li";
      expect(listItemElement).toHaveLength(skills.length);
    });

    test("render login button", () => {
      render(<Skills skills={skills} />);
      const loginButton = screen.queryByRole("button", { name: "Login" });
      expect(loginButton).toBeInTheDocument();
    });

    test("start learning button not rendered", () => {
      render(<Skills skills={skills} />);
      const startLearningButton = screen.queryByRole("button", {
        name: "Start learning",
      });
      expect(startLearningButton).not.toBeInTheDocument();
    });

    // for setTimeout less than default i.e 1000
    test("start learning button not rendered", async() => {
      render(<Skills skills={skills} />);
      const startLearningButton = await screen.findByRole("button", {
        name: "Start learning",
      });
      expect(startLearningButton).not.toBeInTheDocument();
    });

    // for setTimeout greater than default i.e 1000
    test("start learning button not rendered", async() => {
      render(<Skills skills={skills} />);
      screen.debug() // this will print the rendered virtual-DOM tree on the terminal
      const startLearningButton = await screen.findByRole("button", {
        name: "Start learning",
      });
      screen.debug() // this will print the rendered virtual-DOM tree on the terminal
      expect(startLearningButton).not.toBeInTheDocument();
    },{timeout:2000});

    // another way to debug

    let view =  render(<Skills skills={skills} />);
    logRoles(view) // this will print out with the tree of elements and roles of the element
  });
};
```

Chrome extension : testing playground -> ["https://www.youtube.com/watch?v=424C8ppfzQA&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=34&ab_channel=Codevolution"]

**_<!- User Interactions ->_**

      User Events : to test user events we will be using a library called (["user-event"])
      It simulates user interactions by dispatching the event that would happen if the interaction took place

- fireEvents Vs user-event

      fireEvent -> is a method from RTL which is used to dispatch DOM events
      user-event -> simulates full interactions, which may fire multiple events and do additional checks

      Eg -> when user types into the textbox, the elements has to be focused and keyboard events are to be fired and the
            selection and selection and value on the element are manipulated as the type
            user-event allows us to describe full user interaction instead of the concrete event
            It wont allow user to click a hidden button or type in the disabled textbox

```jsx
[Component.tsx];
export const Counter = () => {
  [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((old) => old + 1)}>Increment</button>
    </div>
  );
};

[text.tsx];
describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("render a count of zero", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContext("0");
  });

  test("render a count of one after clicking", () => {
    @-> import user from 'testing-library/user-event'
    user.setup()
    render(<Counter />);
    const incrementButton = screen.getByRole("button",{name:"Increment"});
    await user.click(incrementButton)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContext("1");
  });
});


<!-- Pointer Infarctions -->
  - Click is not a pointer API it is the Convenience API which internally calls the pointer API

      Convenience APIs
        - click() - dblClick() - tripleClick() - hover() - unHover()
      Pointer APIs
        - pointer({keys:"[MouseLeft]"}) - pointer({keys:"[MouseLeft][MouseRight]"}) also pointer("[MouseLeft][MouseRight]")
        - pointer("[MouseLeft>]") press a button without releasing it
        - pointer("[/MouseLeft]") releasing previously pressed button


```

**_<!- Keyboard interactions ->_**

    Utility API
        - type() - clear() - selectOptions() - deselectOptions() - upload()
    Convenience API
        - tab()

```jsx
[component.tsx];
export const Counter(){

  const [count,setCount] = useState(0)
  const [amount,setAmount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment </button>
      <input type="number" name="amount" value={amount} onChange={()=>setAmount(parseInt(e.target.value))} />
      <button onClick={()=>setCount(amount)}>Set </button>
    </div>
  )
}

[test.tsx]
@-> import user from 'testing-library/user-event'

test('render the count of 10 after inputting it and then on setting count on click of set',async()=>{
  user.setup()
  render(<Counter />)
  const amountInput = screen.getByRole('spinButton')
  await user.type(amountInput,'10')
  expect(amountInput).toHaveValue(10)

  const setButton = screen.getByRole('button',{name:"Set"})
  await user.click(setButton)
  const countElement = screen.getByRole("heading")
  expect(countElement).toHaveTextContent(10)
})

test("elements are focused in right order",async()=>{
  user.setup()
  render(<Counter />)
  const amountInput = screen.getByRole("spinbutton");
  const incrementButton = screen.getByRole("button",{name:"Increment"})
  const setButton = screen.getByRole("button",{name:"Set"})
  await user.tab()
  expect(incrementButton).toHaveFocus()

  await user.tab()
  expect(amountInput).toHaveFocus()

  await user.tab()
  expect(setButton).toHaveFocus()
})

<!-- selectOptions() -->

test('selectOptions',async()=>{
  user.setup()
  render(<SelectOptions />)

  const optionElement = screen.getByRole('listbox')
  await userEvent.selectOptions(optionElement,['1','C'])
  const optionA = screen.getByRole("list",{name:"A"})
  const optionB = screen.getByRole("list",{name:"B"})
  const optionC = screen.getByRole("list",{name:"C"})
  expect(optionA.selected).toBe(true)
  expect(optionB.selected).toBe(false)
  expect(optionC.selected).toBe(true)
})

<!-- upload('for file upload') -->

  test('upload file',async()=>{
    render(
      <div>
        <label htmlFor="file"> Upload File </label>
        <input id="file" type="file" />
      </div>
    )

  const file = new File(['hello'],'hello.png',{type:"image/png"})
  const input  = screen.getByLabelText(/Upload File/i)
  await userEvent.upload(input,file)
  expect(input.files[0]).toBe(file)
  expect(input.files.item[0]).toBe(file)
  expect(input.files).toHaveLength(1)

  })

```

**_<!- Components Wrapped in Providers ->_**
Testing Component wrapped by the other component/provider

```jsx
[component.tsx];

export const App = () => {
  return (
    // AppProvider provides the theme => dark | light
    <AppProvider>
      <div className="app">
        <ShowThemeModeComponent />
      </div>
    </AppProvider>
  );
};

[test.tsx];

describe("render ShowThemeComponent", () => {
  render(<ShowThemeModeComponent />, { wrapper: AppProvider });
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toHaveTextContent("dark mode");
});

/*========== Custom Render function for wrappers/providers =============*/
[test.utils.js];
const customRender = (ui, options) =>
  render(ui, { wrapper: AppProvider }, ...options);

export * from "@testing-library/react";
export { customRender as render };
```

**_<!- Testing Custom React Hooks ->_**

```jsx
[component.tsx];

export const useCounter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

[test.tsx];

describe("useCounter", () => {

  test("should render the initial count",()=>{
    1 - // render(<useCounter />); | we cannot do that as it is not returning any jsx
      2 - // useCounter() | we cannot do this also as hook is always need to be inside react component
      const {result} = renderHook(<useCounter />);
    //-> renderHook will wrap the hook in a function component and invoke the hook and return the object from which we can destructure a property called result
    expect(result.current.count).toBe(0)
  })

  test("should except and render the initial count",()=>{
    const {result} = renderHook(useCounter,{
      initialProps:{
        initialCount : 10
      }
    })
    expect(result.current.count).toBe(10)
  })

  test("should increment a count",()=>{
    const {result} = renderHook(<useCounter />)
    result.current.increment() -> ⨉
    /* this will not get updated
       we use act() -> it is a function that ensures updates are processed  before insertions are made
    */
    act(()=>result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test("should decrement a count",()=>{
    const {result} = renderHook(<useCounter />)
    result.current.decrement() -> ⨉
    /* this will not get updated
       we use act() -> it is a function that ensures updates are processed  before insertions are made
    */
    act(()=>result.current.decrement())
    expect(result.current.count).toBe(-1)
  })

/* The code that causes state update -> react library cannot wrap them with the act utility function.
   we have to manually import it and wrap code that causes state updates
   In most part lib. exposes with in act
*/

});
```

**_<!- Mocking a function ->_**

```jsx
[component.tsx];

export const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{props.count}</p>
      {props.incrementHandler && (
        <button onClick={props.incrementHandler}>Increment </button>
      )}
      {props.decrementHandler && (
        <button onClick={props.decrementHandler}>Decrement </button>
      )}
    </div>
  );

  [test.tsx];

  describe("counter", () => {
    test("render correctly", () => {
      render(<Counter count={0} />);
      const countElement = screen.getByRole("heading");
      expect(countElement).toBeInTheDocument();
    });
  });

  test("handlers are called", async () => {
    // all user-event apis are async
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Counter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementButton).toHaveBeenCalledTimes(1);
    expect(decrementButton).toHaveBeenCalledTimes(1);
  });
};
```

**_<!- Mocking HTTP request / api ->_**

<!-- we will use mock service worker(MSW) for mocking the apis -->

      - install msw as dev dependency
      - create src > mocks -> src/mocks
      - src/mocks -> create a file server.ts
      - src/mocks -> create a file handlers.ts
      - telling our test to use mock service server
            - open setupTest.ts file

```jsx
import { server } from "./mocks/server";
// establish API mocking before all test
beforeAll(() => server.listen());

// Rest any request handler that we may add during the tests so they don't affect other tests
afterEach(() => server.listen());

// clean Up after the tests are finished
afterAll(() => server.close());
```

```jsx
[component.tsx];

export const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://some-url/api/users')
    .then(res=>res.json())
    .then(data=>{setUsers(data.map(user:user.name))})
    .catch(err=> setError("Error fetching user"))
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user=><li key={user}>{user}</li>)}
      </ul>
    </div>
  )

  [server.ts]

  import {setupServer} from 'msw/node'
  import {handlers} from './handlers'

  export const server = setupServer(...handlers)

  [handlers.ts]

  import {rest} from 'msw'  //other alternative is graphQL

  export const handlers = [
    rest.get('http://some-url/api/users',(req,res,ctx)=>{
        return res(ctx.status(200),
        ctx.json([
          {name:"Bruce Wayne"},
          {name:"Tony Stark"},
          {name:"Clark Kent"}
          ]))
    })
  ]

  [test.ts]


    describe("Users",()=>{

      test("render a list of users",async()=>{
        render(<Users />)
        const users = await screen.findByAllRole('listItems')
        expect(users).toHaveLength(3)
      })

      test("renders error",()=>{
        // for error testing we need a per test handlers as setting the ctx.status(500) will fail all the User mock api
        server.use(
          rest.get("'http://some-url/api/users",(req,res,ctx)=>{
            return res(ctx.status(500))
          })
        )
      })

      render(<Users />);
      const error = await screen.findByText('Error fetching user')
      expect(error).toBeInTheDocument()

    })
};
```

**_<!- Static Analysis Testing ->_**

- TypeScript
- Eslint
- prettier
- husky
- lint-staged
