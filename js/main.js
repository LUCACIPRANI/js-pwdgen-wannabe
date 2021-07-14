// Chiedi all’utente il suo nome
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito

var name = prompt("Come ti chiami?");
var surname = prompt("Qual'è il tuo cognome?");
var color = prompt("Qual'è il tuo colore preferito?");


document.getElementById("nome").innerHTML = "Il tuo nome è " + name;

document.getElementById("cognome").innerHTML = "Il tuo cognome è " + surname;

document.getElementById("colore").innerHTML = "Il tuo colore preferito è " + color;

// Infine scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById("password").innerHTML = "La tua password è : " + name + surname + color +"21";





