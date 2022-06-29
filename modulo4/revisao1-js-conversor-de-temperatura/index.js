function temperatureConverter(celsius, scale) {
  
    if (scale === "F" && typeof celsius === 'number') {
    return (celsius+ "° Celsius é equivalente a "+ ((celsius*1.8)+32) + "° Fahrenheit")
    }
  
    else if (scale === "K" && typeof celsius === 'number') {
    return (celsius+ "° Celsius é equivalente a "+ (celsius+273.15) + " Kelvin")
    }
  
    else return `Erro! Parâmetro inválido. A função deve receber uma temperatura e uma escala em "K" ou "F".`
  
  }
  
  console.log(temperatureConverter(dez, "F"))