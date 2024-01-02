// Middleware for handling auth
const z = require("zod");
const { Admin } = require("../db/index");

const correctUsername = z.string().email();
const correctPassword = z.string().min();

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const usernameResponse = correctUsername.safeParse(username);
    const passwordResponse = correctPassword.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        res.status(400).send.json({
            status: false,
            message: "All fields are required"
        })
    }
    
    const existingAdmin = await Admin.findOne({ username })
    
    if (!existingAdmin) {
        res.status(401).send.json({
            statu: false,
            message: "Admin not found"
        })
    } else {
        next()
    }
}

module.exports = adminMiddleware;