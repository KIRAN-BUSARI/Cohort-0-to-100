import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from app")
})

app.post("/health-checkup", function (req, res) {
    // res.send("Hello")
    const kidney = req.query.kidney
    // res.send("kidhneys : "+kidney)
    res.send("You are a normal human :"+kidney)
})



app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
})