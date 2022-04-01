// Navigationbar scripte
let hamburgerButton = document.querySelector("#hamburgerButton");
let nav = document.querySelector("#nav");

hamburgerButton.addEventListener("click", function () {
  nav.classList.toggle("nav__mobile");
  hamburgerButton.classList.toggle("bi-x-circle");
});

let submenuTrigger = document.querySelector("#submenuTrigger");
let submenuList = document.querySelector("#submenuList");

submenuTrigger.addEventListener("click", function () {
  submenuList.classList.toggle("submenu-active");
});

// AOS settings
AOS.init({
  duration: 800,
  easing: "ease-in-out",
});

// Pure counter settings
new PureCounter({
  selector: ".purecounter",
  duration: 2,
});

// Swiper settings
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Scroll to top button & header resize
let backToTop = document.querySelector("#backToTop");
let header = document.querySelector("#header");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
    backToTop.style.opacity = "1";
    header.style.paddingTop = "10px";
    header.style.paddingBottom = "10px";
  } else {
    backToTop.style.display = "none";
    backToTop.style.opacity = "0";
    header.style.paddingTop = "20px";
    header.style.paddingBottom = "20px";
  }
}
backToTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};
