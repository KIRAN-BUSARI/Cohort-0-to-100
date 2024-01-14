import express from "express";
import connectDB from "./db/connectDB.js";
import { config } from "dotenv";
config();
import app from "./app.js";
const PORT = process.env.PORT || 8080

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World");
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    connectDB();
});