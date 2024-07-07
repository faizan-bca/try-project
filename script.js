// gsap code
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".flag", {
        duration: 1,
        x: -530,
        opacity: 0,
        stagger: 0.5, // Stagger the animations
        scrollTrigger: {
            trigger: ".flag", // Element to trigger the animation
            start: "top 80%", // Start point of the trigger
            end: "bottom center", // End point of the trigger
            scrub: true // Smoothly animates the position as you scroll
        }
    });
});

// resopnsive
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// main page js
  var myCarousel = document.querySelector('.carousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
  });
  
// Read More Button toggle
function toggleContent(button) {
    const parentSection = button.closest('.section');
    const dots = parentSection.querySelector(".dots");
    const moreContent = parentSection.querySelector(".more-content");
    const buttonText = button.textContent;

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.textContent = "Read more";
        moreContent.style.display = "none";
    } else {
        dots.style.display = "none";
        button.textContent = "Read less";
        moreContent.style.display = "inline";
    }
}
function toggleContent(button) {
    const parentSection = button.closest('.section');
    const dots = parentSection.querySelector(".dots");
    const moreContent = parentSection.querySelector(".more-content");
    const buttonText = button.textContent;

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.textContent = "Read more";
        moreContent.style.display = "none";
    } else {
        dots.style.display = "none";
        button.textContent = "Read less";
        moreContent.style.display = "inline";
    }
}