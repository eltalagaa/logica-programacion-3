


function calcularFactorial() {

    let input = prompt("Ingrese un número para calcular su factorial:");

    while (isNaN(input) || input === null || input === "") {

        alert("Por favor, ingrese un número válido.");

        input = prompt("Ingrese un número para calcular su factorial:");
    }

    const numero = parseInt(input);

    const factorial = calcularFactorialRecursivo(numero);

    console.log(`El factorial de ${numero} es: ${factorial}`);
}

function calcularFactorialRecursivo(num) {

    if (num === 0 || num === 1) {

        return 1;

    } else {

        return num * calcularFactorialRecursivo(num - 1);
    }
}


calcularFactorial();





    