document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader and show the content
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 1000); // Adjust the time according to your needs
});
