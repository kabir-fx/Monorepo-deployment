import express from "express";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json())

app.get("/", async (req, res) => {
    const users = await prismaClient.user.findMany();

    res.json(users);
})

app.post("/", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await prismaClient.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.json(response);
})

app.listen(8080)
