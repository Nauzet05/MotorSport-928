// Seleccionamos todas las tablas con la clase .f1-table
const tables = document.querySelectorAll('.f1-table');

// Función para verificar si una tabla está en el viewport
const checkVisibility = () => {
  tables.forEach((table) => {
    const rect = table.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Si la tabla está en la pantalla, añadir la clase 'visible'
    if (rect.top < windowHeight - 100) {
      table.classList.add('visible');
    }
  });
};

// Escuchar el evento scroll para activar la animación
window.addEventListener('scroll', checkVisibility);

// Llamar a la función al cargar la página
checkVisibility();
