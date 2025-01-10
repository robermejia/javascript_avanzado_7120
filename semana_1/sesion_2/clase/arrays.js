/* ARRAYS*/
let nums = [1, 2, 3, 4, 5];
console.log("Original: ", nums);
//Copiar un array (Spread)
let copiaNums = [...nums]; // = nums
console.log("Copia: ", copiaNums);
//Modificar la copia
copiaNums.push(6);
console.log("Original: ", nums);
console.log("Copia: ", copiaNums);