const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-item");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open")
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
    })
})

window.addEventListener("scroll", () => {
    const pageHeight = window.pageYOffset;
    const header = document.querySelector(".header");
    if(pageHeight > 10) {
        header.className = "header fixed";
        document.querySelector(".top").style.display = "block";

    } 
    else {
        document.querySelector(".top").style.display = "none";
        document.querySelector(".header").classList.remove("fixed");

        
    }
})
