document.addEventListener("DOMContentLoaded", function () {
    const titleText = document.querySelectorAll(".title h1, .title p");
    titleText.forEach(element => {
        element.style.transform = "translateY(0)";
        element.style.opacity = "1";
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(element => {
        element.style.transform = "translateX(0)";
    });
});