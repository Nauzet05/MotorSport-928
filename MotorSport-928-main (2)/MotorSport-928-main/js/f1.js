// Select all tables with the class .f1-table
const tables = document.querySelectorAll('.f1-table');

// Function to check if a table is in the viewport
const checkVisibility = () => {
  tables.forEach((table) => {
    const rect = table.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If the table is on the screen, add the 'visible' class
    if (rect.top < windowHeight - 100) {
      table.classList.add('visible');
    }
  });
};

// Listen to the scroll event to trigger the animation
window.addEventListener('scroll', checkVisibility);

// Call the function when the page loads
checkVisibility();
