//Condicionale
let edad = 36
if (edad < 0){
    console.log("Edad", edad, "no válida")
}
else if (edad < 18){
    console.log("Menor de edad", edad)
}else{
    console.log("Mayor de edad", edad)
}

//Ternario


let dni = "2020202"
let mensaje = (dni.length == 8)? "DNI correcto!":"DNI incorrecto"
console.log(mensaje)