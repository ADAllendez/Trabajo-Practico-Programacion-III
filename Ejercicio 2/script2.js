const listaDePalabras = ["manzana","banana","pera","durazno","frutilla","mango"];

const input = document.getElementById('inputPalabra');
const Filtrar = document.getElementById('Filtrar');
const error = document.getElementById('error');
const lista = document.getElementById('listaPalabras');

     
        function mostrarPalabras(arr) {
            lista.innerHTML = "";
            arr.forEach(function(palabra) {
                const li = document.createElement('li');
                li.textContent = palabra;
                lista.appendChild(li);
            });
        }
        mostrarPalabras(listaDePalabras);
        
        Filtrar.addEventListener('click', function(e) {
            e.preventDefault(); 
            
        const texto = input.value.trim();
            if (texto === "") {
                error.textContent = "Por favor, ingrese una palabra o parte de ella";
                lista.innerHTML = ""; 
                return;
            } else {
                error.textContent = "";
            }
        
        const resultado = listaDePalabras.filter(function(palabra) {
            return palabra.toLowerCase().includes(texto.toLowerCase());
            });
            if (resultado.length === 0) {
                lista.innerHTML = "<li>No se encontraron coincidencias</li>";
            } else {
                mostrarPalabras(resultado);
            }
        });