// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value

// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern

// Valid input: display confirmation and submit the form

// Invalid input: display error message

const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

form.addEventListener("submit", validateInput);

function validateInput(event) {
  const inputValue = inputField.value;
  const regex = /^[a-zA-Z0-9]+$/; // Only alphanumeric characters

  if (!regex.test(inputValue)) {
    event.preventDefault(); // Prevent form submission
    alert("Please enter alphanumeric characters only.");
  } else {
    // Form is valid, you can submit data here (for example using fetch API)
    alert("Form submitted!");
    // Simulate form submission (remove in production)
    form.reset();
  }
}
