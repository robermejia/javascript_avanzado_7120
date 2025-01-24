// Solucionario de la actividad
let nombre = ['Ana', 'Bart', 'Dana', 'Gerardo', 'Carlos', 'Fernanda'];
let numeros = [23, 11, 14, 34, 11, 24];

// Mostrar todos los nombres con más de 4 letras
console.log(nombre.filter(e => e.length > 4));

// Mostrar todos los nombres que tengan exactamente 2 letras "a"
console.log(nombre.filter(it => {
    const s = [...it.matchAll(/a/ig)];
    return s.length === 2;
}));

// Mostrar el promedio de los números
const calcularpromedio = () => {
    let prom: number;
    let acum = 0;
    for (let i = 0; i < numeros.length; i++) {
        acum = acum + numeros[i];
    }
    prom = acum / numeros.length;
    console.log('El promedio es:', prom);
}
// Mostrar la mediana de los números
const calcularMediana = (nums: number[]) => {
    if (nums.length === 0) {
        return 'El array esta vacio';
    } else if (nums.length === 1) {
        return nums[0];
    }
    let aux = nums.sort();
    if (aux.length % 2 === 0) {
        return (aux[aux.length / 2] + aux[aux.length / 2 - 1]) / 2;
    } else {
        return aux[(aux.length - 1) / 2]
    }
}
console.log("Mediana:", calcularMediana(numeros));

// Mostrar la moda de los números
const counter = {};
let max = -1;
let maxCounter = 0;
numeros.forEach(it => {
    counter[it] = counter[it] ? counter[it] + 1 : 1;
    if (counter[it] > maxCounter) {
        maxCounter = counter[it];
        max = it;
    }
});
console.log("La moda del array es: " + max);