Link : https://www.udemy.com/course/understanding-typescript/learn/lecture/16888244#overview

Overview :
Classes : It are the OOPs concept where we try to define the blueprint of an object using classes

- OOPs
  We work with real life entities in our code > which resembles real life objects
  Object should contain all the logic related to that object
  It is a bluePrint for the Objects

  ```js
  class Department {
    /*Constructor is an method tied to the class which is being executed when the Object is being created so this is the best method where we can do initialization */
    name: string; //=> this is typescript feature
    constructor(n: name) {
      this.name = n;
    }
  }
  const accounting = new Department("accounting");

  **_<!- Compiling to pre es6 ->_**

    var Department = (function(){
        return function Department(n){
            this.name = n
        }
    })()

  ```

-⨳⨳⨳↦ **_<!- Constructor Function and this keyword ->_**

```js
class Department {
  name: string;
  constructor(n: name) {
    this.name = n;
  }

  describe() {
    console.log("Department " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { describe: accounting.describe }; // here we are pointing to the accounting describe method
// now we can call describe
accountingCopy.describe(); // this is going to give us => Department undefined

// to restrict any object using the instantiated object method without having the same blueprint

class Department {
  name: string;
  constructor(n: name) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department " + this.name);
  }
}

// or
const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { name: "IT", describe: accounting.describe };
// this is matching the same class sig.
```

- **_<!- Private and Public access modifiers ->_**

```js
class Department {
  name: string;
  employee string[];
  constructor(n: name) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department " + this.name);
  }
  addEmployee(employee: string) {
    this.employee.push(employee)
  }
  printEmployeesInformation(){
    console.log(this.employee.length)
    console.log(this.employee)
  }
}

const accounting = new Department("Accounting")
accounting.addEmployee("Siddhartha")
accounting.addEmployee("Yathartha")
accounting.printEmployeesInformation()

// but there is a problem
accounting.employee[2] = "Vinayak"
// there has to be a clear approach and in classes through methods => addEmployee()
// may me we have some validation checks before adding anything to array

class Department{
    private employee : string[] = []
    private name:string = ''

    private print(){
        console.log("print the log")
    }
}

// Shorthand

class Department{
    constructor(private id:number,public name : string){
        this.id = id
        this.name = name
    }
}

```

- **_<!-- - Readonly Properties  -->_**

```js
class Department{
    private readonly id : number ;
    public name : string;

    constructor(id:id,name:name){
        this.name = name ;
        this.id = id
    }
    change(){
        this.id = "g3" // this is not allowed as id is read only
    }
}
```

- **_<!- Inheritance ->_**
  We will be inheriting the base class properties and methods to the more specialized class

  ```js
  class ITDepartment extends Department {
    // extends is use to inherit a class. it allow only one class to inherit
  }
  const IT = new ITDepartment(2, "IT");
  // this will work as the class from which we inherit automatically gets everything from the base class including its constructor
  // But if we declare a sub class constructor that will override the parent class constructor

  class ITDepartment extends Department {
    constructor(id:number,public admins : string[]) {
      super(id, "IT"); //=> super calls the constructor of the base class
        this.admins = admins
    }
  }

    class Accounting extends Department {
    constructor(id:number,private reports : string[]) {
      super(id, "Accounting"); //=> super calls the constructor of the base class
        this.reports = reports
    }
    addReport(text:string){
        this.reports.push(text)
    }
    printReports(){
        console.log(this.reports)
    }
  }

  ```

  - **_<!- Override Properties and Protected Modifiers ->_**

  ```js
  class Department{
    protected employee : string[] = []
    private name:string = ''

    private print(){
        console.log("print the log")
    }
  }

  class AccountingDepartment {
    constructor(id:string,reports:string[]{
        super(id,"Accounting")
    })

    addEmployee(name:string){  //=> this method is also there in the parent class so it will get override
        if(name=="Siddhartha") return ;
        this.employee.push(name) //=> if the employee declaration in the private => employee could not be accessed
        // now to handle this change the parent class declaration to protected(to make it still accessible in base class )
    }
  }
  ```

- **_<!- Getters and Setters ->_**

```js
    class AccountingDepartment extends Department {
    private lastReport : string

    get mostRecentReports (){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No Report Found')
    }

    set mostRecentReports (report:string){
        if(!report){
            throw new Error("Please pass in a valid value")
            }
        this.addReport(report)
    }

    constructor(id:number,private reports : string[]) {
      super(id, "Accounting");
        this.reports = reports
        this.lastReport = reports[0];
    }
    addReport(text:string){
        this.reports.push(text)
        this.lasReport = text
    }
    printReports(){
        console.log(this.reports)
    }
  }

//   calling getter and setter

const accounting = new AccountingDepartment('d2',[])
accounting.mostRecentReports = "Year End Report"

console.log(accounting.mostRecentReports)
// even though lastReport is private we can access this using getter and set new value to this using setter

```

- **_<!- Static Methods & Properties ->_**
  Static Methods are basically utility method
  Math => in javascript is a static method

```js
Math.PI
Math.pow() ...

  class Department{
    static companyName = "Siddhartha Corporation ©" //Static Method
    static fiscalYear = 2023 //Static Method

    protected employee : string[] = []
    private name:string = ''

    constructor(id:id,name:name){
        this.name = name ;
        this.id = id
    }

    static createEmployeeSchema(name:string,age:number){
        let [firstName,lastName] = name.split(" ")
        console.log(this.fiscalYear) // ⨉ -> this is not possible as its a static property
        console.log(Department.fiscalYear)
        return {
            firstName : firstName,
            lastName : lastName
            age : age
        }
    }

    private print(){
        console.log("print the log")
    }
  }

const employee = Department.createEmployeeSchema("Siddhartha Pharasi",30)
let em1 = new Department(employee.firstName,'IT')
console.log(Department.fiscalYear);
// we can access property or method without instantiating

```

- **_<!- Abstract Class ->_**
  If we want to enforce that the derived class share the common method/properties from the base class but the actual implementation will be handled by the inhabiting class

  ```js

  // We have to abstract class as well as method
  abstract class Department{

    static fiscalYear = 2023 //Static Method
    protected employee : string[] = []
    private name:string = ''

    constructor(id:id,name:name){
        this.name = name ;
        this.id = id
    }

    abstract describe(): void; // abstract method
  }

  class ITDepartment extends Department {
    constructor(id:number,public admins : string[]) {
      super(id, "IT"); //=> super calls the constructor of the base class
        this.admins = admins
    }

    describe(){
        console.log("IT-Department ID"+ this.id)
    }
  }
  ```

- **_<!- Singleton and Private Constructor ->_**
  It is about ensuring that we always have one instance of a certain class
  We can only create one object from this class

```js
    class AccountingDepartment {
    private static instance : AccountingDepartment
    private constructor(id:string,reports:string[]){
    /* => Private constructor ensure that we cannot call new on this
       => How will we create an Object then ? => use | static method |
    */
        this.name = name ;
        this.reports = reports
    }
    static getInstance(){
        if(this.instance){
            return this.instance ;
        }
        this.instance =  new AccountingDepartment('id',[])
        return this.instance ;
    }
  }

  const accounting = AccountingDepartment.getInstance()
  const accounting1 = AccountingDepartment.getInstance()
//   accounting & accounting1 => both points to same object

```
