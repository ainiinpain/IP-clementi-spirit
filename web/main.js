// JavaScript function to handle Sign Up button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Redirect to another page
        window.location.href = "signin.html";
    });
});

// JavaScript function to handle Logout link click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout').addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Perform logout functionality here, such as clearing session data or redirecting to the login page
        // For demonstration, let's redirect to the login page
        window.location.href = "signin.html";
    });
});

// JavaScript function to handle Sign In form submission
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.signin-container form').addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Redirect to another page
        window.location.href = "ccafterlogedin.html"; // Change "profile.html" to the desired destination page
    });
});
