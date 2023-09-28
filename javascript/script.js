const allSections = document.querySelectorAll("section");
const hamburgerMenue = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      section.target.classList.toggle("show", section.isIntersecting);
    });
  },
  { threshold: 0.2 }
);

allSections.forEach((section) => {
  if (window.innerWidth < 750) {
    section.classList.add("show");
  } else {
    observer.observe(section);
  }
});

const onClick = () => {
  hamburgerMenue.classList.toggle("active");
  navList.classList.toggle("active");
};

hamburgerMenue.addEventListener("click", onClick);

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", onClick);
});

// Get the container element
const container = document.getElementById("bubble-container");

// Set the container dimensions to match the viewport size

// Create an array to store the bubbles
const bubbles = [];

// Create a function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Create a Bubble class
class Bubble {
  constructor(x, y, radius, speed) {
    this.element = document.createElement("div");
    this.element.className = "bubble";
    this.element.style.width = radius * 2 + "px";
    this.element.style.height = radius * 2 + "px";
    this.element.style.left = x - radius + "px";
    this.element.style.top = y - radius + "px";
    this.radius = radius;
    this.speed = speed;
    container.appendChild(this.element);

    this.element.addEventListener("click", () => {
      this.pop();
    });
  }

  update() {
    this.element.style.top =
      parseInt(this.element.style.top) - this.speed + "px";
  }

  pop() {
    const explosion = document.createElement("div");
    this.element.classList.add("pop");
    explosion.classList.add("explosion");
    this.element.appendChild(explosion);

    // Add a class to trigger the click animation
    this.element.classList.add("clicked");
    setTimeout(() => {
      if (container.contains(this.element)) {
        container.removeChild(this.element);
        bubbles.splice(bubbles.indexOf(this), 1);
      }
    }, 500);
  }
}

// Create a function to animate the bubbles
function animate() {
  bubbles.forEach((bubble) => {
    bubble.update();

    if (parseInt(bubble.element.style.top) + bubble.radius * 2 < 0) {
      bubble.pop();
    }
  });

  requestAnimationFrame(animate);
}

// Create a function to handle mouse clicks
function handleClick(event) {
  const mouseX = event.clientX;

  const mouseY = event.clientY;
  bubbles.forEach((bubble) => {
    const rect = bubble.element.getBoundingClientRect();
    const bubbleX = rect.left + bubble.radius;
    const bubbleY = rect.top + bubble.radius;
    const dx = bubbleX - mouseX;
    const dy = bubbleY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bubble.radius) {
      bubble.pop();
    }
  });
}

// Attach the click event listener to the document
document.addEventListener("click", handleClick);

// Start the animation
animate();

// Create bubbles every 1 second if there are less than 10 bubbles

const createBubble = () => {
  const x = getRandomNumber(0, container.offsetWidth);
  const y = document.body.scrollHeight + 140;
  const radius = getRandomNumber(35, 55); // Increase the range for bigger bubbles
  const speed = getRandomNumber(1, 3);
  const bubble = new Bubble(x, y, radius, speed);
  bubbles.push(bubble);
};

setInterval(() => {
  if (window.innerWidth < 750 && bubbles.length <= 8) {
    createBubble();
  } else if (window.innerWidth > 750 && bubbles.length <= 16) {
    createBubble();
  }
}, 2000);
