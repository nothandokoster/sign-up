const formFields = document.querySelector('.form-fields');
const formInput = document.querySelector('.input-firstName');
const formInputLastName = document.querySelector('.input-lastName');
const formInputEmail = document.querySelector('.input-email');
const formInputPassword = document.querySelector('.password');

//const message = document.querySelector('.error-message');
//const messagelastName = document.querySelector('.error-message-lastName');
//const Btn = document.querySelector('.my-button');
formFields.addEventListener('submit', onSubmit);
function onSubmit(e) {
  if (formInput.value === '' || formInputLastName.value === '' || formInputEmail.value === '' || formInputPassword.value === '') {
    message.innerHTML = "PLEASE ENTER ALL FIELDS";
  } else {
    console.log('success')
  }
}
Btn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

 // const enteredfirstName = formInput.value.trim();
 // const enteredlastName = formInputlastName.value.trim();

  // Clear previous errors
 // message.textContent = "";
 // messagelastName.textContent = "";
 // formInput.classList.remove("error");
  //formInputlastName.classList.remove("error");

  // Check for empty fields
 // if (enteredfirstName === "") {
  //  message.textContent = 'First name cannot be empty';
  //  formInput.classList.add("error");
  }
 // if (enteredlastName === "") {
   // messagelastName.textContent = 'Last name cannot be empty';
  //  formInputlastName.classList.add("error");
  
);

