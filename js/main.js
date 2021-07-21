let menuBtn = document.querySelector("#menu-btn");
let navDiv = document.querySelector("#nav");
let navItems = document.querySelector("#nav-items");

menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    if (
        navDiv.classList.contains("active") &&
        navItems.classList.contains("active")
    ) {
        navDiv.classList.remove("active");
        navItems.classList.remove("active");
    } else {
        navDiv.classList.add("active");
        navItems.classList.add("active");
    }
});

// Sticky nav
window.addEventListener("scroll", (e) => {
    let main = document.querySelector(".main-nav");
    let landingPage = document.querySelector(".video-container");
    let landingHeight = landingPage.offsetHeight;
    let scrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
        if (scrollPos > landingHeight) {
            main.classList.add("sticky");
        } else {
            main.classList.remove("sticky");
        }
    });
});
