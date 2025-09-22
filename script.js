//Language Toggle Functions
const langToggle = document.getElementById("langToggle");
const typedTextSpan = document.getElementById("typed-text");

const typedTexts = {
    fr : "« L'éducation est l'arme la plus puissante pour changer le monde. »",
    en : "“Education is the most powerful weapon we can use to change the world.”"
};

let currentLang = 'fr';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    updateLanguage(); 
    if (window.innerWidth > 900) {
        startTypingAnimation();
    } else {
        if (typedTextSpan) typedTextSpan.textContent = typedTexts[currentLang];
    }
});

const updateLanguage = () => {
    const elementsToTranslate = document.querySelectorAll("[data-key]");
    elementsToTranslate.forEach( (e1) => {
        const key = e1.getAttribute("data-key");
        const traductionKey = traduction[currentLang][key];
        if (traductionKey) {
            if (traductionKey.includes("<i")) {
                e1.innerHTML = traductionKey;
            } else {
                e1.textContent = traductionKey;
            }
        }
    });
};

//Typewriter effect
const startTypingAnimation = () => {
    if (typedTextSpan) {
        const txt = typedTexts[currentLang];
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
        type();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 900) {
        startTypingAnimation();
    } else {
        if (typedTextSpan) typedTextSpan.textContent = typedTexts[currentLang];
    }
});

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