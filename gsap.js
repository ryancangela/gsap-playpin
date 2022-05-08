gsap.registerPlugin(ScrollTrigger);

gsap.to(".card", {
  xPercent: 60,
  scrollTrigger: {
    markers: true,
    trigger: ".card",
    pin: true,
    start: "-=200",
    end: "+=600",
    scrub: 1,
    // duration: 4,
    toggleClass: "blockDiv",
    toggleActions: "restart play pause restart",
  },
});
