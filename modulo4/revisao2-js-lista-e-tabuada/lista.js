const customers = [
    { id: 1, name: "Tracy" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Mary" },
    { id: 4, name: "Edward" }
]

function newCustomer(customer) {
    let index = customers.findIndex((val) => val.id === customer.id)

    if (index < 0) {
        customers.push(customer)
    } else {
        return console.log("Error. Invalid parameter. the id " + customer.id + " already exists.")
    }
}
newCustomer({ id: 2, name: "Louis" })
console.log(customers)