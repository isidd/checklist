// setImmediate(() => console.log("this is setImmediate"));
// setTimeout(() => console.log("this is setTimeout"), 0);

let a = () => {
  const mr = "Siddhartha";
  const miss = "Arunima";
  function us() {
    console.log(mr + miss);
  }
  us();
  return {
    both: () => mr + " " + miss,
  };
};

console.log(a.us());
