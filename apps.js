const formInput = document.querySelector('.input-firstName');
const formInputPassword = document.querySelector('.input-lastName');
const message = document.querySelector('.error-message');
const messagePassword = document.querySelector('.error-message-lastName');
const Btn = document.querySelector('.my-button');

Btn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

  const enteredfirstName = formInput.value.trim();
  const enteredlastName = formInputPassword.value.trim();

  // Clear previous errors
  message.textContent = "";
  messagePassword.textContent = "";
  formInput.classList.remove("error");
  formInputPassword.classList.remove("error");

  // Check for empty fields
  if (enteredfirstName === "") {
    message.textContent = 'First name cannot be empty';
    formInput.classList.add("error");
  }
  if (enteredlastName === "") {
    messagePassword.textContent = 'Last name cannot be empty';
    formInputPassword.classList.add("error");
  }
});
