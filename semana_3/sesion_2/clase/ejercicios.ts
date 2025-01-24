// Crear una función que analice números enteros positivos. En caso sean capicúa, devolver true, caso contrario que devuelvan false. 
// En caso el número ingresado no sea entero y positivo. Lanzar una excepción


const esCapicua = (num: number): boolean => {
    if (num <= 0) {
        throw new Error(`El valor ${num} debe ser positivo`);
    }
    if (!Number.isInteger(num)) {
        throw new Error(`El valor ${num} debe ser entero`);
    }
    const NUM_TEXTO = num.toString();
    return NUM_TEXTO === NUM_TEXTO.split('').reverse().join('');
}





try {
    console.log(esCapicua(788887)); // true
} catch (error) {
    console.log(error.message);
}

try {
    console.log(esCapicua(-7));     // Excepción
} catch (error) {
    console.log(error.message);
}

try {
    console.log(esCapicua(56.12));     // Excepción
} catch (error) {
    console.log(error.message);
}

try {
    console.log(esCapicua(12345));     // Excepción
} catch (error) {
    console.log(error.message);
}



// Código para ejecutar: node --experimental - strip - types ejercicios.ts
