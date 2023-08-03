Links : https://www.youtube.com/watch?v=-XKvVyC6si0&t=3614s&ab_channel=TonyAlicea

Overview :
DOM : Document Object Model
Its a collection of object in computer memory that represents the the HTML element that defines a web page.
It provides the ability to analyze and change the document being presented to the user

Once we pass HTML to the browser what we are dealing with is DOM.
The collection of object in memory form a tree

HTML -> (browser converts it into) -> DOM (the collection of object in the computer memory) -> Browser than takes that information from memory -> and do the rendering/part of that rendering | paint to the user screen

DOM Manipulation:
HTML -> converted by browser into -> DOM -> Render/Paint

Modern web development is based on the idea that the DOM can be manipulated
means:
We can change the content of the DOM tress after the HTML is read and DOM is created
when:
We change the DOM tree the Browser re-renders it updates what the user is interacting in DOM
how ? :
the browser provides an API(Application Processing Interface)
the function, object, urls. that defines how the program can be communicated with. API is how we allow programming to talk to by other programmes.
The Browser APIs are the methods with which we in our code can talk ti the browsers code
eg:
we might append a child adding a new element to the DOM tree > append child function is not the standard Javascript function instead it is provided by the browser which let us call it in our JavaScript code > after we call it it causes the browser to re-render

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

