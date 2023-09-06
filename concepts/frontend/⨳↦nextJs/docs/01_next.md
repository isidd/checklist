Link : https://www.youtube.com/watch?v=9P8mASSREYM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&ab_channel=Codevolution

Overview :
< Next Js is a React framework for Production >

What ?

React Js:
. with React it is not quite possible to build a full feature rich app ready to be deployed for production
. React is a library for creating UIs
. We have to make decision on other features of the app like Routing, styling authentication etc.

NextJs:
. A package that uses React for building UIs
. It also has more functionality that enables us to build full fledged production ready app.

        . routing
        . styling
        . bundle optimization

Why ?

. It simplifies the process of building react app for production

        1. file based routing (we don't need 3rd party package then create a component import it and attach a path property to it )
        2. Pre-rendering(next js generate HTML in advance instead of having it all done by client side JS > Performance/SEO )
        3. API routes (we can create APIs with Next Js)
        4. Supports for CSS module
        5. Authentication (Support multiple authentication patterns each designed for different use cases )
        6. dev and prod build system (It provides the dev build system and eval optimized production build system to focus more on the code and less on config. )

How ?

install:

```sh
    npx create-next-app myApp
```

run:

```sh
    yarn dev | npm run dev
```
