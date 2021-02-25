let hamBtn = document.getElementById("hamburger");
let overlay = document.querySelector(".overlay")
let menu = document.querySelector(".menu")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("is-active");
    overlay.classList.toggle("hide-overlay")
    menu.classList.toggle("hide-menu")
})