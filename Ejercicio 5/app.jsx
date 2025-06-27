function Calculadora() {
    const [num1, setNum1] = React.useState("");
    const [num2, setNum2] = React.useState("");
    const [operacion, setOperacion] = React.useState("");
    const [resultado, setResultado] = React.useState("");

    // Deshabilitar "Dividir" si num2 es 0
  const isDivisionDisabled = Number(num2) === 0;
  // Deshabilitar calcular si la opción es dividir y num2 es 0
  const isCalcularDisabled = operacion === "Dividir" && isDivisionDisabled;

    const handleOperacionChange = (e) => {
        setOperacion(e.target.value);
        setResultado("");
    };

    const handleCalcular = (e) => {
        e.preventDefault();
        const n1 = Number(num1);
        const n2 = Number(num2);
        let res;
        if (operacion === "Sumar") {
            res = n1 + n2;
        } else if (operacion === "Restar") {
            res = n1 - n2;
        } else if (operacion === "Multiplicar") {
            res = n1 * n2;
        } else if (operacion === "Dividir") {
            if (n2 === 0) {
                res = "No se puede dividir por 0";
            } else {
                res = n1 / n2;
            }
        } else {
            res = "Seleccione una operación";
        }
        setResultado("Resultado: " + res);
    };
    const handleRestablecer = (e) => {
    e.preventDefault();
    setNum1("");
    setNum2("");
    setResultado("");
    setOperacion("");
  };
  return (
    <form>
        <h1>Calculadora</h1>
        <p>Ingresar numeros: </p>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <br />
      <select name="choice" value={operacion} onChange={handleOperacionChange}>
        <option value="Elegir" selected>Opciones...</option>
        <option value="Sumar">Sumar</option>
        <option value="Restar">Restar</option>
        <option value="Multiplicar">Multiplicar</option>
        <option value="Dividir" disabled={isDivisionDisabled}>Dividir</option>
      </select>
      <br /><br />
      <button id="calcular" onClick={handleCalcular} disabled={isCalcularDisabled}>
        Calcular
      </button>
      <button id="restablecer" onClick={handleRestablecer}>
        Restablecer
      </button>
      <p>{resultado}</p>
    </form>
  );
}

