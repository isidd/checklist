```js
/*
//  Link : https://www.youtube.com/watch?v=rKk4XJYzSQA&ab_channel=TejasKumar
           https://www.youtube.com/watch?v=Zan16X8VvGM&ab_channel=TejasKumar
           https://www.youtube.com/watch?v=-XKvVyC6si0&ab_channel=TonyAlicea

Reconciliation : 
    Comparing two items to find differences between them.
    Reconcile our description -> what we want our user interface to look like and behave like with some host environment
    React Web -> Browser 
    React Native -> Mobile
    
    React will take our JSX descriptions and reconcile it with the HOST env. -> put thi s stuff on the screen this way.
    Till React 16 -> we had (Stack Reconciler) now we have (Fiber Reconciler) 

    With Stack(LIFO) Reconciler -> It is sequential and hard to do parallel or concurrent stuff
    but in UI -> user input events have the inherent sense of priority , Notification mostly is low priority 

    So if we have low priority task before hight priority task in Stack and if that low priority task is some animations 
    then UX is gonna be very bad

#   Reconciler should have 
    - Sense of priority
    - Putting things on screen when the things are ready (do a hight priority update off screen and then put that on screen)

#   Fiber does work(the work req. to update the user interface) in two phases
    - Render phase
        It make updates in the render phase off the screen in memory and when the rendered work looks good it commits it
    - Commit phase
        committing is when the updates are actually put on the browser
        
    For this 2 phase approach Fiber needs to maintain 2 trees 

    Current Tree | Work In Progress Tree (detached from browser)

    In Render Phase : There is function called | workLoop | (Its like a game engine, as long as there is work to do do it in a loop)
    
    workLoop (it starts with a function called begin work)
        -> beginWork(current,workInProgress,lanes) <currentFiberNodes,workInProgressFiberNodes,renderLanes(for scheduling)>
            current(never change) -> is something which is in the browser right now we do not mutate this we just read this to compare
                       what is on the screen and what is about to be on the screen
            workInProgress(change) -> what's about to be on the screen is the Work In Progress 
            when we click -> 
                    there is work to be done -> we call beginWork() 
                        where do we call it -> we call it at the top level <AppComponent>
            what happens in beginWork() -> It marks update flags, comparing next props and previous props. did anything change
                                           yes -> then it sets a flag -> its marks out component as needs to update
                        when its finished then it recursively calls the beginWork() on the next thing steps down in the tree 
            when we reach the bottom -> it will either go to the sibling but before that it calls a function called completeWork

            completeWork(current,workInProgress,lanes) -> completeWork constructs a tree of elements not in the browser but in 
                                        the memory. So it construct a tree attaches nodes and then moves either up or to the side
                                        and walks back up
                    How can we create an HTML tree detached from the browser
                    
                                ----------this is completeWork phase----------
                                const div = document.createElement('div')
                                const span = document.createElement('span')
                                div.appendChild(span)
                                -------------------------------------------
                                
                                ----------------commit phase---------------
                                document.appendChild(div)
                                -------------------------------------------
            Render phase ->This complete cycle is the render phase 
                beginWork()↓ -> walks down setting flags
                completeWork()↑ -> walks back up composing a work in progress element tree

            when we are finished with Render phase then the workInProgress Tree is the latest state, so we need to commit
            this tree to the Browser/Host environment.

            Commit Phase -> to commit the changes we need to look at the fiber root node 
                                                ◯
                                         Fiber Root Node
                        (it is the hidden real root node of our fiber tree)
                Initially Root Fiber node points to the current tree. but after Render Phase(beginWork()↓ ,completeWork()↑)
                finishes the WorkInProgress Tree. the commit phase will basically take this pointer from the current Tree
                and point it to the WorkInProgress Tree and the then workInProgress becomes the Current Tree. and the 
                workLoop is done
                
            Best Part : Lot of this work happens off the screen if a high priority updates comes in and interrupt that
                        it can. it can do hight priority work then bailout and then go do low priority work   
                        Its interrupt-able cause its not a stack and also not on the screen
                        thats like a draft UI always working in the background    

------------------------------------------------------------------------------------------------

    const App = ()=>{
        const [count, setCount] = useState(0)

        return (
            <div>
                <h1>Hello World </h1>
                <span>Count: {count} </count>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        )
    }
------------------------------------------------------------------------------------------------
    fiberRootNode -> beginWork
        App -> beginWork
            div -> beginWork
                h1 ->  beginWork (h1 has no children so complete work is called on h1)
                h1 ->  completeWork
                span -> beginWork
                    interpolated value {count} -> beginWork
                    interpolated value {count} -> completeWork
                span -> completeWork
                button -> beginWork (has children as text node which is a value)
                button -> completeWork
            div -> completeWork
        App -> completeWork
    fiberRootNode -> completeWork
------------------------------------------------------------------------------------------------
After we completeWork on fiberRootNode -> commit Root phase runs on the fiber root node



Note : 
DOM has references to the FiberNode and FiberNode has references to the DOM 
*/
```