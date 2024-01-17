const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  
};

const isValidEmail = eamail => {
  const re = /^(([^<>()[\]\\.,;:\s@]+(\.^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    setError(firstName, 'First Name Cannot Be Empty');
  
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === '') {
    setError(lastName, 'LAST NAME IS REQURED');
  
  } else {
    setSuccess(lastName);
  }
  if (emailValue === '') {
    setError(email, 'EMAIL IS REQUIRED');
  } else if(!isValidEmail(emailValue)){
    setError(email, 'Please provide a valid email')
    
  } else {
    setSuccess(email);
  }
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue, length < 8) {
    setError(password, 'Password must be at least 8 chararacters');

  } else {
    setSuccess(password);
  }





};