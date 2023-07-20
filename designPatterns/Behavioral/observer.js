/*
    Observer design pattern 
        - It is a design pattern allows many object to subscribe to an event that are 
          brodcast by another obejcts
        - Its a one -> many relationship 
        - This is a push based pattern
        - Event handlers are the best examples of observer pattern

    Subject on which we 
        - subscribe
        - unsubscribe
        - broadcast
        */

        
        class Subject {
            constructor(){
                this.observer = [];
            }
            
            subscribe(fn){
                this.observer.push(fn)
            }
            unsubscribe(fnToRemove){
                this.observer = this.observer.filter(fn=>fn!==fnToRemove)
            }
            brodcast(){
                this.observer.forEach(fn=>fn.call())
            }
        }

        let subject = new Subject()

        const observer1 = ()=>console.log("Observer 1..")
        const observer2 = ()=>console.log("Observer 2..")
        subject.subscribe(observer1)
        subject.subscribe(observer2)
        subject.unsubscribe(observer2)

        subject.brodcast()