/* FUNCIÓN O CLASE MATH */
/******* Funciones Math *******/
console.log("Pi: ", Math.PI);
console.log("Absoluto de -10.5: ", Math.abs(-10.5));
console.log("Redondeo de 10.4: ", Math.round(10.4));
console.log("Redondeo CEIL de 10.1: ", Math.ceil(10.1));
console.log("Redondeo FLOOR de 10.9: ", Math.floor(10.9));

console.log("Redondeo de 10.28981: ", Number('10.28981').toPrecision(5));
console.log("Redondeo de 10.28981: ", Number('10.28981').toFixed(2));
console.log("Redondeo de 10.2: ", Number('10.2').toPrecision(5));
console.log("Redondeo de 10.2: ", Number('10.2').toFixed(3));
console.log("Redondeo de 10.21: ", Number('10.21').toExponential());

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
*/ 

// Min y Max
console.log("Mínimo: ", Math.min(1,2,3,-4));
let arr = [1,2,3,-4];
arr.sort();
console.log("Mínimo: ", arr.at(0));