function App() {

  const [estaHabilitado, setEstaHabilitado] = React.useState("derecho");

  function handleIzquierdo() {
    setEstaHabilitado("derecho");
  }

  function handleDerecho() {
    setEstaHabilitado("izquierdo");
  }
   return (
    <div>
      <h1>Botones: </h1>

      <button onClick={handleIzquierdo} disabled={estaHabilitado !== "izquierdo"}>IZQUIERDO</button>
      <button onClick={handleDerecho} disabled={estaHabilitado !== "derecho"}>DERECHO</button>
    </div>
  );
}