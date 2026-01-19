gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

// Hero Reveal: Zoom image out while text slides up
tl.to(".hero-bg", { scale: 1, duration: 3, ease: "power2.out" })
  .from(".title", { y: 150, duration: 1.5, ease: "power4.out" }, "-=2.5")
  .from(".subtitle", { opacity: 0, y: 30, duration: 1 }, "-=1.5")
  .from(".booking-card", { scale: 0.9, opacity: 0, duration: 1.5, ease: "expo.out" }, "-=1");

// Heavy Contact Animation (3D Tilt Effect on Scroll)
gsap.from(".heavy-card", {
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
    },
    rotationX: 30,
    opacity: 0,
    y: 100,
    duration: 1.8,
    ease: "expo.out"
});

// Row-by-Row Info Reveal
gsap.from(".info-group", {
    scrollTrigger: {
        trigger: ".heavy-card",
        start: "top 75%",
    },
    x: -30,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out"
});