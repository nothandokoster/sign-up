const formInput = document.querySelector('.input-firstName');
const formInputlastName = document.querySelector('.input-lastName');
const message = document.querySelector('.error-message');
const messagelastName = document.querySelector('.error-message-lastName');
const Btn = document.querySelector('.my-button');

Btn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

  const enteredfirstName = formInput.value.trim();
  const enteredlastName = formInputlastName.value.trim();

  // Clear previous errors
  message.textContent = "";
  messagelastName.textContent = "";
  formInput.classList.remove("error");
  formInputlastName.classList.remove("error");

  // Check for empty fields
  if (enteredfirstName === "") {
    message.textContent = 'First name cannot be empty';
    formInput.classList.add("error");
  }
  if (enteredlastName === "") {
    messagelastName.textContent = 'Last name cannot be empty';
    formInputlastName.classList.add("error");
  }
});

