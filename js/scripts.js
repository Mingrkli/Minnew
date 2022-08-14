// Body
const body = document.querySelector('body')
// Nav Bar
const navBar = document.querySelector('.nav-bar') 
const sectionsContainerBtn = document.querySelector('.sections-container')
const sectionsDropdown = document.querySelector('.sections-dropdown')
const accountBtn = document.querySelector('.account-btn')
const colorPickerLED = document.querySelector('.color-picker-led')
const colorPickerText = document.querySelector('.color-picker-text')
const toggleLightDarkModeBtn = document.querySelector('.color-picker-container button')
// Account
const accountPopup = document.querySelector('.account-container')
const accountClosePopup = document.querySelector('.close-popup')

/* Event Listener
============================================================================================== */
// Remembers color
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('minnewmain') === null) {
        localStorage.setItem('minnewmain', '#ffffff')
        colorPickerText.value = '#ffffff';
    }
    if (localStorage.getItem('minnewsub') === null) {
        localStorage.setItem('minnewsub', '#6622CC')
        colorPickerLED.value = '#6622CC';
    }

    document.documentElement.style.setProperty('--c-sub', localStorage.getItem('minnewsub'));
    document.documentElement.style.setProperty('--c-main-text', localStorage.getItem('minnewmain'));
    colorPickerLED.value = localStorage.getItem('minnewsub');
    colorPickerText.value = localStorage.getItem('minnewmain');

    // BG
    if (localStorage.getItem('minnewlightMode') == 1) {
        body.toggleAttribute('data-light-mode')
    }
})

// When user scrolls from top
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navBar.classList.add('minnewsmall')
    }
    else {
        navBar.classList.remove('minnewsmall')
    }
})

// When user selects sections
sectionsContainerBtn.addEventListener('click', () => {
    sectionsDropdown.classList.toggle('show')
})

// When user clicks on account
accountBtn.addEventListener('click', () => {
    accountPopup.classList.remove('hidden')
})

// When user clicks to close account popup
accountClosePopup.addEventListener('click', () => {
    accountPopup.classList.add('hidden')
})

// When user changes the color
colorPickerLED.addEventListener('input', () => {
    document.documentElement.style.setProperty('--c-sub', colorPickerLED.value);
    localStorage.setItem('minnewsub', colorPickerLED.value)
})

colorPickerText.addEventListener('input', () => {
    document.documentElement.style.setProperty('--c-main-text', colorPickerText.value);
    localStorage.setItem('minnewmain', colorPickerText.value)
})

// When user presses on the BG button
toggleLightDarkModeBtn.addEventListener('click', () => {
    body.toggleAttribute('data-light-mode')
    
    if (localStorage.getItem('minnewlightMode') === null) {
        localStorage.setItem('minnewlightMode', 1)
    }
    else if (localStorage.getItem('minnewlightMode') == 1) {
        localStorage.removeItem('minnewlightMode')
    }
})