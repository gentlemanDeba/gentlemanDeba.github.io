const navbar = document.getElementById("navbar");
let timeout;

const hideNavbar = () => {
    navbar.classList.add("hidden");
};

const showNavbar = () => {
    navbar.classList.remove("hidden");
};

const resetTimer = () => {
    showNavbar();
    clearTimeout(timeout);
    timeout = setTimeout(hideNavbar, 3000);
};

["mousemove", "keydown", "scroll", "touchstart"].forEach((event) => {
    window.addEventListener(event, resetTimer);
});
resetTimer();


const sidebar = document.querySelector(".nav-sidebar")
const navbarButton = document.getElementById("navbarOpener")

navbarButton.addEventListener('click', (event) => {
    // Prevent the event from propagating to the document listener
    event.stopPropagation();

    // Toggle the sidebar and button rotation
    sidebar.classList.toggle("visible");
    navbarButton.classList.toggle("rotate");
});

// Close the sidebar if clicking anywhere else on the document
document.addEventListener('click', () => {

    if (sidebar.classList.contains("visible")) {
        sidebar.classList.remove("visible");
        navbarButton.classList.remove("rotate");
    }
});

sidebar.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking inside the sidebar
});
