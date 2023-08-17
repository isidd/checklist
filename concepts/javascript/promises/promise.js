/*  
Promises are the functions which holds the future value
the values it holds has states 
Promise Object is an Idea of waiting for the work (executor function) to complete and then find 
out what to do after the work is completed
- Pending
- Fulfiled
- Rejected
*/

(()=>{

const PENDING = 0 ;
const FULFILLED = 1 ;
const REJECTED = 2 ;

function customPromise(executorFun){
    let state = PENDING ;
    let value = null ;
    let handlers = [] ;
    let catchers = [] ;

    function resolve(result){
        if(state !== PENDING) return ;
        state = FULFILLED;
        value = result ;

        handlers.forEach(h=>h(value))
    }

    function reject(err){
        if(state !== PENDING) return ;
        state = REJECTED ; 
        value = result ;

        catchers.forEach(c=>c(err))
    }

    this.then = function (callback){
        if(state === FULFILLED){
            callback(value)
        }else{
            handlers.push(callback)
        }
    }

    executorFun(resolve,reject)

}

const doWork = new customPromise((resolve,reject)=>{
    setTimeout(()=>resolve(29),2000)
    
})

let a = doWork.then((res)=>{
console.log(res);
return new customPromise((resolve,reject)=>{
    setTimeout(()=>resolve("Helllo"),2000)
})
})
console.log(a)
})()


// ============================ Methods =========================================== //

// const promise1 = Promise.resolve(1);
const promise1 = Promise.reject("error");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promises = [promise1, promise2,promise3];

/*
Promise .all
it is a static method takes ittrable of promises and returns a single promise
It rejects when any of the input's promises rejects, with this first rejection reason.  
 */

Promise.all(promises).then((values) => {
  console.log({all:values});
}).catch((err)=>{console.log({all:err})});


/*
Promise .allSettled
it is a static method takes ittrable of promises and returns a single promise
It runs all promises even if it is rejected with status & value(fulfiled)/reason(rejected)
 */


Promise.allSettled(promises).then((values) => {
    console.log({allSettled:values});
  }).catch((err)=>{console.log({allSettled:err})});


/*
Promise .any is a static method takes an iterable of promises as input and returns a single Promise
it fulfills if any of the prosmise fulfills
It rejects when all of the input's promises reject with an AggregateError containing an array of rejection reasons.
*/

Promise.any(promises)
.then((value) => console.log({any:value}))
.catch((err)=>console.log({any:err}))

/*
Promise .race is a static method takes an iterable of promises as input and returns a single Promise
This returned promise settles with the eventual state of the first promise that settles.
*/

Promise.race(promises)
.then((value) => console.log({race:value}))
.catch((err)=>console.log({race:err}))