Link : https://www.udemy.com/course/understanding-typescript/learn/lecture/16894036#overview

Overview : Its a way of providing the types as kind of argument
They give us flexibility to reuse a function/Component with type safety and we can also add some constrains

```js
const name: Array<number> = [1, 2, 3, 4];

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
});
```

- **_<!- Creating a Generic Function ->_**

```js
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Siddhartha" }, { age: 30 });
merged.name; //=> will throw error
merged.age; //=> will throw error
// Even though we know that they(name and age) exist but typescript doesn't know this typeScript can't

// although we can do the typecasting
// const merged = merge({ name: "Siddhartha" }, { age: 30 }) as {name:string,age:number} ;

// => here generics can help us

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Siddhartha" }, { age: 30 });
console.log(merged.age);
// This will work

// we can also
const merged = merge<{name:string,hobbies:string[]},{age:number}>({ name: "Siddhartha",hobbies:["cricket","reading"] }, { age: 30 });
```

- **_<!- Constrains ->_**

```js
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: "Siddhartha" }, 30);
// => here if we send 30 as the second parameter merged array is not going to set age filed
// is if not going to throw us any error but age property will not be there as Generic deceleration will will accept number type
// for this we need to restrict the Generic types

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

```

- **_<!- keyof Constrains ->_**
  The key expecting would be of same object

```js

function extractAndConvert<T,U>(obj:T,key:U){
    return obj[key]
}

extractAndConvert({},"name")
// key of name does not exist in then Object to verify that
// we use the typeof key constrain

function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key];
}

extractAndConvert({},'name') //=> this will show an error
extractAndConvert({name:"Siddhartha"},'name') // => this will be fine
// Object should have the keys available

```

- **_<!- Generics in Classes ->_**

```js
class DataStorage<T extends string | number> {
    private data : <T extends number | string > = []
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getItem(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Siddhartha')
textStorage.addItem('Yathartha')
textStorage.removeItem('Yathartha')

const numberStorage = new DataStorage<number>()
numberStorage.push(1)

// Here this is a non permeative data so we need create a separate class to handle this
const objectStorage = new DataStorage<object>()
objectStorage.push({name:"Siddhartha"})
objectStorage.push({name:"Yathartha"})

```

- **_<!- Generic Utility Type ->_**

- **_Partial : here we want temporarily our object properties to be optional only => Partial will allow us to do that_**

```js
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal = {}; //=> it will not allow us as we are filling as the title date etc.. properties does not exist in object initially
  let courseGoal: CourseGoal = {}; //=> it will not allow us as this is a empty object and not fulfilling the CourseGoal interface req.
  let courseGoal: Partial<CourseGoal> = {}; // partial will tak our interface and change its properties to optional therefore we can have an empty object and then fill the object step by step only problem is we can't return this because it has a type => Partial<CourseGoal> | => we can fix this by using typecasting

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal as CourseGoal ;
}

```

- **_Readonly : if we want to lock the entry or removal of items from the data structure_**

```js
const names: Readonly<strings[]> = ["Siddhartha", "Yathartha"];
names.push("Max");
names.pop("Siddhartha");
// we can't push or remove from the Array.
// this is alo applicable for Objects also
```

- **_Difference between Generics and Union types_**
  Union type is great when we can have multiple types for the same source
  Generic type is good when we want to lock in the source with a certain type

```js
class DataStorage<T extends string | number> {
    private data : T[] = []
    addItem(item:T){
        this.data.push(item)
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getItem(){
        return [...this.data]
    }
}

// instead of generics we can use Union types

class DataStorage {
    private data : (string | number )[] = []
    addItem(item:(string | number)){
        this.data.push(item)
    }
    removeItem(item:(string | number)){
        this.data.splice(this.data.indexOf(item),1)
    }

    getItem(){
        return [...this.data]
    }
}

// Problem with this approach is now  we storing any kind of data in Storage as long as data is string or number
// => we are not saying it is Storage of either of array of string or array of number
// => it is saying we have Storage with mixed items => number | string

```
