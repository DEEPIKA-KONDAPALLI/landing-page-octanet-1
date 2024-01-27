// Get the elements from the HTML
const emailInput = document.getElementById("emailInput");
const signupButton = document.getElementById("signupButton");

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}