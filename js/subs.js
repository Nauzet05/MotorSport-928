// DECOMMENT: STEP 3: Create a function that listens on a submit even of the created form
function listenForValidation() {
    const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
    PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
  }
  
  
  // DECOMMENT: STEP 5: Create a function which validates the data sent by the form when the user clicks on submit button
  function validatePersonalDataForm(e) {
  
    const NAME = e.target.name.value;
    const SURNAME = e.target.surname.value;
    const EMAIL = e.target.email.value;
  
    let valid = true;
  
    if (!NAME) {
      document.getElementById("form-name").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-name").style.visibility = "hidden";
  
    if (!SURNAME) {
      document.getElementById("form-surname").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-surname").style.visibility = "hidden";
  
    if (!EMAIL) {
      document.getElementById("form-email").style.visibility = "visible";
      valid = false;
    } else document.getElementById("form-email").style.visibility = "hidden";
  
    if (!valid) {
      e.preventDefault();
    } else {
      saveData(NAME, SURNAME, EMAIL);
    }
  }
  
  // DECOMMENT: STEP 6: Create a function to save the form data in LocalStorage
  function saveData(name, surname, email) {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("email", email);
  }