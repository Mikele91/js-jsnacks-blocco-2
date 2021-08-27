// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo
var numero = parseInt(prompt("inserisci un numero"));

while(isNaN(numero)){
          
    
    numero = parseInt(prompt(" Non sai leggere?? DEVI INSERIRE UN NUMERO"))
}


if((numero % 2 )== 0){
    console.log(numero);

} else{
    console.log  (numero+1)
}
