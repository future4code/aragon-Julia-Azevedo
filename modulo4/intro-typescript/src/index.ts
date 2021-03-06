// 1-
// function checaTriangulo(a: number, b: number, c: number): string {
//     if (a !== b && b !== c) {
//         return "Escaleno";
//     } else if (a === b && b === c) {
//         return "Equilátero";
//     } else {
//         return "Isósceles";
//     }
// }
//
// console.log(checaTriangulo(7, 7, 7))
// console.log(checaTriangulo(7, 7, 9))
// console.log(checaTriangulo(7, 8, 9))


// 2-
// function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
//     return ([cor1, cor2, cor3])
// }
//
// imprimeTresCoresFavoritas()


// 3-
// function checaAnoBissexto(ano:number):boolean {
//     const cond1:boolean = ano % 400 === 0
//     const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }
//
// console.log(checaAnoBissexto(2022))
// console.log(checaAnoBissexto(2020))


// 4-
// function comparaDoisNumeros(num1: number, num2: number): number {
//     let maiorNumero: number;
//     let menorNumero: number;
//
//     if (num1 > num2) {
//         maiorNumero = num1;
//         menorNumero = num2;
//     } else {
//         maiorNumero = num2;
//         menorNumero = num1;
//     }
//
//     const diferenca: number = maiorNumero - menorNumero;
//
//     return diferenca
// }
//
// console.log(comparaDoisNumeros(20, 50))


// 5-
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number): boolean {

    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao

    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])))