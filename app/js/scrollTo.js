import jump from '/node_modules/jump.js/dist/jump.module.js'

var workBtn = document.querySelectorAll('.work-btn');
var contactBtn = document.querySelectorAll(".contact-btn");
var home = document.querySelectorAll(".home-btn")

workBtn.forEach(btn => btn.addEventListener('click', () => {
    jump('#project-page')
}));    

contactBtn.forEach(btn => 
    btn.addEventListener('click', () => {
    jump('#contact-page', {
        duration: 1500,
    });
}));

home.forEach(btn => btn.addEventListener('click', () => {
    jump('#hero-page')
}))