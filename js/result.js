// Function to load comments from localStorage and display them
function loadComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';  // Clear the list before loading comments

    // Check if there are comments in localStorage
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Display the saved comments
    savedComments.forEach((comment, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${comment.username}</strong>: 
            <span class="comment-text">${comment.comment}</span> 
            <button onclick="editComment(${index})">Editar</button>
            <button onclick="deleteComment(${index})">Eliminar</button>
        `;
        commentsList.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmit(e) {
    e.preventDefault();  // Prevent the form from being submitted traditionally

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
        // Create a new comment
        const newComment = {
            username,
            comment
        };

        // Retrieve saved comments from localStorage, if any
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

        // Add the new comment to the list
        savedComments.push(newComment);

        // Save the updated comment list to localStorage
        localStorage.setItem('comments', JSON.stringify(savedComments));

        // Clear the form
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';

        // Reload comments to show the new one
        loadComments();
    }
}

// Function to edit a comment
function editComment(index) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = savedComments[index];

    // Populate the form with the comment to be edited
    document.getElementById('username').value = comment.username;
    document.getElementById('comment').value = comment.comment;

    // Delete the comment to replace it after editing
    deleteComment(index);
}

// Function to delete a comment
function deleteComment(index) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Remove the comment from the list
    savedComments.splice(index, 1);

    // Save the updated list to localStorage
    localStorage.setItem('comments', JSON.stringify(savedComments));

    // Reload comments
    loadComments();
}

// Event to load comments when the page is loaded
document.addEventListener('DOMContentLoaded', loadComments);

// Event to handle form submission
document.getElementById('comment-form').addEventListener('submit', handleFormSubmit);
