function qualquer (parametro:any):string {
    return typeof(parametro)
}

console.log(qualquer(1))
console.log(qualquer("oi"))
console.log(qualquer(true))