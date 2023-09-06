//----------------------------->| Q.1 |<---------------------------------
(() => {
  function moveTargetToEnd(arr, target) {
    let targetAggregator = [];
    let aggregator = [];
    for (var i of arr) {
      if (i == target) targetAggregator.push(i);
      else aggregator.push(i);
    }
    return new Promise((resolve, reject) =>
      resolve([...aggregator, ...targetAggregator])
    );
  }

  const inputArray = [1, 0, 0, 1, 2, 0, 3];
  target = 0;
  moveTargetToEnd(inputArray, 0).then((result) => {
    console.log("1√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.2 |<---------------------------------
(() => {
  function secondLargestNumberInArray(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (var ele of arr) {
      if (ele > largest) {
        secondLargest = largest;
        largest = ele;
      } else {
        secondLargest = Math.max(secondLargest, ele);
      }
    }
    return new Promise((resolve) => resolve(secondLargest));
  }
  secondLargestNumberInArray([1, 7, 4, 54, 34, 51, 55]).then((result) => {
    console.log("2√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.3 |<---------------------------------
(() => {
  function missingNumber(arr, n) {
    let sum = (n * (n + 1)) / 2;
    for (var ele of arr) {
      sum -= ele;
    }
    return new Promise((resolve) => resolve(sum));
  }

  missingNumber([1, 2, 3, 5, 6], 6).then((result) => {
    console.log("3√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.4 |<---------------------------------
(() => {
  function havingDuplicates(arr) {
    const store = {};
    for (var ele of arr) {
      if (store[ele]) {
        return new Promise((resolve) => resolve(true));
      }
      store[ele] = 1;
    }
    return new Promise((resolve) => resolve(false));
  }

  havingDuplicates([1, 2, 3, 4, 4, 5, 6]).then((result) => {
    console.log("4√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.5 |<---------------------------------
(() => {
  function minMaxNumber(arr) {
    let min = Infinity;
    let max = -Infinity;
    for (var ele of arr) {
      min = Math.min(min, ele);
      max = Math.max(max, ele);
    }
    return new Promise((resolve) => resolve({ min, max }));
  }

  minMaxNumber([3, 4, 45, 5, 6]).then((result) => {
    console.log("5√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.6 |<---------------------------------
(() => {
  function PairOfNumberEqualToGivenNumber(arr, n) {
    let pointer = 0;
    let checker = 1;
    let pair = [];
    let container = [];
    while (pointer < arr.length - 1) {
      if (arr[pointer] + arr[checker] == n) {
        pair = [arr[pointer], arr[checker]];
      }
      checker++;
      if (checker == arr.length) {
        pair.length && container.push(pair);
        pair = [];
        pointer = pointer + 1;
        checker = pointer + 1;
      }
    }
    return new Promise((resolve) => resolve(container));
  }

  PairOfNumberEqualToGivenNumber([1, 2, 3, 4, 5, 6], 6).then((result) => {
    console.log("6√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.7 |<---------------------------------
(() => {
  function removeDuplicates(arr) {
    let store = {};
    let clean = [];
    for (var ele of arr) {
      if (!store[ele]) {
        clean.push(ele);
        store[ele] = 1;
      }
    }
    return new Promise((resolve) => resolve(clean));
  }

  removeDuplicates([1, 2, 3, 3, 3, 4, 5, 6]).then((result) => {
    console.log("7√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.8 |<---------------------------------
(() => {
  let OPTION = { START: "START", END: "END" };
  function rotateArray(arr, n, option) {
    if (option == OPTION.END) {
      for (var i = 0; i < n; i++) {
        let pop = arr.pop();
        arr.unshift(pop);
      }
    }
    if (option == OPTION.START) {
      for (var i = 0; i < n; i++) {
        let pop = arr.shift();
        arr.push(pop);
      }
    }
    return new Promise((resolve) => resolve(arr));
  }

  rotateArray([1, 2, 3, 4, 5, 6], 2, OPTION.START).then((result) => {
    console.log("8√↦", result);
    console.log(" ");
  });
})();

//----------------------------->| Q.9 |<---------------------------------
(() => {
  Array.prototype.customFilter = function (cb) {
    let clean = [];
    for (var el of this) {
      let condition = cb(el);
      condition && clean.push(el);
    }
    return new Promise((resolve) => resolve(clean));
  };
  [1, 2, 3, 4, 5, 6, 2, 3, 2]
    .customFilter((p) => p != 2)
    .then((result) => {
      console.log("9√↦", result);
      console.log(" ");
    });
})();
