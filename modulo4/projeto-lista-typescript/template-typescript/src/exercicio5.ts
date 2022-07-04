type User = {
    name: string,
    email: string,
    role: string
}

const users: User[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

function UsersAdmin(users: User[]): string[] {

    const usersFilter = users.filter((user) => {
        return user.role === "admin"
    }).map((user) => {
        return user.email
    })
    return usersFilter
}

console.log(UsersAdmin(users))