document.addEventListener("DOMContentLoaded", () => {
  const sectionContent = document.querySelectorAll(".section > *"); // Selects all direct child elements of .section

  const observerOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px 0px 300px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Unobserve to trigger animation only once
      }
    });
  }, observerOptions);

  sectionContent.forEach((content) => {
    observer.observe(content);
  });
});
