import mongoose from "mongoose";

mongoose.connect("mongodb+srv://kiranbusari2208:2dioeeShcYzLv1KY@cluster0.whdq8zr.mongodb.net/Todo-App", {
    dbName: "Todo-App"
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}