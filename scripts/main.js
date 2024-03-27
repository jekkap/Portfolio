
const hamMenu = document.getElementById("hamburgerMenu");
const offMenu = document.getElementById("offMenu");
const home = document.getElementById("closeMenuHome");
const skills = document.getElementById("closeMenuSkills");
const myWork = document.getElementById("closeMenuMyWork");

hamMenu.addEventListener("click", (e) => {
    offMenu.classList.add("hamburgerMenu");
    offMenu.classList.toggle("active");
})

home.addEventListener("click", (e) => {
    offMenu.classList.remove("active");
})

skills.addEventListener("click", (e) => {
    offMenu.classList.remove("active");
})

myWork.addEventListener("click", (e) => {
    offMenu.classList.remove("active");
})