
export function convert(feet,inch){
    if(Number.isNaN(feet)){ // if input is't a number, it return a blank string
        return ''
    }
    let fCM = feet*30.48
    let iCM = inch*2.54
    return iCM+fCM
}