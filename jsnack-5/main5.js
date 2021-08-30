// Crea due array che hanno un numero di elementi diversi.

// var ele1 = [1, 2, 3, 4, 5];
// var ele2 = [6, 7, 8, 4, 5, 9 , 12, 13, 18, 1, 3, 4, 55, 20];

var ele1 = [];
var ele2 =[];

var lunghezzaEle1 =  Math.floor(Math.random() * 50);
for( var i = 0; i < lunghezzaEle1; i++ ) {
   ele1.push( Math.floor(Math.random() * 100));
}

var lunghezzaEle2 =  Math.floor(Math.random() * 50);
for( var i = 0; i < lunghezzaEle2; i++ ) {
    ele2.push( Math.floor(Math.random() * 100));
}


console.log(" Grandezza ele1 = " + ele1.length);
console.log( " Grandezza ele2 = " + ele2.length);

if(ele1.length < ele2.length){
    while( ele1.length != ele2.length){
        ele1.push( Math.floor(Math.random() * 100));
        
    }
} else if (ele2.length < ele1.length){
    while( ele1.length != ele2.length){
        ele2.push( Math.floor(Math.random() * 100));
        
    }
}

console.log(" Grandezza ele1 dopo push = " + ele1.length); 
console.log( " Grandezza ele2 dopo push = " + ele2.length);
console.log(ele1);
console.log(ele2);



// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
