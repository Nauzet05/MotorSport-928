// DECOMMENT: STEP 9: Create a function to show the data stored in LocalStorage
function showData(){
    const NAME = localStorage.getItem("name");
    document.getElementById("name").innerHTML = NAME;
  
    const SURNAME = localStorage.getItem("surname");
    document.getElementById("surname").innerHTML = SURNAME;
  
    const EMAIL = localStorage.getItem("email");
    document.getElementById("email").innerHTML = EMAIL;
  }
  
  // DECOMMENT: STEP 10: Don't forget to call the function that shows the data stored in LocalStorage
  showData();