const target = document.querySelectorAll("img");
console.log(target);

// Problem with this approach is it will wait for scroll event to take place and is very efficient as until
// we keep scrolling up and down it will keep calling the function
// window.addEventListener("scroll", (event) => {
//   target.forEach((img) => {
//     console.log("😍");
//     const rect = img.getBoundingClientRect().top;
//     if (rect <= window.innerHeight) {
//       const src = img.getAttribute("data-src");
//       console.log(src);
//       img.setAttribute("src", src);
//       img.classList.add("fade");
//     }
//   });
// });

// using intersectionObserver API
const lazyLoadImg = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);
        img.classList.add("fade");

        observer.disconnect();
      }
    });
  });
  io.observe(target);
  //   const io = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const img = entry.target;
  //         const src = img.getAttribute("data-src");
  //         img.setAttribute("src", src);
  //         img.classList.add("fade");
  //         observer.disconnect();
  //       }
  //     });
  //   });
  //   io.observe(target);
};

target.forEach(lazyLoadImg);
