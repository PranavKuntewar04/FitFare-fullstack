const express = require("express");
const { prisma } = require("../db");

const feedbackRouter = express.Router();

feedbackRouter.post("/", async (req, res) => {
    const { userId, message, rating } = req.body;

    try {
        const review = await prisma.feedback.create({
            data: {
                message,
                rating,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
        
        return res.status(200).json({
            message: "Feedback sent!"
        });
    } catch(error) {
        console.log("Feedback router:", error)
        return res.status(500).json({
            message: "Something went wrong!"
        });
    } 
});

module.exports = { feedbackRouter };
