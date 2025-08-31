// Shrinking navbar when scrolling down
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

//Scroll-reveal 
const items = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting) {
            el.target.classList.add('show');
        }
    });
}, 
{ threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => items.observe(el));

//Typewriter effect
const typedTextSpan = document.querySelector(".typed-text");
const txt = typedTextSpan.textContent;
typedTextSpan.textContent = "";
let charIndex = 0;
const typingDelay = 100;

function type() {
    if (charIndex < txt.length) {
        typedTextSpan.textContent += txt.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
}
document.addEventListener("DOMContentLoaded", type);