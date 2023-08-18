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

- Jest Vs React testing library

  > Jest is a javascript testing library.

      Jest is a test runner that finds test run test determine weather a test passed or failed and returns it back to the human readable manner

  > React Testing Library is Javascript testing utility that provides virtual-DOM for testing react component

        we can use the virtual-DOM to interact and verify the behavior of the react component.
        its a family of packages which helps test UI component
        Core library is called DOM testing library amd RTL is the wrapper around the core library
      pointers :
        - with react testing library we are not concerned with the implementation details of a component
        - instead we are testing how the component behaves when a user interacts with it
        - RTL will not care if we add 4+4 or 5+3 to display 8 | as long as user sees 8 it has no problems
        - refactoring will not effect the test as long as the end result is same
        - RTL makes a balance between unit and E2E testing

- Types of test

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

Anatomy of Test file :

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

<!-- Test with component accepts props -->

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

<!-- Grouping The Tests -->

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

<!-- Code coverage -->

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

  <!-- inside package.json setting threshold for code coverage  -->

```json
  <!-- Coverage Thresholds -->
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

<!-- Assertions(Jest) -->

- Assertions : When writhing test we need to check that the values meets a certain condition, it decides if the test
  passes or fails

  expect(value) -> the argument should be the value that our code produce | in our case it is a DOM node
  we will use expect with a matcher function to assert something about the value
  A matcher can optionally accept an argument which is correct expected value
  eg : toBeInTheDocument()

===========================================================

- What to test ?

  > test component render
  > test component render with props
  > test component render with different states
  > test component reacts to events (button and form control/ user interactions)

- What not to test

  > implementation details (we test the behavior not how it is implemented)
  > third party code
  > code that is not important from user point of view (for a function that displays date in user-friendly format then we don't have to test if the function was called by the component instead we need to directly test if the date is in expected format)

      RTL Quires
          Queries are the methods that testing library provides to find element on the page
          to get single element on the page we have
              getBy..
              queryBy..
              findBy..

          to find multiple elements on the page we have
              getAllBy..
              queryAllBy..
              findAllBy..

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
