Link : https://www.udemy.com/course/understanding-typescript/learn/lecture/16935712#overview

Overview :

- Decorators : It is very useful for meta programming
  Is not going to directly impacting the end user instead it is well suited instruments for writing a code which is the easily use by other developers

  For eg : when we use event listener on the => which will have direct impact on the users of out page if register a listener on the button and show alert after button gets clicked the user immediately ee something on screen
  with decorators we don't do that => but we use it to guarantee if the classes used correctly or method in a class where we have some hidden transformation

- **_<!- First class Decorators ->_**

```js
/*
    - Decorators runs even without instantiating the class only with the definition of the class
*/

function Logger(constructor: Function) {
  console.log("logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Siddhartha";
  constructor() {
    console.log("creating a person...");
  }
}

const per = new Person();
// output will be => creating a person...
```

- **_<!- Working with Decorator Factories ->_**

```js
function Logger(logString) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging - Person") // here we execute the function
class Person {
  name = "Siddhartha";
  constructor() {
    console.log("creating a person...");
  }
}

const per = new Person();
```

Eg:

```js
<body>
  <div id="app"></div>
</body>;

function Logger(logString) {
  console.log("Logger Factory..")
  return function (constructor: Function) {
    console.log("Logger Decorator")
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  console.log("Template Factory..")
  return function (constructor: Function) {
    console.log("Template Decorator")
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
    // or
    const per = new constructor()
    if(hookEl){
        hookEl.querySelector('h1')!.textContent = per.name
    }
  };
}

@Logger()
@withTemplate("<h1>Checking for the Decorator", "app") // here we execute the function
class Person {
  name = "Siddhartha";
  constructor() {
    console.log("creating a person...");
  }
}

const person = new Person()
/*
    Decorator will execute bottom up ↑ while the function will execute top down ↓
    Since we are executing a function and first which returns a decorator
    So functions function will first run in order and then decorators
    order of logging :
       ↓ Logger Factory
       ↓ Template Factory
       ↓ Template Decorator
       ↓ Logger Decorator
*/

```

- **_<!- Property Decorator ->_**

```js
function log(target : any, propertyName:string|Symbol){
    console.log(target,propertyName)
}

class Product {
  @Log
  title: string;
  private _price : number

  set Price(val:number){
    if(val > 0){
        this._price = val
    }
  }

  constructor(t:title){
    this.title = t;
  }

 getPriceWithTax(tax:number){
    return this._price*(1+tax)

 }

}

/*
    - target will give the prototype of this object so all the methods attached
        output of this log decorator
        (target:any,parameterName:string)
            target ↓
                {constructor:f , getPriceWithTax:f, set price :f, __proto__:object }
            propertyName ↓
                "title"

    In case of the static property
    @log()
    static title : number
    in this case target will be
        (target:any,parameterName:string)
        target will be constructor
*/
```

- **_<!- Accessor Decorator ->_**

```js

function log(target : any, name:string , descriptor:PropertyDescriptor){
    console.log(target,propertyName,descriptor)
}

class Product {
    title: string;
  private _price : number

  @Log
  set Price(val:number){
    if(val > 0){
        this._price = val
    }
  }

  constructor(t:title){
    this.title = t;
  }

 getPriceWithTax(tax:number){
    return this._price*(1+tax)

 }

}

/*
        (target:any,parameterName:string)
            target ↓
                {constructor:f , getPriceWithTax:f, set price :f, __proto__:object } => [Prototype]
            name ↓ [name of the accessor]
                "Price"
            propertyDescriptor ↓
                {
                    configurable : true,
                    enumerable : false,
                    get : undefined,
                    set : f price(val)
                }
*/

```

- **_<!- Methods Decorator ->_**

```js

function log(target : any, name:string , descriptor:PropertyDescriptor){
    console.log(target,propertyName,descriptor)
}

class Product {
    title: string;
  private _price : number

  set Price(val:number){
    if(val > 0){
        this._price = val
    }
  }

  constructor(t:title){
    this.title = t;
  }

 @Log
 getPriceWithTax(tax:number){
    return this._price*(1+tax)

 }

}

/*
        (target:any,parameterName:string)
            target ↓
                {constructor:f , getPriceWithTax:f, set price :f, __proto__:object } => [Prototype]
            name ↓ [name of the accessor]
                "getPriceWithTax"
            propertyDescriptor ↓ [descriptor of this method]
                {
                    configurable : true,
                    enumerable : false,
                    value : f getPriceWithTax(tax),
                    writable : true
                    __proto__ : object
                }
*/

```

- **_<!- Argument Decorator ->_**

```js

function log(target : any, name:string | Symbol , position:number){
    console.log(target,propertyName,position)
}

class Product {
    title: string;
  private _price : number

  set Price(val:number){
    if(val > 0){
        this._price = val
    }
  }

  constructor(t:title){
    this.title = t;
  }


 getPriceWithTax( @Log tax:number){
    return this._price*(1+tax)

 }

}

/*
        (target:any,parameterName:string)
            target ↓
                {constructor:f , getPriceWithTax:f, set price :f, __proto__:object } => [Prototype]
            name ↓ [name of the method]
                "getPriceWithTax"
            position ↓ [position of the argument]
                0
*/

```

- **_<!- Returning a Class from Decorator->_**
  We need to return something(in our case a class) from inside of Decorator Function
  Since I am returning a new constructor function where we still execute the old logic
  In this case It will only get executed when class is instantiated

```js
function WithTemplate(template: string, hookId: string) {
  console.log("Template factory");
  return function <T extends {new(...args:any[]):{name:string}}>(originalConstructor: T) {
    return class extend originalConstructor {
        constructor(..._:any[]){
            super();
            const hookEl = document.getElementByID(hookId);
            const person = new originalConstructor();
            if (hookId) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContext = this.name;
            }
        }
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Siddhartha";
  constructor() {
    console.log("Creating a person...");
  }
}

const person = new Person();
```

- **_<!- Other Decorator Return Type->_**
  Decorators where can return something are:
  - methods decorator
  - accessors decorators
    We can return a new property descriptor
    property descriptors are javascript object

```js
class Printer {
  message = "This works..!";
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer()

const button = document.querySelector("button")
button.addEventListener("click",p.showMessage) ⨉
                    ↓
// when we use a event listener | this is referred to the target event
// cause eventListener binds this in the function which is to be executed to the target of the event
button.addEventListener("click",p.showMessage.bind(p)) √

                    ↓
            ["auto bind this"]

function AutoBind(_:any,_2:string,descriptor:string){
    const originalMethod = descriptor.value
    const adjustedDescriptor : PropertyDescriptor = {
        configurable : true,
        enumerable : false,
        get () {
            const bundFunction = originalMethod.bind(this)
            return bundFunction;
        }
    }
    return adjustedDescriptor;
}

class Printer {
  message = "This works..!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer()

const button = document.querySelector("button")
button.addEventListener("click",p.showMessage)

```

- **_<!- Validation with Decorators->_**

```js
class Course {
  tittle: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}
```
