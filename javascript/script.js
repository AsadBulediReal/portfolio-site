const allSections = document.querySelectorAll("section");
const hamburgerMenue = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      section.target.classList.toggle("show", section.isIntersecting);
    });
  },
  { threshold: 0 }
);

allSections.forEach((section) => {
  observer.observe(section);
});

const onClick = () => {
  hamburgerMenue.classList.toggle("active");
  navList.classList.toggle("active");
};

hamburgerMenue.addEventListener("click", onClick);

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", onClick);
});
