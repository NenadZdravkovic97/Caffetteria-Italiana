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

// Map
var mymap = L.map("mapid").setView(
    [44.816589820149446, 20.465052431070774],
    13
);

L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
            "pk.eyJ1IjoibmVuYWQ4NTk3IiwiYSI6ImNrcmRkdTI3ejFwMHMycHA4NTFkN2NrcDEifQ.W7rEKAspJrs1DmhMErbjXQ",
    }
).addTo(mymap);

var marker = L.marker([44.816589820149446, 20.465052431070774]).addTo(mymap);

marker.bindPopup("Булевар деспота Стефана 26-30, Београд.").openPopup();
