function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}


function validatePersonalDataForm(e) {

  const NAME = e.target.name.value;
  const SURNAME = e.target.surname.value;
  const EMAIL = e.target.email.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("error-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("error-name").style.visibility = "hidden";

  if (!SURNAME) {
    let aux = document.getElementById("error-surname");
    aux.style.visibility = "visible";
    valid = false;
  } else document.getElementById("error-surname").style.visibility = "hidden";

  if (!EMAIL) {
    document.getElementById("error-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("error-email").style.visibility = "hidden";



  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SURNAME, EMAIL);
  }
}

function saveData(name, surname, email) {
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  console.log("validation 13.0");

}

listenForValidation();