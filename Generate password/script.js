function generatePassword() {
    const length = 12; // Password length
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";

    const allChars = upperCase + lowerCase + numbers + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    // passwordField.setSelectionRange(0, 99999); // For mobile compatibility
    // document.execCommand("copy");

    alert("Password copied to clipboard! ✅");
}

// Generate password automatically on page load
window.onload = generatePassword;