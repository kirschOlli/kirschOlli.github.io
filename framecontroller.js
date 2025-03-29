document.addEventListener('DOMContentLoaded', function () {
    const allLinks = document.querySelectorAll("nav a");
    const links = Array.from(allLinks).slice(0, -1); // Alle außer den letzten Link nehmen
    const contentFrame = document.getElementById("content-frame");
    const introText = document.getElementById("intro-text");
    const images = document.querySelectorAll(".certificates img");

    links.forEach(link => {

        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            contentFrame.src = page;
            introText.style.display = "none";
        });
    });

    images.forEach(img => {
        img.addEventListener("click", function () {
            introText.style.display = "none";
            contentFrame.src = this.getAttribute("data-src");
        });

    });
});
