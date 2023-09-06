Links : https://www.youtube.com/watch?v=jDTw11pApkY&list=PLGTrAf5-F1YLBTY1mToc_qyOiZizcG_LJ&index=13

Overview :
When the program starts the execution will have different phases to go through
so node is going to execute using execution stack which will have a hierarchy of execution which gets holds the execution in queue

1. Timer Phase <Queue> | It will store the callbacks from => setTimeout() , setInterval()
2. I/O callbacks <Queue> | suppose to get executed for DB connection | file system
3. Idle it is used internally
4. Poll <Queue> | receiving the incoming request | If a client makes a new request it will be received by this phase
5. Check <Queue> | setImmediate
6. close <Queue> | close connections or file close

<!-- require -->

1. Resolve -> it will try to find the absolute path of the file (core module or local module) everything under node_module is core module
2. load -> load the contents of resolved path file
3. wrapper -> ((exports,require,module,**filename,**dirName)=>{
   exports = module.exports
   })()
4. evaluate ->
5. cached ->
