type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function emprestimo(clientes: Cliente[]): Cliente[] {

    const calculaDebito = clientes.map((cliente) => {
        let debito = cliente.debitos.reduce((total, valor) => total + valor, 0)
        cliente.saldoTotal = cliente.saldoTotal - debito
        cliente.debitos = []
        return cliente

    }).filter((item) => {
        return item.saldoTotal < 0
    })

    return calculaDebito
}

console.log(emprestimo(clientes))