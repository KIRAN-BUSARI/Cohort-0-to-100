const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kiranbusari2208:2dioeeShcYzLv1KY@cluster0.whdq8zr.mongodb.net/Assignment?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number
    },
    image: {
        type: String,
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}