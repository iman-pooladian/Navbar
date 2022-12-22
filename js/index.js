const toggleBtn = document.querySelector(".toggle-box");
const toggleIcon = document.querySelector(".toggle-btn")
const nav = document.querySelector("ul");

toggleBtn.addEventListener("click",function(){
    nav.classList.toggle("open-nav")
    toggleIcon.classList.toggle("open")
})