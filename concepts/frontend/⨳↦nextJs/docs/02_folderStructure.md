Link : https://www.youtube.com/watch?v=e-3UPyuOCq0&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=3&ab_channel=Codevolution

Overview :

- **_<!- Folder structure ->_**

[.next] > this is being generated when we run either the the dev or build scripts
(it is from the this folder from where our next js is served from )

[styles] > It contains some styles for our application
. global style
. component specific style
this folder does not have any significance as such as it is possible to describe styles in other places

```sh
create next app
```

command simply groups then in the style folder for better organization

[public] > It holds all the public resources > favicon, svg, images
In React application public folder also have index.html file | all the html files is created by next js depending on the type of application we are building

[pages] > This folder is responsible for entire routing feature in our application
index.js - is the file which gets served when we visit localhost:3000
\_app.js - is where we define Layout for our application
api - where we create apis for our application

- **_<!- Work Flow ->_**

  . when we run yarn dev | npm run dev
  . the execution is transferred to \_app.js which contains MyApp component > it automatically receives the component and pageProps which are then returned as the part of jsx
  .
