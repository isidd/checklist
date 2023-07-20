function Person (name,age){
    this.name = name ; 
    this.age = age ;
}

Person.prototype.greet = function() {
    return "Hello"+ " " + this.name
}

function Teacher (name,age,subject){
    Person.call(this,name,age)
    this.subject = subject ;
}

Teacher.prototype = Object.assign(Teacher.prototype,Person.prototype)


let t = new Teacher("siddhartha",31,"Maths");
let p = new Person("siddhartha",31,"Maths");
console.log(t)
console.log(p)

/* 
creating Objects using Function constructor 
new will return a blank object and filled it with the returned value or this; 
*/
