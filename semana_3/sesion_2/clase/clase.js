console.log('Hola Node.js');
//Escribe una función llamada modificarPalabras que tome una cadena y devuelva la misma cadena pero con las palabras invertidas, en minúsculas, y separadas por guiones. Por ejemplo, si invocamos modificarPalabras("Hola Mundo") debe retornar "aloh-odnum".
let texto1 = "Hola Mundo";
const modificarPalabras = (texto) => {
    let aux = texto.toLowerCase().split(' ');
    aux = aux.map(e => e.split('').reverse().join(''));
    return aux.join('-');
};
console.log(texto1, '--->', modificarPalabras(texto1));

//Crea una función llamada perimetroTriangulo que reciba las medidas de los lados de un triángulo. La función debe validar si el triángulo es posible y, de ser así, devolver su perímetro. En caso contrario, debe devolver "Triángulo no válido". Por ejemplo, perimetroTriangulo(3, 4, 5) debe devolver 12.
const perimetroTriangulo = (a, b, c) => {
    //Si existe |b-c| < a < b+c
    if ((a > b + c) || Math.abs(b - c) > a) {
        return "Triángulo no válido";
    }
    if ((b > a + c) || Math.abs(a - c) > b) {
        return "Triángulo no válido";
    }
    if ((c > b + a) || Math.abs(b - a) > c) {
        return "Triángulo no válido";
    }
    return a + b + c;
};
console.log(perimetroTriangulo(3, 4, 5)); // SI
console.log(perimetroTriangulo(1, 1, 4)); // NO
console.log(perimetroTriangulo(5, 5, 5)); // SI

// Código para ejecutar: node nombre-archivo.js