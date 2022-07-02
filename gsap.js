// testing out gsap
gsap.registerPlugin(ScrollTrigger);

// Hero to first section breaker
gsap.to("#hero-one", {
  yPercent: 90,
  //rotation: 300*1,
  scrollTrigger: {
    markers: true,
    trigger: "#hero-one-cut",
    pin: false,
    start: "-=500",
    end: "+=400",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// Hero-Two to first section breaker
gsap.to("#hero-two", {
  yPercent: -20,
  xPercent: 100,
  rotation: 10 * 1,
  scrollTrigger: {
    markers: true,
    ease: "power2",
    trigger: "#hero-one-cut",
    pin: false,
    start: "+=100",
    end: "+=900",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// Hero-Threee to second section breaker
gsap.to("#hero-three", {
  yPercent: -40,
  scrollTrigger: {
    markers: true,
    trigger: "#three",
    pin: false,
    start: "-=0",
    end: "+=600",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// gsap.to("section", {
//   x: 100,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#hero-two-cut",
//     scrub: 1,
//     // duration: 4,
//     toggleActions: "restart play pause restart",
//   },
// });
