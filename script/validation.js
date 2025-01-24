document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting
        let isValid = true;

        const fields = form.querySelectorAll("input, textarea");

        fields.forEach((field) => {
            const errorMessage = field.parentElement.querySelector(".error-message");

            if (!field.validity.valid) {
                // Show custom error messages
                if (field.validity.valueMissing) {
                    errorMessage.textContent = `${field.name} is required.`;
                } else if (field.type === "email" && field.validity.typeMismatch) {
                    errorMessage.textContent = "Please enter a valid email address.";
                } else if (field.type === "tel" && field.validity.patternMismatch) {
                    errorMessage.textContent = "Please enter a valid phone number.";
                }

                errorMessage.style.display = "block";
                field.classList.add("invalid");
                isValid = false;
            } else {
                // Clear the error message for valid fields
                errorMessage.textContent = "";
                errorMessage.style.display = "none";
                field.classList.remove("invalid");
            }
        });

        if (isValid) {
            form.submit(); // Submit the form if everything is valid
        }
    });

    form.addEventListener("input", (event) => {
        const field = event.target;
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (field.validity.valid) {
            errorMessage.textContent = "";
            errorMessage.style.display = "none";
            field.classList.remove("invalid");
        }
    });
});