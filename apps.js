const formInput = document.querySelector('.firstName');
const message = document.querySelector('.error-message')
const Btn = document.querySelector('.my-button
')



Btn.addEventListener('click', function () {
    if (formInput == "") {
        message.innerHTML = 'email can not be empty'
    }
})