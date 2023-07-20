/*
    Prototype design pattern 
        - This pattern us just to create a clone of an object
        - It's state is shared 
        - https://youtu.be/sJ-c3BA-Ypo
        
    Object.create -> It creates an empty object and set the assigned Object's properties and method on its prototpe 
        as soon as we mutate it's properties or function with the created object we lose the scopt of that parameter or method
    Object.assign -> It creates an Object with all the properties and methods from the assigned Object
 */


const Zombie = {
    eatBrain(){
        return "Eating...!"
    }
}

const Human = {
    eatVeggies(){
        return "Eating Veggies..!"
    }
}

const hybrid = Object.assign(Zombie,Human)

hybrid.eatVeggies = function(){return "modified"}
console.log(hybrid.eatVeggies())
console.log(Human.eatVeggies())