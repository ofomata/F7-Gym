//Menu Toggle

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active-nav");
});


const buttonOne = document.querySelector(".btn1");
const buttonTwo = document.querySelector(".btn2");
const contentOne = document.querySelector(".content1");
const contentTwo = document.querySelector(".content2");

buttonOne.addEventListener("click", () => {
    if (contentOne.style.display !== "block") {
        contentOne.style.display = "block";
        contentTwo.style.display = "none";
    }

    buttonOne.classList.add("clicked");
    buttonTwo.classList.remove("clicked");
});

buttonTwo.addEventListener("click", () => {
    if (contentTwo.style.display !== "block") {
        contentTwo.style.display = "block";
        contentOne.style.display = "none";
    }

    buttonTwo.classList.add("clicked");
    buttonOne.classList.remove("clicked");
});
