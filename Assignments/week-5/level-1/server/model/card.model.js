import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    intrests: {
        type: Array,
        required: true
    }
}, {
    timestamps: true,
});

const Card = cardSchema.model("Card");

export default Card