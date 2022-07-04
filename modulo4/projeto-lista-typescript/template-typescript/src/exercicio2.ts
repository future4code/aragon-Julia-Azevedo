function recebeNomeEData (nome:string, data:string):string{
    const separaData = data.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${separaData[0]}, no mês de ${separaData[1]} e ano de ${separaData[2]}.`
}

console.log(recebeNomeEData("julia", "08/03/1996"))