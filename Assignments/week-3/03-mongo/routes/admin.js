const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const adminSchema = require("../db/index.js")
const router = Router();

// Admin Routes
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!(username || password)) {
        res.status(400).json({err:"All Fields are Required"})
    }
    
    const userExists = await adminSchema.Admin.findOne({ username });
    
    if (userExists) {
        res.status(401).send("User already exists.");
    }
    const admin = await adminSchema.Admin.create({
        username,
        password
    })

    if (!admin) {
        res.status(402).send("Admin Creation failed");
    }
    admin.save();
    res.status(200).json({
        success: true,
        message: "Admin Created Successfully",
        admin
    })
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;