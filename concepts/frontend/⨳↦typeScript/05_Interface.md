Link : https://www.udemy.com/course/understanding-typescript/learn/lecture/16888306#overview

Overview :
Interfaces : Describe the structure of an Object how Object should look like
It use to type check for Object that must have the desired structure

- **_<!- Interface ->_**

```js
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Siddhartha",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello I am ");
```

- **_<!- Using Interfaces with Class ->_**
  It can work as a contract a class can implement
  Its bit like working with abstract class also
  where in Interface we don't have implementation details

```js
interface Greetable {
    name : string
    greet(phrase) : void
}

class Person implements Greetable | AnyOtherInterface { //=> implements allows interfaces

    constructor(name:string){
        this.name = name
    }

    greet(phrase:string){
        console.log(phrase + " " + this.name)
    }
}

```

- **_<!- Readonly Interface Properties ->_**
  It must only be set once and there after it i read only

```js
interface Greetable {
    readonly name : string;
    greet(phrase:string):void;
}
```

- **_<!- Extending Interfaces ->_**

```js
interface Named {
  name: string;
}

// we can extends multiple interfaces | with classes we cannot do that
interface Greetable extends Named, AnotherInterface {
  greet: (phrase: string) => void;
}
```

- **_<!- Interfaces as a Function Type ->_**

```js
type addFunction = (n1: number, n2: number) => number;
interface addFunction {
    (n1:number,n2:number)=>number;
}

let addNumber : addFunction

addNumber = (n1:number,n2:number)=>n1+n2;

```

- **_<!- Optional Parameters and Properties ->_**

```js
interface Greetable {
  name?: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
    name? : string
    constructor(name?:string){
        if(name){
            this.name = name;
        }
    }
    greet(phrase:string){
        if(this.name){
            console.log(phrase + " " + this.name)
        }else{
            console.log("Hi")
        }
    }
}

```
