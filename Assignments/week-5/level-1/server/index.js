import app from "./app.js";
import { config } from "dotenv";
import connectDB from "./db/connectDB.js";
import morgan from "morgan";
config();
const PORT = process.env.PORT || 8080

app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        messsage: "Hello World"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectDB();
});