const scroll = new LocomotiveScroll({
  el: document.querySelector("#main-container"),
  smooth: true,
});

// function mouseMoverCircle() {
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector(
//       "#minicircle"
//     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//   });
// }

// function firstPageAnim() {
//   var tl = gsap.timeline();

//   tl.from("#nav", {
//     y: "-10",
//     opacity: 0,
//     duration: 1.5,
//     ease: Expo.easeInOut,
//   })
//     .to(".bElem", {
//       y: 0,
//       ease: Expo.easeInOut,
//       duration: 2,
//       delay: -1,
//       stagger: 0.2,
//     })
//     .from("#heroooter", {
//       y: -10,
//       opacity: 0,
//       duration: 1.5,
//       delay: -1,
//       ease: Expo.easeInOut,
//     });
// }

mouseMoverCircle();
// firstPageAnim();
