// Crea un array di numeri interi
var numeri = [10, 20, 30, 3, 8, 22, 18];
var somma = 0;

    // for(i= 0 ; i< numeri.length; i++){
    // if ((i % 2) == 1){
    //     somma += numeri[i];
    // }
    // }
    // console.log(somma);
i = 0 
while(i< numeri.length){

    if ((i % 2) == 1){
        somma += numeri[i];
    }
    i++
}
console.log(somma);
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

