const bars = document.getElementById("barsBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.querySelector(".overlay");
const navBars = document.querySelector(".header__container--navbarRight");

function handleNav(){
    overlay.classList.toggle("active");
    navBars.classList.toggle("active");
}

bars.onclick = function(){
    handleNav();
}

overlay.onclick = function(){
    handleNav();
}

closeBtn.onclick = function(){
    handleNav();
}