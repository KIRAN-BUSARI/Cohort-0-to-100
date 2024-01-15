import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    intrests: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

export const Card = mongoose.model("Card", cardSchema);