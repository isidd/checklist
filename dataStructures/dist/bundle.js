/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './src/index.js':
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /***/ (
                __unused_webpack_module,
                __unused_webpack_exports,
                __webpack_require__
            ) => {
                eval(
                    '\n\n__webpack_require__(/*! ./linkedlist/singlylinkedlist/deps.js */ "./src/linkedlist/singlylinkedlist/deps.js");\n\n//# sourceURL=webpack://data-structures/./src/index.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/deps.js':
            /*!*************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/deps.js ***!
  \*************************************************/
            /***/ (
                __unused_webpack_module,
                __unused_webpack_exports,
                __webpack_require__
            ) => {
                eval(
                    '\n\n__webpack_require__(/*! ./index */ "./src/linkedlist/singlylinkedlist/index.js");\n__webpack_require__(/*! ./problems/deps.js */ "./src/linkedlist/singlylinkedlist/problems/deps.js");\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/deps.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/index.js':
            /*!**************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/index.js ***!
  \**************************************************/
            /***/ (__unused_webpack_module, exports) => {
                eval(
                    '\n\nObject.defineProperty(exports, "__esModule", ({\n  value: true\n}));\nclass Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\nclass Singlylinkedlist {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n    this.length = 0;\n  }\n\n  /* push \r\n  \r\n  1. fn acc val \r\n  2. create new node with val. \r\n  3. if no head set the head and tail to the newly created node \r\n  4. set the next prop on the tail to newly created node nad updated the tail \r\n  */\n  push(val) {\n    let node = new Node(val);\n    if (!this.head) {\n      this.head = node;\n      this.tail = node;\n      this.length = ++this.length;\n      return this;\n    }\n    this.tail.next = node;\n    this.tail = node;\n    this.length = ++this.length;\n    return this;\n  }\n\n  /* pop\r\n  1. if no nodes in the list return undefined \r\n  2. loop through list for tail \r\n  3. set the next prop of the second last node to null  \r\n  */\n  pop() {\n    if (!this.head) return undefined;\n    let current = this.head;\n    let newTail = current;\n    while (current.next) {\n      newTail = current;\n      current = current.next;\n    }\n    this.tail = newTail;\n    this.tail.next = null;\n    --this.length;\n    if (this.length == 0) {\n      this.head = null;\n      this.tail = null;\n    }\n    return this;\n  }\n\n  /* shift\r\n  1. if no nodes in the list return undefined \r\n  2. store the current head property \r\n  3. set the head prop the current next \r\n  4. decrement the length by 1\r\n  5. returned the value of the node removed\r\n  */\n  shift() {\n    if (!this.head) return undefined;\n    let current = this.head;\n    this.head = current.next;\n    --this.length;\n    if (this.length == 0) {\n      this.head = null;\n      this.tail = null;\n    }\n    return this;\n  }\n\n  /* unshift\r\n  1. accept a value \r\n  2. create new node with passed value \r\n  3. if no head set the head and tail as new node \r\n  4. otherwise set the newly created node next prop to be the head\r\n  5. set the head property on the new list of the newly created node\r\n  6. increment length by one\r\n  7. return list\r\n  */\n\n  unshift(val) {\n    let node = new Node(val);\n    if (!this.length) {\n      this.head = node;\n      this.tail = this.head;\n      ++this.length;\n      return this;\n    }\n    node.next = this.head;\n    this.head = node;\n    ++this.length;\n    return this;\n  }\n\n  /* get\r\n  1. fn should accept an index\r\n  2. if the index is less than zero or greater than equal to the length return null\r\n  3. loop through the list until you reach the index and return node  \r\n  */\n\n  get(index) {\n    if (index < 0 || index >= this.length) return null;\n    let pointer = 0;\n    let current = this.head;\n    while (pointer != index) {\n      current = current.next;\n      pointer++;\n    }\n    return current;\n  }\n\n  /* set\r\n  1. fun should accept a value and index\r\n  2. use get fn to find specific node\r\n  3. if node not found return false \r\n  4. if found set the value of that node to be the value passed\r\n   */\n\n  set(index, value) {\n    let node = this.get(index);\n    if (!node) return false;\n    node.value = value;\n    return true;\n  }\n\n  /* insert\r\n  1. if the index is less than 0 or greater than length return false;\r\n  2. if the index is same as the length push the new node to the end of the list\r\n  3. if the index is zero unshift the new node to the start of the list\r\n  4. otherwise get the node using get with index-1 > set the next prop to the new node > set the next prop of the new node to the prev next\r\n  5. increment the length\r\n  6. return true  \r\n  */\n\n  insert(index, value) {\n    if (index < 0 || index > this.length) return false;\n    if (index == this.length) {\n      this.push(value);\n      return true;\n    }\n    if (index == 0) {\n      this.unshift(value);\n      return true;\n    }\n    let node = new Node(value);\n    let leftNode = this.get(index - 1);\n    let rightNode = leftNode.next;\n    leftNode.next = node;\n    node.next = rightNode;\n    ++this.length;\n    return true;\n  }\n\n  /* remove \r\n  1. if the index is less than zero or greater than length return false\r\n  2. if the index is equal to length pop the node\r\n  3. if the index is equal to zero the shift the node\r\n  4. otherwise get the node using get with index-1 > set the next property of the node to the next to next property\r\n  5. decrement the length\r\n  6. return true \r\n  */\n\n  remove(index) {\n    if (index < 0 || index > this.length) return false;\n    if (index == 0) {\n      this.shift();\n      return true;\n    }\n    if (index == this.length - 1) {\n      this.pop();\n      return true;\n    }\n    let leftNode = this.get(index - 1);\n    console.log(leftNode, index);\n    leftNode.next = leftNode.next.next;\n    --this.length;\n    return true;\n  }\n\n  /* reverse \r\n  1. swap the head and tail\r\n  2. create a variable called next and prev\r\n  3. create a value called node and initialize it to the head property \r\n  4. loop through the list \r\n  5. set next to the next property to whatever node is \r\n  6. set the next property on the node to be whatever prev i \r\n  7. set the prev to be the vale of the node variable \r\n  8. set the node variable to be the be the next variable\r\n  */\n\n  reverse() {\n    let node = this.head;\n    let current;\n    let next = null;\n    let tail = this.tail;\n    this.head = node;\n    this.tail = tail;\n    while (this.next) {\n      let node = this.head;\n      let current,\n        next = null;\n      this.head = this.tail;\n      this.tail = node;\n      while (node.next) {\n        current = node.next;\n        node.next = next;\n        current = node.next;\n        next = node;\n      }\n      return this;\n    }\n  }\n  log() {\n    let arr = [];\n    for (let i = 0; i < this.length; i++) {\n      arr.push(this.get(i).value);\n    }\n    return arr;\n  }\n}\nexports["default"] = Singlylinkedlist;\nlet singly_list = new Singlylinkedlist();\nsingly_list.push(1);\nsingly_list.push(2);\nsingly_list.push(3);\nsingly_list.push(4);\n\n// let node = this.head;\n//    let next,prev=null\n//    this.head = this.tail;\n//    this.tail = node\n//    for(let i=0;i<this.length;i++){\n//         next = node.next;\n//         node.next = prev;\n//         prev = node;\n//         node = next;\n//    }\n//    return this;\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/index.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/addTwoNumbers.js':
            /*!*******************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/addTwoNumbers.js ***!
  \*******************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/addTwoNumbers.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/cycle1.js':
            /*!************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/cycle1.js ***!
  \************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/cycle1.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/cycle2.js':
            /*!************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/cycle2.js ***!
  \************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/cycle2.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/deleteNode.js':
            /*!****************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/deleteNode.js ***!
  \****************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/deleteNode.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/deps.js':
            /*!**********************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/deps.js ***!
  \**********************************************************/
            /***/ (
                __unused_webpack_module,
                __unused_webpack_exports,
                __webpack_require__
            ) => {
                eval(
                    '\n\n__webpack_require__(/*! ./middleNumber */ "./src/linkedlist/singlylinkedlist/problems/middleNumber.js");\n__webpack_require__(/*! ./addTwoNumbers */ "./src/linkedlist/singlylinkedlist/problems/addTwoNumbers.js");\n__webpack_require__(/*! ./cycle1 */ "./src/linkedlist/singlylinkedlist/problems/cycle1.js");\n__webpack_require__(/*! ./cycle2 */ "./src/linkedlist/singlylinkedlist/problems/cycle2.js");\n__webpack_require__(/*! ./deleteNode */ "./src/linkedlist/singlylinkedlist/problems/deleteNode.js");\n__webpack_require__(/*! ./duplicteNumber */ "./src/linkedlist/singlylinkedlist/problems/duplicteNumber.js");\n__webpack_require__(/*! ./happyNumner */ "./src/linkedlist/singlylinkedlist/problems/happyNumner.js");\n__webpack_require__(/*! ./mergeSortedList */ "./src/linkedlist/singlylinkedlist/problems/mergeSortedList.js");\n__webpack_require__(/*! ./palindrome */ "./src/linkedlist/singlylinkedlist/problems/palindrome.js");\n__webpack_require__(/*! ./removeDuplicate */ "./src/linkedlist/singlylinkedlist/problems/removeDuplicate.js");\n__webpack_require__(/*! ./removeElements */ "./src/linkedlist/singlylinkedlist/problems/removeElements.js");\n__webpack_require__(/*! ./removeNthNode */ "./src/linkedlist/singlylinkedlist/problems/removeNthNode.js");\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/deps.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/duplicteNumber.js':
            /*!********************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/duplicteNumber.js ***!
  \********************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/duplicteNumber.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/happyNumner.js':
            /*!*****************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/happyNumner.js ***!
  \*****************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/happyNumner.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/mergeSortedList.js':
            /*!*********************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/mergeSortedList.js ***!
  \*********************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/mergeSortedList.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/middleNumber.js':
            /*!******************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/middleNumber.js ***!
  \******************************************************************/
            /***/ (
                __unused_webpack_module,
                __unused_webpack_exports,
                __webpack_require__
            ) => {
                eval(
                    '\n\nvar _ = __webpack_require__(/*! .. */ "./src/linkedlist/singlylinkedlist/index.js");\nvar _2 = _interopRequireDefault(_);\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nlet sl = new _2.default();\nsl.push(1);\nsl.push(2);\nsl.push(3);\nsl.push(4);\nconsole.log("middle number", sl);\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/middleNumber.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/palindrome.js':
            /*!****************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/palindrome.js ***!
  \****************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/palindrome.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/removeDuplicate.js':
            /*!*********************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/removeDuplicate.js ***!
  \*********************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/removeDuplicate.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/removeElements.js':
            /*!********************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/removeElements.js ***!
  \********************************************************************/
            /***/ () => {
                eval(
                    '\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/removeElements.js?'
                );

                /***/
            },

        /***/ './src/linkedlist/singlylinkedlist/problems/removeNthNode.js':
            /*!*******************************************************************!*\
  !*** ./src/linkedlist/singlylinkedlist/problems/removeNthNode.js ***!
  \*******************************************************************/
            /***/ () => {
                eval(
                    '\n\nconsole.log("remove nth node");\n\n//# sourceURL=webpack://data-structures/./src/linkedlist/singlylinkedlist/problems/removeNthNode.js?'
                );

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
            module,
            module.exports,
            __webpack_require__
        );
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__('./src/index.js');
    /******/
    /******/
})();
