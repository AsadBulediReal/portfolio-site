const cssRoot = document.documentElement;
const btnLists = document.querySelectorAll(".btn");
const textEffectElement = document.querySelector("#text-effect");
const cursor = document.querySelector("#cursor");
const homeSection = document.querySelector("#about");
const scrollBar = document.querySelector("#progressBar");
const serviceSectionCards = document.querySelectorAll("#service-container div");

// scroll Effect

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let progress = (window.scrollY / totalHeight) * 100;
  scrollBar.style.height = progress + "%";
};

// Nav Bar Effect

btnLists.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".color")?.classList.remove("color");
    document.querySelector(".underline")?.classList.remove("underline");
    btn.classList.add("color");
    btn.classList.add("underline");
  });
});

// Text Effect

const textEffect = () => {
  setTimeout(function () {
    let word = "Frontend Developer";
    textEffectElement.innerHTML = word;
    let elementLength = textEffectElement.getBoundingClientRect().width + 10;
    cssRoot.style.setProperty("--word-element-length", elementLength + "px");
    cssRoot.style.setProperty("--word-length", word.length);
  }, 0);
  setTimeout(function () {
    let word = "Backend Developer";
    textEffectElement.innerHTML = word;
    let elementLength = textEffectElement.getBoundingClientRect().width + 10;

    cssRoot.style.setProperty("--word-element-length", elementLength + "px");
    cssRoot.style.setProperty("--word-length", word.length);
  }, 4000);
  setTimeout(function () {
    let word = "Graphic Designer";
    textEffectElement.innerHTML = word;
    let elementLength = textEffectElement.getBoundingClientRect().width + 10;

    cssRoot.style.setProperty("--word-element-length", elementLength + "px");
    cssRoot.style.setProperty("--word-length", word.length);
  }, 8000);

  setTimeout(function () {
    let word = "Freelancer";
    textEffectElement.innerHTML = word;
    let elementLength = textEffectElement.getBoundingClientRect().width + 10;

    cssRoot.style.setProperty("--word-element-length", elementLength + "px");
    cssRoot.style.setProperty("--word-length", word.length);
  }, 12000);

  setTimeout(function () {
    let word = "Video Editor";
    textEffectElement.innerHTML = word;
    let elementLength = textEffectElement.getBoundingClientRect().width + 10;

    cssRoot.style.setProperty("--word-element-length", elementLength + "px");
    cssRoot.style.setProperty("--word-length", word.length);
  }, 16000);
};

textEffect();
setInterval(textEffect, 20000);

// On Hover Disable Any Effect

serviceSectionCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("on-hover-hide-effect");
  });
  card.addEventListener("mouseleave", () => {
    setTimeout(() => {
      card.classList.remove("on-hover-hide-effect");
    }, 700);
  });
});

// Mouse Effect

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor.style.width = event.target.offsetHeight + 30 + "px";
  cursor.style.height = event.target.offsetHeight + 30 + "px";
  cursor.style.mixBlendMode = "difference";
  if (event.target.classList.contains("mouse-e")) {
    cursor.style.width = 50 + "px";
    cursor.style.height = 50 + "px";
    return;
  }
  if (event.target.localName === "img") {
    cursor.style.mixBlendMode = "overlay";
  }
});

serviceSectionCards.forEach((card) => {
  let borderWidth = 0;
  card.addEventListener("mouseenter", () => {
    function animateBorder() {
      borderWidth += 1; // Increment the border width
      card.style.borderWidth = `${borderWidth}px`;
      card.style.borderRadius = "20px";

      if (borderWidth >= 10) {
        clearInterval(animationInterval); // Stop the animation when the desired width is reached
      }
    }
    const animationInterval = setInterval(animateBorder, 1); // Run the animation every 10 milliseconds
  });
  card.addEventListener("mouseleave", () => {
    function animateBorder() {
      borderWidth -= 1; // Decrement the border width
      card.style.borderWidth = `${borderWidth}px`;
      card.style.borderRadius = "10px";
      if (borderWidth === 0) {
        clearInterval(animationInterval); // Stop the animation when the desired width is reached
      }
    }
    const animationInterval = setInterval(animateBorder, 10); // Run the animation every 10 milliseconds
  });
});
