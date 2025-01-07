// Try-Catch

try { // Código a ejecutar
    noExisto();
} catch (error) { // Si ocurre un error
    console.error("Se produjo un error:", error);
} finally{ // Siempre se ejecuta
    console.log("FIN");
}