Link : https://www.youtube.com/watch?v=tbBILjDgXb4&ab_channel=SoftwareDeveloperDiaries
https://www.youtube.com/watch?v=JU6sl_yyZqs&ab_channel=WebDevSimplified

Overview :

- On update cycle we can control the re-rendering
  React dev tool -> Profiler > tick the highlight update when component re-render |why did this rendered

  Now a parent component having a list child component rendered and having passed values and handlers as props
  On making a change in any of the list child component (onChange/onClick) is going to re-render Parent component which will re-render all the other child component
  so to avoid this

  1. we should be able to track if the prop value for child component has changed or not
     for this React provide a hook | - memo | and lifecycle method called | - shouldComponentUpdate |
     both compares between the 2 react virtual DOM copy and look for the changes. React will only going to re-render the component if there is any changes otherwise it is going to show the prev virtual DOM copy.

  2. on re-rendering of Parent component handlers are being recreated on each update cycle which is going to re-render
     child component as the reference to the handlers are going to change.
     to avoid this
     React provides us the hook called | - useCallback | useCallback(fn,[])

  3. useRef allows us to store immutable value persist across re-renders
     use case : when we have a

- import cost
  when we install a package in most of the cases we will use some of the functionality from that so instead of downloading that package we must try to create a utils folder and create that specific utility function
  instead of importing a Named import
  https://www.youtube.com/watch?v=CGgEPHwzCUU&ab_channel=CodeRealm

- Virtualizing List :

- Profiler : gives the overall picture of the component render re-render cycle

- Code-Splitting

  1. allows us to have dynamic import

  ```js
    < button onClick={()=> {
        import("./utils.js").then(module=>{
            <!-- module.default in case of default export -->
            alert(module.sum(2+2))
        })
        <!-- this part will only be downloaded when we click on the button -->
    } } />
  ```

  2. importing dynamic react component using React.lazy

     ```js
     import("component/home"); // this returns a promise | import takes a default export component
     // If there is no default export then
     import("component/home").then(module=>{
        return {default : module.Home}
     })

     React.lazy accepts a fun which returns a promise.
     const Home = React.lazy(()=>import("component/home"))
     <!-- It is only downloading the component when we need them  -->

        function wait(time){
            return new Promise(resolve=>{
                setTimeout(resolve,time)
            })

     <!-- we can make use of Suspense API to create a fallback till the Component is not loaded  -->
        }
     const Home = React.lazy(()=>wait(1000).then(()=>import('./home.jsx')))

        <Suspense>
            <Home>
        </Suspense>
     // The other use case for this is if we have all the user type related component on the single app
     // there dynamic import is good use case since there is no need to download the Admin component if user is not admin
     export function lazyLoad(path,namedExport){
        return lazy(()=>{
            const promise = import(path) ;
            if(namedExport == null) return promise;
            return promise.then(module=>({default:module[namedExport]}))
        })
     }
     lazyLoad("./about","About)

     ```

---

## Optimizing Bundle Size :

- CDN
- Optimizing Web-pack

## Optimizing Performance :

- Hooks
  - useCallback
  - memo
  - useMemo
  - useRef
  - keys(for list)
- dynamic import
- lazy load the component (with Suspense)
- lazy load images/ resource
- Optimize images
- download content on demand > Observable correctional Area
- De-bouncing
- Throttling
- Web-Workers for process sorting
