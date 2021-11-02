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
const lastname = document.getElementById('last').value;
const email = document.getElementById('email').value;
const birthdate = document.getElementById('birthdate').value;
const nbrParticipation = document.getElementById('quantity').value;
const ville = document.getElementsByClassName('checkbox-input').value;
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
modalcontent.addEventListener("input", validate);
function validate(){
  console.log("hloo")
  var paragraphErreur = document.getElementById("erreur");
  if(firstname.value.length < 2){
    console.log("erreur")
    paragraphErreur.style.width="50px"
    paragraphErreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    firstname.style.borderBlockColor="red"
  }
  
  console.log(firstname)
  /*sessionStorage.setItem('prenom', firstname);
  //sessionStorage.setItem('nom', lastname);
  //sessionStorage.setItem('email', email);
  //sessionStorage.setItem('quantite', nbrParticipation);
  sessionStorage.setItem('naissance', birthdate);
  sessionStorage.setItem('ville', ville);*/

}
//validation input name


//validation modal
/*document.getElementsByClassName("btn-submit").addEventListener("submit", (e)=>{
  let erreur;
  let imputs = document.getElementsByTagName("input");

  for(var i=0; i<inputs.length; i++){
    console.log(inputs[i]);
    if(!inputs[i.value]){
      erreur = "veuillez renseigner toutes les champs";
    }
  }
  if(erreur){
    e.preventDefault();
    document.getElementsByClassName("erreur").innerHTML = erreur;
  }else{
    alert("Votre réservation a été reçue")
  }
})*/
