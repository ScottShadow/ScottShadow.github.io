document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(CustomEase, EasePack); // Use EasePack for RoughEase

  // Select the target element
  const target = document.querySelector(".box");
  const target2 = document.querySelector(".box2");
  const target3 = document.querySelector(".heading1");
  const timeline = gsap.timeline();

  timeline.to(target, {
    duration: 2.5,
    ease: CustomEase.create("custom", "M0,0 C0.14,0 0.181,1.125 0.2,1 0.372,-0.142 0.392,0.963 0.4,1 0.408,0.985 0.434,0.685 0.475,0.623 0.53,0.538 0.59,0.993 0.597,1.01 0.659,0.926 0.613,0.65 0.755,0.737 0.775,0.749 0.816,1.151 0.869,0.949 0.88,0.945 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 "),
    y: 200
  });

  const target2Animation = gsap.to(target2, {
    duration: 2.5,
    ease: "rough({template: none.inOut,strength: 2,points: 50,taper: both,randomize: false,clamp: false})",
    scale: 5
  }, ">-2");

  target2Animation.then(() => {
    target2Animation.timeScale(2);
    target2Animation.reverse();
  });

  const heading1Animation = gsap.from(target3, {
    duration: 5,
    ease: "expo.inOut",
    rotation: 180,
  })

  heading1Animation.then(() => {
    heading1Animation.restart();
  });
});
