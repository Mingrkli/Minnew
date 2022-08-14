const emailInput = document.querySelector('.subscribe-user-interactions-container input')
const emailButton = document.querySelector('.subscribe-user-interactions-container button')
const emailError = document.querySelector('.subscribe-user-interactions-container .error')
const emailSuccess = document.querySelector('.subscribe-user-interactions-container .success')

// Shows error when user clicks out of input
emailInput.addEventListener('blur', e => {
    if (!e.target.value.match(/\S+@\S+\.\S+/) && e.target.value.length > 0) {
        emailError.classList.add('active')
    }
})

// When user clicks button, see if email is valid
emailButton.addEventListener('click', () => {
    if (emailInput.value.match(/\S+@\S+\.\S+/) && emailInput.value.length > 0) {
        emailSuccess.classList.add('active')
    }

    emailInput.value = '';
})

// Clears error when user types in input field
emailInput.addEventListener('input', () => {
    emailError.classList.remove('active')
    emailSuccess.classList.remove('active')
})