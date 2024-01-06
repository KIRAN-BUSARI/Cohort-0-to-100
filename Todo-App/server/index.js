import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
config();

const PORT = process.env.PORT || 8001;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "You sent a wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        message: "Todo created successfully"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.findOne({})
    // console.log(todos);
    res.status(200).json(todos)
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            message: "Invalid user inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body._id
    }, {
        completed: true
    })

    res.status(200).json({
        message: "Todo marked as completed"
    })
})

app.listen(8000, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
});