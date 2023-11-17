// Desenvolva uma função que converta uma temperatura de Celsius para Fahrenheit. A função deve receber a temperatura em Celsius como parâmetro e retornar a temperatura convertida.

function temperatura(temperatura) {
    return {
        temperaturaFahrenheit() {
            const conversao = (temperatura * 9/5) + 32
            console.log(temperatura + '°C' + ' é' +  ' ' + conversao +  '°F') 
        }
    }
}
const temperaturaCelsius = temperatura(50)
temperaturaCelsius.temperaturaFahrenheit()