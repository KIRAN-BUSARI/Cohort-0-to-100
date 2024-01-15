import { Card } from "../models/card.model.js";

export const createCardController = async (req, res) => {
    const { name, description, intrests } = req.body;

    if (!name || !description || !intrests) {
        res.status(400).json({
            success: false,
            message: "Please enter all the fields"
        })
    }

    const card = await Card.create({
        name,
        description,
        intrests
    })

    if (!card) {
        res.status(401).json({
            success: false,
            message: "Card not created"
        })
    }

    card.save();

    res.status(201).json({
        success: true,
        message: "Card created successfully"
    })
}