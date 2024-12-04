// Función para cargar los comentarios desde localStorage y mostrarlos
function loadComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';  // Limpiar la lista antes de cargar los comentarios

    // Verificar si ya hay comentarios en localStorage
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Mostrar los comentarios guardados
    savedComments.forEach(comment => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
        commentsList.appendChild(li);
    });
}

// Función para manejar el envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();  // Evitar que el formulario se envíe de la manera tradicional

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
        // Crear un nuevo comentario
        const newComment = {
            username,
            comment
        };

        // Obtener los comentarios guardados en localStorage, si existen
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

        // Agregar el nuevo comentario a la lista
        savedComments.push(newComment);

        // Guardar la lista de comentarios actualizada en localStorage
        localStorage.setItem('comments', JSON.stringify(savedComments));

        // Limpiar el formulario
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';

        // Recargar los comentarios para mostrar el nuevo
        loadComments();
    }
}

// Evento para cargar los comentarios al cargar la página
document.addEventListener('DOMContentLoaded', loadComments);

// Evento para enviar el formulario
document.getElementById('comment-form').addEventListener('submit', handleFormSubmit);
