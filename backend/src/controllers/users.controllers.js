import { User } from "../models/user.models.js"

export const getAllUsers = async (req, res, next) => {
    try {
        const currUserId = req.auth.userId;
        const users = await User.find({clerkId: {$ne: currUserId}});
        res.status(200).json(users);
    } catch(error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const currUserId = req.auth.userId;
        res.status(200).json(currUserId);

    } catch (error) {
        console.log("Error in getUserById");
        next(error);
    }
}