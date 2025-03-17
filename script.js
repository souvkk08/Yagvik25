document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("preloader");
    if (loader) {
        window.addEventListener("load", function () {
            loader.classList.add("hide");
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        });
    }

    const eventDate = new Date("March 27, 2025 10:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "🎉 Event Started!";
            countdownElement.style.color = "#FFD700";
            countdownElement.style.transition = "opacity 1s ease-in-out";
            countdownElement.style.opacity = "1";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    const menuButton = document.getElementById("menu-btn");
    const popupMenu = document.getElementById("popup-menu");
    const closeButton = document.getElementById("close-btn");

    if (menuButton && popupMenu && closeButton) {
        menuButton.addEventListener("click", function () {
            popupMenu.classList.add("active");
            popupMenu.setAttribute("aria-hidden", "false");
        });

        closeButton.addEventListener("click", function () {
            popupMenu.classList.remove("active");
            popupMenu.setAttribute("aria-hidden", "true");
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && popupMenu.classList.contains("active")) {
                popupMenu.classList.remove("active");
                popupMenu.setAttribute("aria-hidden", "true");
            }
        });

        document.addEventListener("click", function (event) {
            if (!popupMenu.contains(event.target) && popupMenu.classList.contains("active") && event.target !== menuButton) {
                popupMenu.classList.remove("active");
                popupMenu.setAttribute("aria-hidden", "true");
            }
        });

        popupMenu.querySelector(".popup-content").addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
});
