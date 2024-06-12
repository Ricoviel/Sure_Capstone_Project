document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');

    burger.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});

const swiper = new Swiper(".mySwiper",{
    loop: true,
centeredSlides: true,
autoplay: {
    delay: 2000,
    disabledonINteraction: false,
},
breakpoints: {
    0: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 1,
    },
    1024: {
        slidesPerView: 1,
    },
},
});

// Dropdown
document.getElementById("user-icon").addEventListener("click", function(event) {
    event.preventDefault();
    const dropdown = document.getElementById("user-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", function(event) {
    if (!event.target.matches('#user-icon, #user-icon *')) {
        const dropdown = document.getElementById("user-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
});