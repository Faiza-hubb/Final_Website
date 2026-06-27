// Function to handle the scroll reveal animation
function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // triggers when 100px of element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Attach listener to scroll event
window.addEventListener('scroll', revealOnScroll);

// Trigger once on load to catch elements already in view
revealOnScroll();