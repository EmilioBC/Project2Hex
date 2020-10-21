const submitButton = document.querySelector('button');
const messageBox = document.querySelector('messageBox');
const messagesP = document.getElementById('messages');

submitButton.addEventListener('click', () => {
    messagesP.insertAdjacentHTML('beforeend', html);		
});