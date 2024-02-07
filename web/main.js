// JavaScript function to handle Sign Up button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Redirect to another page
        window.location.href = "signin.html";
    });
});
