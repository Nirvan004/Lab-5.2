const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError")


username.addEventListener("input", () => {
    if (username.validity.valueMissing) {
        showError(username, "Username is required.", usernameError);
    } else if (username.validity.tooShort) {
        showError(username, "Username must be at least 3 characters.", usernameError);
    } else if (username.validity.patternMismatch) {
        showError(username, "Username can only contain letters, numbers, and underscores.", usernameError);
    } else {
        clearError(username, usernameError);
    }
});

email.addEventListener("input", () => {
    if (email.validity.valueMissing) {
        showError(email, "Email is required.", emailError);
    } else if (email.validity.typeMismatch) {
        showError(email, "Please enter a valid email address.", emailError);
    } else {
        clearError(email, emailError);
    }
});

password.addEventListener("input", () => {
    if (password.validity.valueMissing) {
        showError(password, "Password is required.", passwordError);
    } else if (password.validity.tooShort) {
        showError(password, "Password must be at least 8 characters long.", passwordError);
    } else if (password.validity.patternMismatch) {
        showError(password, "Must include uppercase, lowercase, and a number.", passwordError);
    } else {
        clearError(password, passwordError);
    }
    if (confirmPassword.value) {
      confirmPassword.dispatchEvent(new Event("input"));
    }
});
  confirmPassword.addEventListener("input", () => {
    if (confirmPassword.validity.valueMissing) {
      showError(confirmPassword, "Please confirm your password.", confirmPasswordError);
    } else if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match.", confirmPasswordError);
    } else {
      clearError(confirmPassword, confirmPasswordError);
    }
});
