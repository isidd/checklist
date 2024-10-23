
**_DOM(Document Object Model) & DOM Manipulation_ :_**
    - DOM is a Collection of object in computer memory that represents the HTML elements, It provides the ability to analyze and change the document being presented on the browser or user.

**_DOM Manipulation_ :_**
    - Browser Re-Rendering..
      Since DOM is the Collection of objects in computer memory.. > the these objects can be manipulated
      So we can change the contents of the DOM tree after the HTML is read and DOM is created
      When we change the DOM tree > the Browser re-renders.. > it updates what the user interacting with the new DOM.
      HOW ? is it possible to manipulate the DOM..
      The Browser provides an API (Application Programming Interface > the functions, objects, url etc.. that defines how a program can be communicated with | how we allow our program to talk to with other program)

    - The Browser APIs are the methods with which we in our code can talk t0 the browsers code
      eg: ...appendChild()
      we might append a child adding a new element to the DOM tree > append child function is not the standard Javascript function instead it is provided by the browser which let us call it in our JavaScript code > after we call it it causes the browser to re-render.

                                         |------------------|
                                         |  Inside Browser  |
                                         |------------------|
                                           |              |
                                           V              V
                            |---------------|           |---------------|
                            |   JavaScript  |  Browser  |   Rendering   |
                            |     Engine    |---------->|     Engine    |
                            |      C++      |    API    |      C++      |
                            |---------------|           |---------------|

                            This runs our code          Paint the DOM tress
                                                          to the screen
         ( WE can write the Javascript Code that can give instructions to the rendering engine )
         This happens via these browser APIs..
         So we can manipulate a DOM once the HTML document is downloaded parsed and painted on the browser..

```html
    <body>
      <main id="app">
        <ul id="list">
          <li>item 1 </li>
          <li>item 2 </li>
        </ul>
      </main>
      <script src='app.js'></script> <!-- DOM elements are already created before the javascript runs.. -->
    </body>
```
This whole file gets downloaded parsed and painted on to the browser

Manipulations using browser APIs..

```js
const listElement = document.getElementById('list') // document object is the part of the browser API not JS..
const newListItem = document.createElement('li')
newListItem.textContent = 'Item 3'
listItem.appendChild(newListItem) //this will add a new DOM element to the existing DOM element as a child.. 
setTimeout(()=>listItem.appendChild(newListItem),1000)
```
This will trigger re-render
This different ways of how do we manipulate the DOM give the different libraries and framework