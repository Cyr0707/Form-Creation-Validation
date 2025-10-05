document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup and Initial Code Structure
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Crucial: Prevent default form submission

        // 3. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Validation Logic
        let isValid = true;
        const messages = [];

        // Username Validation: Check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation: Check if email includes both '@' and '.'
        // Note: This is a basic check. For real-world apps, a more robust RegExp would be used.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain "@" and ".").');
        }

        // Password Validation: Ensure length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // 5. Displaying Feedback
        // Make the feedback area visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success message logic and styling
            feedbackDiv.textContent = 'Registration successful! 🎉';
            
            // Remove error classes, add success classes
            feedbackDiv.classList.remove('text-red-700', 'bg-red-100', 'border-red-300');
            feedbackDiv.classList.add('text-green-700', 'bg-green-100', 'border', 'border-green-300');
            
            // Clear the form after successful registration
            form.reset();

        } else {
            // Error messages logic and styling
            const errorHtml = messages.join('<br>');
            feedbackDiv.innerHTML = errorHtml;

            // Remove success classes, add error classes
            feedbackDiv.classList.remove('text-green-700', 'bg-green-100', 'border-green-300');
            feedbackDiv.classList.add('text-red-700', 'bg-red-100', 'border', 'border-red-300');
        }
    });
});
