function existeTriangulo() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);
    let resultado = document.getElementById("resultado");
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert("Los lados deben de tener un valor");
        return;
    }
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 === lado2 && lado2 === lado3) {
            resultado.innerHTML = "Es un triangulo equilatero";
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            resultado.innerHTML = "Es un triangulo isoceles";
        } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
            resultado.innerHTML = "Es un triangulo escaleno";
        } else {
            resultado.innerHTML = "El triangulo puede existir";
        }
    }
}

function convertirBinario() {
    let num = document.getElementById("numDec").value;
    let aux = 1;
    let bin = 0;
    while (num >= 2) {
        bin += (num % 2) * aux;
        //console.log("BIN: ",bin);
        aux *= 10;
        num = (num - num % 2) / 2
        //num -= num%2;
        //num /= 2;
    }
    bin += aux * num;
    //console.log("BIN FIN: ",bin);
    document.getElementById("numBin").innerHTML = bin;
}

function contarVocales() {
    let texto = document.getElementById("texto").value; // Obtiene el valor del input como cadena
    let a = 0;  // Inicializa los contadores como números
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    let total = 0;

    texto = texto.toLowerCase();

    for (let j = 0; j < texto.length; j++) {
        const caracter = texto[j];
        switch (caracter) {
            case 'a': a++; break;
            case 'e': e++; break;
            case 'i': i++; break;
            case 'o': o++; break;
            case 'u': u++; break;
        }
    }

    total = a + e + i + o + u; // Calcula el total

    // Actualiza los elementos HTML con los resultados.  Asegúrate de que los IDs en tu HTML coincidan.
    document.getElementById("a").textContent = a;
    document.getElementById("e").textContent = e;
    document.getElementById("i").textContent = i;
    document.getElementById("o").textContent = o;
    document.getElementById("u").textContent = u;
    document.getElementById("total").textContent = total;


    //return { a, e, i, o, u, total }; // Puedes retornar un objeto si lo necesitas en otra parte del código.
}
