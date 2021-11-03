function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalcontent = document.querySelector(".content")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCl = document.querySelector(".close");
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const nbrParticipation = document.getElementById('quantity');
const radioList = document.querySelectorAll('input[name="location"]');
const term = document.querySelectorAll('input[name="checkbox1"]')[0];
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modale
modalCl.addEventListener("click", colseModal);

function colseModal(e){
  modalbg.style.display ="none";
}

//Keep form data modal
modalcontent.addEventListener("submit", validate);
function validate(){
  //debugger;
  let erreur = 0;
  let ErreurFirst = document.getElementById("erreurPrenom");
  let ErreurLast = document.getElementById("erreurNom");
  let ErreurEmail = document.getElementById("erreurEmail");
  let ErreurDate = document.getElementById("erreurDate")
  let ErreurQantity = document.getElementById("erreurNb")
  let ErreurVille = document.getElementById("erreurVille")
  let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let ErreurTerm = document.getElementById("erreurTerm")

  // Field firstname must have a minimum 2 characters and can not be empty
  if(firstname.value.length < 2){
    console.log("prenom");
    ErreurFirst.style.display ="block";
    ErreurFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstname.style.border="3px red solid";
    erreur++;
  }

  // Field lastname must have a minimum 2 characters and can not be empty
  if(lastname.value.length < 2){
    console.log("nom");
    ErreurLast.style.display ="block";
    ErreurLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastname.style.border="3px red solid";
    erreur++;
  }

  // Field email must be a valid email
  if(email.value.length === 0 || !email.value.match(mailRegex)){
    console.log("email");
    ErreurEmail.style.display ="block";
    erreurEmail.innerHTML = "Veuillez entrer une adresse mail valide.";
    email.style.border="3px red solid";
    erreur++;
  }

  // Field birthdate must be a valid
  if(birthdate.value.length === 0){
    console.log("birthdate");
    ErreurDate.style.display ="block";
    ErreurDate.innerHTML = "Veuillez entrer une date valide sous la forme jj/mm/dddd.";
    birthdate.style.border="3px red solid";
    erreur++;
  }

  // Field quantity must be not empty, numeric and integer
  if(!nbrParticipation.value){
    console.log("quantity");
    ErreurQantity.style.display ="block";
    ErreurQantity.innerHTML = "Veuillez entrer un nombre entre 0 et 99.";
    nbrParticipation.style.border="3px red solid";
    erreur++;
  }

  // One of fields location must be selected
  let radioValue;
  radioList.forEach((el) => {
      if (el.checked) radioValue = el.value;
    }
  );
  if (!radioValue) {
    console.log("ville");
    erreur++;
    ErreurVille.style.display ="block";
    ErreurVille.innerHTML = "Vous devez choisir une option";
    let checkboxIcon = document.getElementsByClassName("checkbox-icon");
    for (i = 0; i < checkboxIcon.length-2; i++) {
      checkboxIcon[i].classList.add("invalid-checkbox");
    }
    
  } 
  console.log(term.checked)
  // Field terms must be checked
  if (term.checked === false) {
    console.log(term.checked);
    ErreurTerm.style.display ="block";
    ErreurTerm.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    //let checkboxIcon = document.getElementsByClassName("checkbox-icon");
    erreur++;
  } 


  if(erreur!=0)
    return false;
  else
  showModalThanks();
}
/* Show Modal thanks
 function showModalThanks() {
  modalbg.style.display = 'none';
  modalThanks.style.display = 'flex';
}*/

