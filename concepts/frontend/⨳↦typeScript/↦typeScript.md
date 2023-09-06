Link : https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship

Overview :

Is basically language or a way to validate our javascript code with static type checking
for eg:
Javascript is a dynamic type language here we can even ref any variable which don't even exist or reference an unknown shape object method
now this code is interpreted by the browser and if something is wrong with code it will throw an error in the runtime.

so we don't need to debug a stacktrace instead .ts will inform us right there on the code
Reason we get this instant feedback because typescript is complied language

JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

Its a super set of Javascript > we can run javascript + extra features completely optional

```bash
run typescript compiler -> tsc index.ts
ts file -> transpile -> javascript

source code -> parse the code -> other source code
```

```json
.tsConfig
it provide us way to customize Compiler behavior
{
"compilerOptions":{
"noImplicitAny": true,
"removeComments": true
},
"include":[src/**/*],
"exclude":["node_modules"]
}
```
