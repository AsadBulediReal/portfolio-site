const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      section.target.classList.toggle("show", section.isIntersecting);
    });
  },
  { threshold: 0.4 }
);

allSections.forEach((section) => {
  observer.observe(section);
});
