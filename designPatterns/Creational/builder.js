/*
    Builder design pattern 
        - It is type of object we create which have many interlinking parts or optional or required feild
        - We build object without passing it as argument in the constructor rather we build object step by step
          using methods rather than a constructor  
        - https://youtu.be/sJ-c3BA-Ypo 
 */


class Tea {
    constructor(){
        this.water = false;
        this.sugar = false;
        this.milk = false;
        this.tea = false;
    }
    addWater(){
        this.water = true ;
        return this ;
    }
    addSugar(){
        this.sugar = true ;
        return this ;
    }
    addMilk(){
        this.milk = true ;
        return this ;
    }
    addTea(){
        this.tea = true ;
        return this ;
    }
}

let T1 = new Tea()

T1
 .addMilk()
 .addWater()
 .addTea()
console.log(T1)