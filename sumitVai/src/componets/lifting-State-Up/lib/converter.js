export function toCelsius(fahrenheit){
     return ((fahrenheit - 32) * 5)/9;
}

export function toFahrenheit(celsius){
     return ((celsius * 9)/5) + 32;
}

export function converter(temperature, convertTo){
    const  input = parseFloat(temperature)
    if(Number.isNaN(input)){ // if input is't a number, it return a blank string
        return ''
    }
    const output = convertTo(input);
    const round = Math.round(output * 1000) / 1000;  // it returns like 2.445, after . there will be 3 numbers
    return round.toString()
}