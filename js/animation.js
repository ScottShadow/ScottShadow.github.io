document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const languages = ["Hello", "Muraho", "Hallo", "Bonjour", "Habari", "Hello"];
  var index = 1;
  const turn_bg = gsap.to(".page-wrapper", {
    backgroundColor: "#ffe4c4",
  })
  const greetingsAnimation = gsap.timeline({ paused: true });
  greetingsAnimation.from(".greetings", {
    duration: 1,
    opacity: 0,
    x: -1000,
    y: -500,
    rotation: -90,
    ease: "none",
  }).to(".greetings", {
    duration: 0.5,
    fontSize: "20px",
    top: "1vh",
    ease: "none"
  }).to(".greetings", {
    duration: 0.2,
    borderRadius: "30px",
    padding: "10px",
    margin: "0px 0px 0px 0px",
    backgroundColor: "black",
    /* containerAnimation: turn_bg, */
    ease: "none"
  });
  const helloAnimation = gsap.timeline({
    paused: true,
    repeatDelay: 0,
    repeat: -1,
    defaults: { ease: "none" },
  });
  languages.forEach((text) => {
    helloAnimation.to("#hello-word", { text: text }, "+=0.4");
  });
  ScrollTrigger.create({
    trigger: ".hero", // Set the trigger element
    start: "20% 20%", // Start animation when .greetings reaches this position
    end: "80% top", // Define the endpoint (optional)
    markers: true, // Debug markers for scroll positions
    scrub: true,
    animation: greetingsAnimation,
    onLeave: () => { helloAnimation.play(); console.log("animation starting") },
    onEnterBack: () => {
      helloAnimation.pause();
      console.log("animation stopping");
      gsap.to("#hello-word", { text: "Hello" });
    }
    /* onEnter: () => greetingsAnimation.play(), // Play the timeline on scroll entry
    onLeaveBack: () => greetingsAnimation.reverse(), // Reverse if scrolling back up */
  });

  const intro = gsap.timeline({
    paused: false,
  })

  intro.from(".one", {
    opacity: 0,
    x: 500,
    duration: 1,
  }, 0).to(".instr", {
    opacity: 0,
    duration: 1,
  }).to(".one", {
    delay: 1,
    opacity: 0,
    y: -300,
    duration: 1,
  }, "<-1").from(".two", {
    opacity: 0,
    y: 500,
    duration: 1,
  }, "+=0").to(".two", {
    delay: 1,
    opacity: 0,
    x: 500,
    duration: 1
  }).from(".three", {
    opacity: 0,
    y: 500,
    duration: 1,
  }, "+=0").to(".three", {
    delay: 0.5,
    opacity: 0,
    duration: 1
  }).from(".coming", {
    opacity: 0,
  }, "+=0").from(".egg", {
    opacity: 0,
    scale: 5,
    duration: 1.4,
  }).to(".egg", {
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".end",
    start: "top top",
    markers: true,
    id: "intro_marker",
    animation: intro,
    onEnter: () => intro.play(),
    onLeaveBack: () => {
      intro.pause();
      intro.seek(0);
    }

  })


});
