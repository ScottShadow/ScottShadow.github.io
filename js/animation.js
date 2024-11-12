/* // animations.js

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation for sections using Intersection Observer
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
      },
    });
  });

  // Project cards hover effect
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
}); */


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // General animation for each .section as it scrolls into view
  const sections = document.querySelectorAll(".section");
  const timeline = gsap.timeline();
  sections.forEach((section) => {
    timeline.from(section, {
      opacity: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Starts animation when the section hits 80% of the viewport
        toggleActions: "play pause resume reverse", // Plays the animation on scroll
      },
    });
  });
});

/*   // Specific animations for targeted elements
  // Header section animations
  gsap.from("#header h1", {
    opacity: 0,
    y: -20,
    duration: 1,
    scrollTrigger: {
      trigger: "#header",
      start: "top 90%",
    },
  });

  gsap.from("#header p", {
    opacity: 0,
    y: -10,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#header",
      start: "top 90%",
    },
  });

  // About section animations
  gsap.from("#about h2", {
    opacity: 0,
    x: -30,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  gsap.from("#about p", {
    opacity: 0,
    x: 30,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });
});
 */
