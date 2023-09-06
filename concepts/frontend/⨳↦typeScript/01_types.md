<!--------------------------------- Core Types  --------------------------------->

- **_Number : 1, 5.3, -10_**
  All Numbers no diff between integer or float

- **_String : "Siddhartha" , 'Siddhartha', `Siddhartha`_**
  All Text values

- **_Boolean : true , false_**
  Just these 2 no truthy or falsy

- **_Object : {age:29}_**
  Any Javascript object,more specific type (type of object) are possible

  ```ts
  const Object: {
    name: string;
    age: number;
  } = { name: "Siddhartha", age: 30 };
  ```

- **_Array : [1,2,3]_**
  Any Javascript array, type can be flexible or strict(regarding the element types)

  ```ts
  <!-- strict array -->
    const Array = ["apple","samsung"]

    const array : Array<string>= ["apple","samsung"]
    const array : string[] = ["apple","samsung"]

    for(var item of array){
        item.toUpperCase()   // we do this with certainty as array has all the string item
        item.parseInt()   // Typescript Error
    }

    Number :
    const Array = [1,2.2]
    const array : number[] = [1,2]
    const array : Array<number> = [1,2]

    for(var item of array){
        item.parseInt()   // we do this with certainty as array has all the number item
        item.toUpperCase()   // Typescript Error
    }

  ```

- **_Tuple : [1,2] (for more strict)_**
  It is an array but a fixed length and fixed type array

```ts
const role = [2, "author"];
const role: [number, string] = [2, "author"];
role.push("admin"); // push is allowed in tuples
role[1] = 10; //typescript will not allow this
```

- **_Enum : enum {new,old}_**
  Automatically enumerated global constrain identifiers

  ```ts
  const role = { ADMIN, READ_ONLY, AUTHOR };
  (ADMIN = 0), (READ_ONLY = 1), (AUTHOR = 2);

  const role = { ADMIN=5, READ_ONLY, AUTHOR };
  (ADMIN = 5), (READ_ONLY = 6), (AUTHOR = 7);

  const role = { ADMIN="ADMIN", READ_ONLY="READ_ONLY", AUTHOR="AUTHOR" };
  (ADMIN = "ADMIN"), (READ_ONLY = "READ_ONLY"), (AUTHOR = "AUTHOR");


  <!-- Javascript way -->

  var Role
  (function (Role){
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "ADMIN";
  })(Role || (Role={}))

  ```

- **_any_**
  any kind of value no specific assignment

- **_Union types_**
  To accept many different types

            const a
            /     \
        string   number ...

```ts
const a: number | string;
 - type Combinable = number | string ;
 - type CustomType = 'as-number' | 'as-string'
```

- **_Function & Callback_**

```js
function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result); // since callback is not returning anything that is why we use cb: (num:number)=>void
}

addHandler(2, 6, (result) => {
  console.log(result);
});

const addNumber = (n1: number, n2: number): number => {
  return n1 + n2;
};

const addString = (n1: number, n2: number): string => {
  return n1 + "" + n2;
};
```

- **_unknown_**
  any with a strict type checking

```js
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Siddhartha";

userInput = userName; // here we are defining the user input to a defined type of string which is wrong
// for this we need extra type checking

if (typeof userInput === "string") {
  userInput = userName;
}
```

- **_never_**
  any function which is not returning anything returns ['undefined']
  but if the function crashes in that case it never returns anything

```js
// this never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, statusCode: code };
  &
  while(true) => this also never returns
}
```
