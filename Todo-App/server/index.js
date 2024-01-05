import express from "express";
import { createTodo, updateTodo } from "./types";
import { todo } from "./db";
PORT = 8000;

const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent a wrong inputs"
        })
        return;
    }

    todo
})

app.get("/todos",function (req, res) {
    
})

app.put("/completed",function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent a wrong inputs"
        })
        return;
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
});