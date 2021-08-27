// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
 var somma = 0;
  // CICLO FOR
//  for(i= 0; i< 5; i++){
//      var numero= parseInt(prompt("inserisci un numero"));
//      while(isNaN(numero)){
          
    
//          numero = parseInt(prompt("DEVI INSERIRE UN NUMERO NON PATATE"))
//      }

//     somma +=numero;
//  }
 
//  console.log(somma);

// CICLO WHILE
 i= 0; 
 while(i< 5){
   var numero = parseInt(prompt("inserisci un numero"))
   while(isNaN(numero)){
          
    
    numero = parseInt(prompt("DEVI INSERIRE UN NUMERO NON PATATE"))
}
   
   i++
   somma +=numero;
}


console.log(somma);
