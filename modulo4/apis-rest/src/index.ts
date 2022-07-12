import express, { Request, Response } from 'express';
import cors from 'cors';
import { User, users, USER_ROLES } from './data';

const app = express();

app.use(cors());
app.use(express.json());

// 2

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { role } = req.query;
        if (role && !(role.toString().toUpperCase() in USER_ROLES)) {
            errorCode = 422;
            throw new Error("Invalid role.");
        };

        const result = users.filter((user) => {
            if (role) {
                return role.toString().toUpperCase() === user.role;
            } else {
                return user;
            };
        });

        res.status(200).send({
            users: result
        });
    } catch (err: any) {
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
});

// 3

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { name, email, age, role } = req.body;

        if (!name || !email || !age || !role) {
            errorCode = 422;
            throw new Error("Missing data in order to create user.");
        };

        if (typeof name !== "string") {
            errorCode = 422;
            throw new Error("Invalid name.");
        };

        if (typeof email !== "string") {
            errorCode = 422;
            throw new Error("Invalid email.");
        };

        if (typeof age !== "number") {
            errorCode = 422;
            throw new Error("Invalid age.");
        };

        if (!(role.toUpperCase() in USER_ROLES)) {
            errorCode = 422;
            throw new Error("Invalid type.");
        };

        users.forEach(user => {
            if (user.email === email) {
                errorCode = 409;
                throw new Error("Email already exists.");
            };
        });

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            age,
            role
        };

        users.push(newUser);

        res.status(201).send({
            message: "User created successfuly!",
            user: users
        })
    } catch (err: any) {
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    };
});

// 4

app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const id = Number(req.params.id);
        const { email } = req.body;

        if (isNaN(id)) {
            errorCode = 422;
            throw new Error("Invalid id.");
        };

        const userIndex = users.findIndex((user) => {
            return user.id === id;
        });

        if (userIndex < 0) {
            errorCode = 422;
            throw new Error("Id doesn't match a valid user.");
        };

        users.forEach(user => {
            if (user.email === email) {
                errorCode = 409;
                throw new Error("Email already exists.");
            };
        });

        users[userIndex].email = email;

        res.status(200).send({
            message: "User modified successfully!",
            users: users[userIndex]
        });
    } catch (err: any) {

        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    }
})

// 5

app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            errorCode = 422;
            throw new Error("Invalid id.");
        };

        const userIndex = users.findIndex((user) => {
            return user.id === id;
        });

        if (userIndex < 0) {
            errorCode = 422;
            throw new Error("Id doesn't match a valid user.");
        };

        users.splice(userIndex, 1);

        res.status(204).send({
            message: "User removed successfully!"
        });
    } catch (err: any) {
        if (err.statusCode === 200) {
            res.status(500).end();
        } else {
            res.status(errorCode).send(err.message);
        };
    }
})

app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003");
});
