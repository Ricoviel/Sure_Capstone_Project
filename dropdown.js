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