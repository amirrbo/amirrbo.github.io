let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header-icon-bar");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});