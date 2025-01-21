/* ============================= EJERCICIO 1 ======================*/

function modificarPalabras(cadena) {
    cadena = cadena.toLowerCase();
    const palabras = cadena.split(" ");
    const palabrasInvertidas = palabras.map(palabra => palabra.split("").reverse().join(""));
    const resultado = palabrasInvertidas.join("-");
    console.log(resultado);
}

// Ejemplo de uso:
modificarPalabras("Hola Mundo"); // Imprime "aloh-odnum"
modificarPalabras("JavaScript es genial");

/* ============================= EJERCICIO 2 ======================*/

function perimetroTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Triángulo no válido";
    } else {
        return a + b + c;
    }
}

// Ejemplos de uso:
console.log(perimetroTriangulo(3, 4, 5)); // Imprime 12
console.log(perimetroTriangulo(1, 2, 5)); // Imprime "Triángulo no válido"
console.log(perimetroTriangulo(5, 5, 5)); // Imprime 15
console.log(perimetroTriangulo(0, 1, 1)); // Imprime "Triángulo no válido"
console.log(perimetroTriangulo(2, 2, 4)); // Imprime "Triángulo no válido"
/* ============================= EJERCICIO 3 ======================*/

function generadorImpares(num1, num2) {
    let inicio = Math.min(num1, num2); // Encuentra el menor de los dos números.
    let fin = Math.max(num1, num2); // Encuentra el mayor de los dos números.
    let impares = [];

    for (let i = inicio + 1; i < fin; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    console.log(impares);
    return impares;
}


// Ejemplos de uso:
generadorImpares(1, 7); // Imprime [3, 5] en la consola
generadorImpares(7, 1); // Imprime [3, 5] en la consola
generadorImpares(2, 8); // Imprime [3, 5, 7] en la consola
generadorImpares(8, 2); // Imprime [3, 5, 7] en la consola
generadorImpares(1, 1); // Imprime [] en la consola
generadorImpares(10, 20); // Imprime [11, 13, 15, 17, 19] en la consola
/* ============================= EJERCICIO 4 ======================*/

function validarUsuario(nombreUsuario) {
    const regex = /^user[0-9]{2,4}$/i; // Expresión regular para la validación
    return regex.test(nombreUsuario) ? "Correcto" : "Incorrecto";
}

// Ejemplos de uso:
console.log(validarUsuario("user123")); // Imprime "Correcto"
console.log(validarUsuario("USER12")); // Imprime "Correcto"
console.log(validarUsuario("user1")); // Imprime "Incorrecto"
console.log(validarUsuario("user12345")); // Imprime "Incorrecto"
console.log(validarUsuario("userabc")); // Imprime "Incorrecto"
console.log(validarUsuario("User1234")); // Imprime "Correcto"
console.log(validarUsuario("usuario123")); // Imprime "Incorrecto"
/* ============================= EJERCICIO 5 ======================*/
class Estudiante {
    constructor(nombre, matricula, edad, carrera) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.edad = edad;
        this.carrera = carrera;
    }
}

function generarEstudianteAleatorio() {
    const nombres = ["Ana", "Juan", "Pedro", "Maria", "Luis", "Sofia", "David", "Laura", "Carlos", "Isabella"];
    const carreras = ["Ingeniería de Sistemas", "Medicina", "Derecho", "Contabilidad", "Arquitectura"];
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const matricula = Math.floor(Math.random() * 100000); // Matrícula aleatoria
    const edad = Math.floor(Math.random() * 10) + 18; // Edad entre 18 y 27
    const carrera = carreras[Math.floor(Math.random() * carreras.length)];
    return new Estudiante(nombre, matricula, edad, carrera);
}

// Crea un arreglo de 10 estudiantes con datos aleatorios
const estudiantes = [];
for (let i = 0; i < 10; i++) {
    estudiantes.push(generarEstudianteAleatorio());
}

function filtrarPorCarrera(estudiantes, carrera) {
    return estudiantes.filter(estudiante => estudiante.carrera === carrera);
}


// Ejemplo de uso:
const estudiantesIngenieria = filtrarPorCarrera(estudiantes, "Ingeniería de Sistemas");
console.log(estudiantesIngenieria); // Imprime los estudiantes de Ingeniería de Sistemas
console.log(estudiantes); // Imprime todos los estudiantes