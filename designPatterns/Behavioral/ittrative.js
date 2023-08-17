/*
    Iterative design pattern 
        - It is a design pattern which allow us to traverse through the collection of objects 
        - When we loop over the array of item => it is the iterator pattern
        - This is a pull based pattern
 */

const bucket = ["apple", "banana", "orange"];
for (var i of bucket) {
  console.log(i);
}

// Range method
function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { done: false, value: start };
      }
      return { done: true, value: end };
    },
  };
}

for (var i of range(0, 100, 5)) {
  console.log(i);
}
