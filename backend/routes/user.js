const express = require("express");
const { prisma } = require("../db");


const userRouter = express.Router();

/*
userRouter.get("/", async (req, res) => {
});
*/

userRouter.post("/", async (req, res) => {
    const {
        email,
        phone,
        firstName,
        lastName,
        city,
        postalCode
    } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const newUser = await prisma.user.upsert({
            where: { email: email },
            update: {
                phone,
                firstName,
                lastName,
                city,
                postalCode
            },
            create: {
                email,
                phone,
                firstName,
                lastName,
                city,
                postalCode
            }
        });
        
        const userId = newUser.id

        return res.status(200).json({
            id: userId,
            message: "User created"
        });
    } catch(error) {
        console.error("Error upserting user:", error);
        return res.status(500).json({
            message: "Something went wrong while creating or updating user"
        });
    }
});


/*
userRouter.delete("/", async (req, res) => {
});
*/

module.exports = { userRouter };
