function CalculadoraIMC() {
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [resultado, setResultado] = React.useState("");
    const [clase, setClase] = React.useState("");


    const calcularImc = (e) => {
        e.preventDefault();
        const h = Number(altura) / 100;
        const imc = Number(peso) / (h * h);

        let mensaje = "";
        let claseMensaje = "";
        
        if (imc < 18.5) {
            mensaje = "Nivel bajo";
            claseMensaje = "bajo"
        } else if (imc >= 18.5 && imc < 25) {
            mensaje = "Nivel normal";
            claseMensaje = "normal";
        } else if (imc >= 25 && imc < 30) {
            mensaje = "Sobrepeso";
            claseMensaje = "sobrepeso";
        } else {
            mensaje = "Obesidad";
            claseMensaje = "obesidad";
        }
        setResultado(`IMC: ${imc.toFixed(2)} - ${mensaje}`);
        setClase(claseMensaje);
    };
    const handleRestablecer = (e) => {
        e.preventDefault();
        setPeso("");
        setAltura("");
        setResultado("");
        setClase("");
    };
    return (
        <form>
            <h1>Calculadora de IMC</h1>
            <p>Ingrese los parametros correspondientes para calcular su Indice de Masa Corporal: </p>
            <input
                type="number"
                value={peso}
                onChange={e => setPeso(e.target.value)}
                placeholder="Peso (kg)"
                required
            />
            <input
                type="number"
                value={altura}
                onChange={e => setAltura(e.target.value)}
                placeholder="Altura (cm)"
                required
            />
            <button onClick={calcularImc}>Calcular IMC</button>
            <button onClick={handleRestablecer}>Restablecer</button>
            {resultado && (
                <p className={clase}>{resultado}</p>
            )}
        </form>
    );

}