function mostrarColor(){
    let color = document.getElementById('input_color');
    // Mostrar en consola
    console.log(color.value);
    // Mostrarlo en la web
    document.getElementById("resultado").innerHTML = color.value;
}