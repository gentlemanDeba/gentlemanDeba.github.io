const navbar = document.getElementById("navbar");
let timeout;

// Function to hide the navbar
const hideNavbar = () => {
    navbar.classList.add("hidden");
};

// Function to show the navbar
const showNavbar = () => {
    navbar.classList.remove("hidden");
};

// Function to reset the inactivity timer
const resetTimer = () => {
    // Show the navbar on activity
    showNavbar();

    // Clear any existing timeout
    clearTimeout(timeout);

    // Set a new timeout to hide the navbar after 3 seconds
    timeout = setTimeout(hideNavbar(), 3000);
};

// Listen for user activity (mouse, keyboard, touch)
["mousemove", "keydown", "scroll", "touchstart"].forEach((event) => {
    window.addEventListener(event, resetTimer);
});

// Start the timer when the page loads
resetTimer();
