(()=>{
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet (){
        return "Hello" + " " + this.name ; 
    }
}

class Teacher extends Person {
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject
    }
}

let pp = new Person("Sidd",30)
let tt = new Teacher("Sidd",30,"Maths")
console.log(pp)
console.log(tt)
})()

/* 

Class Based Inhertance in Js is just a different way of 
how we create an object using function custructor  
and setting all the methods to its prototype 

So instead of having same coppies of methods 
now these methods are set on prototype automatically using class


*/