let backToTopBtn = document.getElementById('back-top');
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.transform = "scale(1)";
    } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            if (window.scrollY <= 200) {
                backToTopBtn.style.display = "none";
            }
        }, 1000);
    }
});

backToTopBtn.addEventListener("click", function () {
    let position = window.scrollY;
    let speed = 70;

    let scrollInterval = setInterval(() => {
        if (position > 0) {
            position -= speed;
            window.scrollTo(0, position);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
});
