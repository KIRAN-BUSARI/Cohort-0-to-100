const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js");

// User Routes
router.post('/signup', async(req, res) => {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;

    if (!(username || password)) {
        res.status(400).json({err:"All Fields are Required"})
    }
    
    const userExists = await User.findOne({ username });
    
    if (userExists) {
        res.status(401).send("User already exists.");
    }

    const user = await User.create({
        username,
        password
    })

    if (!admin) {
        res.status(402).send("User Creation failed");
    }

    admin.save();

    res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
            res.json(courses);
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
