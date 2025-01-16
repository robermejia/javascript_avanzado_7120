// concat()
let txt1 = 'Hola';
let txt2 = ' mundo';
console.log('Contactenación');
console.log('+', txt1 + txt2);
console.log('concat', txt1.concat(txt2));
// lenght
console.log('Extensión\n==================');
console.log('txt1', txt1.length);
console.log('txt2', txt2.length);

// slice()
let abc = 'abcfoiohewfjuewhfeuwifhwu';
console.log(abc.slice(0, 4));
console.log(abc.slice(-4));

//indexOf()
//search()
let email = 'e14024@utp.edu.pe';
// Extrae el dominio del correo
console.log(email.slice(email.indexOf('@') + 1));
let nombre = 'Ramiro Ramos Ramirez';
console.log(nombre.indexOf('Ram'));
console.log(nombre.indexOf('Ram', 1));
console.log(nombre.search('Ram'));
console.log(nombre.search(/ /)); // Con barras inclinadas indicamos una Reg-Ex

// Comillas en JS
console.log("a" === 'a');
console.log("a" === `a`);
//Pelusa's house
let t = 'Pelusa\'s house'; //"Pelusa's house"
console.log(t);
t = 'Paulie "el loro" es una estrella';
console.log(t);
t = 'Paul\'s aunt is living in the "great" city';
t = "Paul's aunt is living in the \"great\" city";
t = `Paul's aunt is living in the "great" city`;
console.log(t);
//interpolación
let nom = "Argos",
    edad = 13,
    especie = 'perro';
// Mi [[especie]] se llama [[nombre]] y tiene [[edad]] años
//"Mi " + especie + " se llama " + nom + " y tiene " + edad + " años";
let frase = `Mi ${especie} se llama ${nom} y tiene ${edad} años`;
console.log(frase);

//Multilínea
let sq =
    `La primera temporada de El juego del calamar se estrenó el 17 de septiembre de 2021.
En julio de 2024, se anunció que la segunda temporada de la serie se estrenará el 26 de diciembre de 2024 y la temporada final en 2025`;
console.log(sq);

// Expresiones regulares
let textoEsp = "El teléfono es 999-111-321 y la dirección es Av. Civil 1234";
//Reemplazar todos los números por #
const REGEX_NUMBERS = /\d/g;
textoEspReplaced = textoEsp.replace(REGEX_NUMBERS, "#");
console.log(textoEsp);
console.log(textoEspReplaced);

//Reemplazar todos los números del teléfono por #, excepto los últimos 2 ###-###-#21  

//1.- Extraer el número 999-111-3
let numTel = String(textoEsp.match(/\d{3}-\d{3}-\d{1}/));
//console.log(numTel);
//2.- Reemplazar los números por #
let numTelSec = numTel.replace(REGEX_NUMBERS, "#");
//console.log(numTel);
//3.- Insertar el reemplazo en la cadena original
textoEspReplaced = textoEsp.replace(numTel, numTelSec);
console.log(textoEspReplaced);