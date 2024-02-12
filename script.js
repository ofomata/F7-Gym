//Menu Toggle

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active-nav");
});

//Button Toggle

const buttonOne = document.querySelector(".btn1");
const buttonTwo = document.querySelector(".btn2");
const contentOne = document.querySelector(".content1");
const contentTwo = document.querySelector(".content2");

if (window.location.pathname === "/index.html") {
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
}

//CountDown

if (window.location.pathname === "/about.html") {
const countDown = new Date("Feb 02, 2024 00:00:00").getTime();
const x = setInterval(function(){
    const now = new Date().getTime();
    const distance = now - countDown;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    /* if(distance < 0){
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    } */

},1000);
}