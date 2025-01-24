

// TS
let numero: number;
let texto: string;
let boleano: boolean;
let array: number[]; //Array<number>

let num = 120.34;
let nom = 'Jota';
let bool = true;
let nums = [1, 2, 3, 4, 5];


const perimetroTriangulo2: any = (a: number, b: number, c: number) => {
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
console.log(perimetroTriangulo2(3, 4, 5)); // SI
console.log(perimetroTriangulo2(1, 1, 4)); // NO
console.log(perimetroTriangulo2(5, 5, 5)); // SI

 

//Código para ejecutar: node--experimental - strip - types nombre - archivo.ts