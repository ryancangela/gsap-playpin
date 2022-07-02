// testing out gsap
gsap.registerPlugin(ScrollTrigger);

// Hero to first section breaker
gsap.to("#hero-one", {
  yPercent: 90,
  //rotation: 300*1,
  scrollTrigger: {
    markers: false,
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
    markers: false,
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
  yPercent: -25,
  scrollTrigger: {
    markers: false,
    trigger: "#three",
    pin: false,
    start: "-=0",
    end: "+=600",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// Icon Shuffle shift - evens
gsap.to(".icon-row-even", {
  xPercent: 150,
  yPercent: 800,
  scale: 1.15,
  scrollTrigger: {
    markers: false,
    trigger: ".icon-row-odd",
    pin: false,
    start: "-=800",
    end: "+=1300",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});
// Icon Shuffle shift - evens
gsap.to(".icon-row-odd", {
  xPercent: -150,
  yPercent: 800,
  scale: 1.15,
  scrollTrigger: {
    markers: false,
    trigger: ".icon-row-even",
    pin: false,
    start: "-=600",
    end: "+=1300",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// Hero right after icon storm
gsap.to("#hero-four", {
  yPercent: -70,
  scrollTrigger: {
    markers: false,
    trigger: "#hero-three-cut",
    pin: false,
    start: "-=1300",
    end: "+=400",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});

// hero-four > image-grid after icon storm
gsap.to(".img-one", {
  xPercent: 700,
  yPercent: -10,
  rotation: 200 * 1,
  scale: 1.5,
  scrollTrigger: {
    markers: true,
    trigger: ".image-grid",
    pin: false,
    start: "-=400",
    end: "+=800",
    toggleClass: "spread",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});
gsap.to(".img-two", {
  xPercent: -500,
  yPercent: 100,
  rotation: -60 * 1,
  scale: 1.75,
  scrollTrigger: {
    markers: true,
    trigger: ".image-grid",
    pin: false,
    start: "-=400",
    end: "+=800",
    toggleClass: "spread",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});
gsap.to(".img-three", {
  xPercent: 650,
  yPercent: 100,
  rotation: 60 * 2,
  scale: 1.25,
  skew: 20,
  scrollTrigger: {
    markers: true,
    trigger: ".image-grid",
    pin: false,
    start: "-=400",
    end: "+=800",
    toggleClass: "spread",
    scrub: 1,
    // duration: 4,
    toggleActions: "restart play pause restart",
  },
});
gsap.to(".img-nine", {
  xPercent: 800,
  yPercent: -250,
  rotation: 400 * 2,
  scale: 1.15,

  scrollTrigger: {
    markers: true,
    trigger: ".image-grid",
    pin: false,
    start: "-=400",
    end: "+=800",
    toggleClass: "spread",
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
