const subscribeContainer = document.querySelector('.subscribe-container')
const subscribeContainerInput = document.querySelector('.subscribe-user-interactions-container input')
const subscribeContainerBtn = document.querySelector('.subscribe-user-interactions-container button')

/* Event Listener
============================================================================================== */
// Remembers color
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('minnewsub') === null) {
        localStorage.setItem('minnewsub', '#6622CC')
    }

    subscribeContainer.style.boxShadow = `0 0 30px 10px ${localStorage.getItem('minnewsub')}`;
    subscribeContainerInput.style.borderBottom = `2px solid ${localStorage.getItem('minnewsub')}`;
    subscribeContainerBtn.style.background = `${localStorage.getItem('minnewsub')}`;
})

