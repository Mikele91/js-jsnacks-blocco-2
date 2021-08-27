// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var invitati = [];

var nomi =["michele", "andrea", "franco", "gino", "maurizio" ]
var cognomi =["vergingetorige", "zolfo", "costanzo", "pauli", "venditti" ]
// Math.floor(Math.random() * 5)
for(i = 0; i< 3; i++){
   var nome = Math.floor(Math.random()* nomi.length);//genera un numero da 0 a fine arrey
   var cognome = Math.floor(Math.random()*cognomi.length);
 
   var nomeCompleto = nomi[nome] + " " + cognomi [cognome];
   invitati.push(nomeCompleto);
}




console.log(invitati);

 