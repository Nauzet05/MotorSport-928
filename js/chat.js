// Variables to handle the messages
let messages = [];

// Function to send a message
function sendMessage() {
    const userMessage = document.getElementById('userInput').value;
    if (userMessage.trim() !== "") {
        // Add the user's message to the message list
        messages.push({ sender: 'user', text: userMessage });
        document.getElementById('userInput').value = ''; // Clear the input field
        displayMessages(); // Display all the messages
    }
}

// Function to display messages in the forum
function displayMessages() {
    const chatBox = document.getElementById('chatBox');
    chatBox.innerHTML = ''; // Clear the chat before redisplaying

    // Iterate over the messages and add each one to the forum
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span class="${message.sender}">${message.sender === 'user' ? 'You' : 'Nauzet'}:</span> ${message.text}`;
        chatBox.appendChild(messageDiv);
    });

    chatBox.scrollTop = chatBox.scrollHeight; // Scroll down to the last message
}

// Add the event to send a message when the user presses "Enter"
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
