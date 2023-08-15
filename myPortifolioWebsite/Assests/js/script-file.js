

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".header-text");
    
    // Add a class to start the animation after a delay
    setTimeout(function() {
        textElement.classList.add("animate-fade-in");
    }, 0); // Delay in milliseconds (e.g., 1000ms = 1 second)
    
    // Remove the class after the animation completes
    textElement.addEventListener("animationend", function() {
        textElement.classList.remove("animate-fade-in");
    });
});
