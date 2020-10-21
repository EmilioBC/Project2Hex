const submitButton = document.querySelector('button');
const messageBox = document.querySelector('messageBox');
// const messagesP = document.getElementById('messages');

submitButton.addEventListener('click', () => {
    document.getElementById("messages").value = messageBox;	
});