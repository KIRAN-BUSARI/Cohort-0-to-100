const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;

    if (!(username || password)) {
        res.status(400).send.json({
            success: false,
            message: "All Fields are Required"
        })
    }
    
    const adminExists = await Admin.findOne({ username });
    
    if (adminExists) {
        res.status(401).send.json({
            success: false,
            message: "User already exists"
        });
    }
    const admin = await Admin.create({
        username,
        password
    })

    if (!admin) {
        res.status(402).send.json({
            success: false,
            message: "Admin Creation failed",
        });
    }

    admin.save();

    res.status(200).send.json({
        success: true,
        message: "Admin Created Successfully",
        admin
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement creating a course creating logic
    // const { title, description, price, image } = req.body;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    if (!title || !description || !price || !image) {
        res.status(401).send.json({
            success: false,
            message: "All Fields are required"
        })
    }

    const course = await Course.create({
        title,
        description,
        price,
        image
    })

    if (!course) {
        res.status(401).send.json({
            success: false,
            message: "Course Creation failed",
        })
    }

    res.status(200).send.json({
        success: true,
        message: "Course Created successfully",
        courseId: course._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

module.exports = router;