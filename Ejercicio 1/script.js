window.onload = function () {
    var input1 = document.querySelectorAll('input[type="number"]')[0];
    var input2 = document.querySelectorAll('input[type="number"]')[1];
    var select = document.querySelector('select[name="choice"]');
    var btnCalcular = document.getElementById('calcular');
    var btnRestablecer = document.getElementById('restablecer');

    var resultado = document.createElement('p');
    document.body.appendChild(resultado);

    // Función para verificar si debe deshabilitar el botón
    function verificarDivision() {
        var operacion = select.value;
        var num2 = Number(input2.value);
        btnCalcular.disabled = (operacion === "Dividir" && num2 === 0);
    }

    // Detectar cambios para validar división por cero
    select.onchange = verificarDivision;
    input2.oninput = verificarDivision;

    /*------------------------------------------------*/
    btnCalcular.onclick = function (evento) {
        evento.preventDefault();
        var num1 = Number(input1.value);
        var num2 = Number(input2.value);
        var operacion = select.value;
        var res;

        if (operacion === "Sumar") {
            res = num1 + num2;
        } else if (operacion === "Restar") {
            res = num1 - num2;
        } else if (operacion === "Multiplicar") {
            res = num1 * num2;
        } else if (operacion === "Dividir") {
            if (num2 !== 0) {
                res = num1 / num2;
            } else {
                res = "Error: no se puede dividir por cero.";
            }
        } else {
            res = "Seleccione una operación.";
        }

        resultado.textContent = "Resultado: " + res;
    }

    /*------------------------------------------------*/
    btnRestablecer.onclick = function (evento) {
        evento.preventDefault();
        input1.value = "";
        input2.value = "";
        select.value = "select";
        resultado.textContent = "";
        btnCalcular.disabled = false;
    }
}
