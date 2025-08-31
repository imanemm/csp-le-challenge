// Shrinking navbar when scrolling down
if (window.innerWidth > 900) {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    });
}

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
if (window.innerWidth > 900) {
    const typedTextSpan = document.querySelector(".typed-text");
    if (typedTextSpan) {
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
    }
}

// Navbar toggle for mobile view
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');

  // swap icons
  navToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});