document.addEventListener('DOMContentLoaded', function() {

    const entradaCelsius = document.getElementById('celsius');
    const botonConvertir = document.getElementById('convertir-btn');
    const resultadoDiv = document.getElementById('resultado');
    
    botonConvertir.addEventListener('click', convertirTemperatura);
    
    function validarNumero(valor) {
        if(!isNaN(parseFloat(valor))){
            return true
        }
        return false
    }
    
    function celsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    
    function celsiusAKelvin(celsius) {
        return celsius + 273.15;
    }

    function convertirTemperatura() {
        const celsiusValue = entradaCelsius.value.trim();
        
        if (validarNumero(celsiusValue)) {
            const celsius = parseFloat(celsiusValue);
            const kelvin = celsiusAKelvin(celsius);
            const fahrenheit = celsiusAFahrenheit(celsius);
            
            console.log(`Grados Kelvin: ${kelvin}`);
            console.log(`Grados Fahrenheit: ${fahrenheit}`);
            
            resultadoDiv.innerHTML = `
                <h3 class="resultado-header">Resultados:</h3>
                <p class="resultado-item">Temperatura en Celsius: ${celsius} °C</p>
                <p class="resultado-item">Grados Kelvin: ${kelvin} K</p>
                <p class="resultado-item">Grados Fahrenheit: ${fahrenheit} °F</p>
            `;

            resultadoDiv.classList.add('active');
            
        } else {

            resultadoDiv.innerHTML = `
                <p class="error">Error: Debe ingresar un valor numérico válido.</p>
            `;
            resultadoDiv.classList.add('active');
            
            alert("Error: Debe ingresar un valor numérico. Intente nuevamente.");
            
            entradaCelsius.focus();
        }
    }
    
});