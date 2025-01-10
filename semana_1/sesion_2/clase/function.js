/* FUNCTION */
/*SIN VALOR INICIAL REDUCE*/ 
function suma(...nums) {
    return nums.reduce((a, c) => a + c);
}
console.log(suma(1, 2));
console.log(suma(1, 2, 3));
console.log(suma(1, 2, 3, 4));
console.log(suma(1, 2, 3, 4, 5));
console.log(suma(1, 2, 3, 4, 5, 6)); 

console.log("======================================="); 
/* CON VALOR INICIAL REDUCE*/ 
function suma(...nums) {
    return nums.reduce((a, c) => a + c, 20); // VALOR INICial 20
}
console.log(suma(1, 2));
console.log(suma(1, 2, 3));
console.log(suma(1, 2, 3, 4));
console.log(suma(1, 2, 3, 4, 5));
console.log(suma(1, 2, 3, 4, 5, 6)); 