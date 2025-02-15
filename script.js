document.addEventListener("DOMContentLoaded", function () {
    // Hide loader after page loads
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 500); // Delay for smooth transition

    // Add event listener to all navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate navigation
            
            let href = this.href;
            document.getElementById("loader").classList.remove("hidden"); // Show loader
            
            setTimeout(() => {
                window.location.href = href; // Navigate after delay
            }, 500); // Adjust delay as needed
        });
    });
});
