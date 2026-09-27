// GDSS Nasarawa Burkullu Website

document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to GDSS Nasarawa Burkullu Website");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Current year in footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile menu
    const menuButton = document.getElementById("menu-button");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }

});