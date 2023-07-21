Link : https://www.youtube.com/watch?v=F_BYg2QGsC0&ab_channel=Academind
https://www.youtube.com/watch?v=ZEpfiGu1f8g&ab_channel=WebDevelopmentTutorials

Overview :

In a SPA :
We only get One page from the server -> which can also download bunch of assets css images and also a lot of javascript
and because of this Javascript code which will listen to

- url changes
- clicks on links
- rerender parts of the DOM in the loaded page whenever we switch the page

We get this file when user visits the page for the first time
The entire page consists of components will then be managed by javascript
If req. any new route we don't go to server and reload the page everything happens instantaneously
Loader can be shown while the content is being loaded

In SPAs page is built up with React component and every component is a React component and the entire page is managed by a Root react component so everything is under Reacts control
There is only one React DOM render call for the root component and that root component host other component

We never load new pages only data from the server

Pros

- Highly Reactive | this happen instantaneously
- De coupled frontend | we don't need to write any server side code | we follow APIs for data

Cons

- SEO is challenging
- JavaScript is strictly required | we have to turn on the javascript on the browser so that it can run the javascript | everything happens  
  through javascript (re-render) and if it's turned off our page wouldn't work at all

  It tends to favour more modern browser
