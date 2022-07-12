// 1 

export type User = {
    id: number, 
    name: string, 
    email: string, 
    role: USER_ROLES,
    age: number
}

export enum USER_ROLES {
    ADMIN = "ADMIN", 
    NORMAL = "NORMAL"
}

export const users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        role: USER_ROLES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        role: USER_ROLES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        role: USER_ROLES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        role: USER_ROLES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        role: USER_ROLES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        role: USER_ROLES.ADMIN,
        age: 60
    }
];