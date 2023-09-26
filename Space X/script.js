const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

// CLASS INSERTS
function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

// STATS COUNTER RESET
function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 85 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 85 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

// STAT COUNTER INCREMENTS
function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");

      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
