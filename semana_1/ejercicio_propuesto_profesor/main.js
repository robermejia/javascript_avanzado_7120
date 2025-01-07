function calcularNotas() {
    let prac = parseInt(document.getElementById('practicas').value);
    let parcial = parseInt(document.getElementById('parcial').value);
    let final = parseInt(document.getElementById('final').value);
    let prom = prac + parcial + 2*final;
    prom /= 4;
    document.getElementById("mensaje").innerHTML = prom;
    if(prom >= 11.5){
        document.getElementById("mensaje").innerHTML += " APROBADO ";
    }else{
        document.getElementById("mensaje").innerHTML += " DESAPROBADO ";
    }

}