document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback element
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add submit event listener to the form, using the function keyword for the callback
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Crucial: Prevent default form submission

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

        // Make the feedback area visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success path: uses only Tailwind classes for styling
            feedbackDiv.textContent = 'Registration successful! 🎉';
            
            // Remove error classes, add success classes (text-green-700, bg-green-100, border-green-300)
            feedbackDiv.classList.remove('text-red-700', 'bg-red-100', 'border-red-300', 'border');
            feedbackDiv.classList.add('text-green-700', 'bg-green-100', 'border', 'border-green-300');
            
            // Clear the form after successful registration
            form.reset();

        } else {
            // Error path: uses only Tailwind classes for styling
            const errorHtml = messages.join('<br>');
            feedbackDiv.innerHTML = errorHtml;

            // Remove success classes, add error classes (text-red-700, bg-red-100, border-red-300)
            feedbackDiv.classList.remove('text-green-700', 'bg-green-100', 'border-green-300', 'border');
            feedbackDiv.classList.add('text-red-700', 'bg-red-100', 'border', 'border-red-300');
        }
    });
});
```eof
