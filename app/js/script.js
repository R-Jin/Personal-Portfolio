let hamBtn = document.getElementById("hamburger");
let overlay = document.querySelector(".overlay")
let menu = document.querySelector(".menu");
let links = document.querySelectorAll(".m-link");

links.forEach(link => link.addEventListener('click', () => {
    hamBtn.classList.toggle("is-active");
    overlay.classList.toggle("hide-overlay")
    menu.classList.toggle("hide-menu")
}));

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("is-active");
    overlay.classList.toggle("hide-overlay")
    menu.classList.toggle("hide-menu")
})
