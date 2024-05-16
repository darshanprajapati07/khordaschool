let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
    setTimeout(() => {
        slides[slideIndex - 1].classList.remove("active");
        showSlides();
    }, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    // Define the URLs for each standard
    const urls = {
        "standard1": "https://www.youtube.com/",
        "standard2": "http://www.standard2.com",
        "standard3": "http://www.standard3.com",
        "standard4": "http://www.standard4.com",
        "standard5": "http://www.standard5.com",
        "standard6": "http://www.standard6.com",
        "standard7": "http://www.standard7.com",
        "standard8": "http://www.standard8.com"
    };

    // Add click event listener to each box
    Object.keys(urls).forEach(key => {
        const box = document.getElementById(key);
        box.addEventListener("click", function () {
            // Redirect to the corresponding URL
            window.open(urls[key], "_blank");
        });
    });
});

function openStandard(standard) {
    // Define the URLs for each standard
    const urls = {
        "standard1": "http://www.youtube.com/",
        "standard2": "http://www.standard2.com",
        "standard3": "http://www.standard3.com",
        "standard4": "http://www.standard4.com",
        "standard5": "http://www.standard5.com",
        "standard6": "http://www.standard6.com",
        "standard7": "http://www.standard7.com",
        "standard8": "http://www.standard8.com"
    };

    // Redirect to the corresponding URL
    window.open(urls[standard], "_blank");
}
document.addEventListener("DOMContentLoaded", function() {
    // Top student box element
    const topStudentBox = document.querySelector(".top-student");

    // Function to open another website
    function openWebsite() {
        window.open("C:\Users\ddpra\OneDrive\Desktop\darshan\C++\top.html", "_blank");
    }

    // Event listener for clicking the top student box
    topStudentBox.addEventListener("click", openWebsite);
});
// JavaScript code to scroll to the feedback form
document.addEventListener('DOMContentLoaded', function() {
    var feedbackNavItem = document.querySelector('.menu a[href="#"]');
    var feedbackForm = document.querySelector('.feedback-container');

    if(feedbackNavItem && feedbackForm) {
        feedbackNavItem.addEventListener('click', function(event) {
            event.preventDefault();
            feedbackForm.scrollIntoView({ behavior: 'smooth' });
        });
    }
});