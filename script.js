let numero = prompt("Ingresa un número: ");
while (isNaN(numero)) {
    numero = prompt("Error. Por favor, ingrese un numero correcto")
}
function factorial(numero) {
    var acumulador = 1;
    var i = numero;
    while (i > 1) {
        acumulador *= i;
        i = i - 1;
    }
    const resultado = `El factorial de ${numero} es ${acumulador}`;
    
    // Obtener el elemento HTML por su ID y mostrar el resultado
    const outputDiv = document.getElementById("acumulador");
    outputDiv.innerHTML = resultado;
}
console.log(acumulador)

factorial(numero);