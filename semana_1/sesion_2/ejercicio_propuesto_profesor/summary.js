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

function contarCifras() {
    //Contar cifras
    const numero = parseInt(document.getElementById("numero").value);
    let contador = 0;
    let n = numero;
    while (n > 0) {
        n = Math.floor(n / 10);
        contador++;
    }
    document.getElementById("cifras").textContent = contador;
}

function contarVocales() {}