import { z } from "zod";
// import express from "express";
// const PORT = 3001;
// const app = express();

// const schema = z.array(z.number())
function usercheck(obj) {
    const User = z.object({
        userName: z.string(),
        email: z.string().email(),
        password: z.string().min(8).max(16),
    })
    const resp = User.safeParse(obj)
    console.log(resp);
}

usercheck({
    userName: "kiran kumar",
    email: "kiran@gmail.com",
    password: "123456789"
}); 

// app.use(express.json());

// app.post("/health", function (req, res) {
//     // const kidney = req.body.kidney;
//     // const length = kidney.length;
//     const response = schema.safeParse(kidney)

//     if (!response.success) {
//         res.status(401).send({
//             message: "Something went wrong"
//         })
//     }
//     // res.send("Kidney = " + kidney);
//     res.send({
//         response
//     })
// })

// app.listen(PORT, () => {
//     console.log(`App listening on port http://localhost:${PORT}`)
// })

const heading = document.createElement("h1")
heading.innerHTML = "Hello"
