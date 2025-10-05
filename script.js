document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback element
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve and trim input values
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // Username Validation: Must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation: Must contain "@" and "."
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain "@" and ".").');
        }

        // Password Validation: Must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---

        // 1. Make feedbackDiv visible
        feedbackDiv.style.display = 'block';
        
        // Reset any border classes that might conflict with direct styling
        feedbackDiv.classList.remove('border-red-300', 'border-green-300', 'border');

        if (isValid) {
            // Success path: set text and color properties directly
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green text color
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background (for visibility)
            
            // Clear the form after successful registration
            form.reset();

        } else {
            // Error path: join messages and set text and color properties directly
            const errorHtml = messages.join('<br>');
            feedbackDiv.innerHTML = errorHtml;
            feedbackDiv.style.color = '#dc3545'; // Red text color
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background (for visibility)
        }
    });
});
