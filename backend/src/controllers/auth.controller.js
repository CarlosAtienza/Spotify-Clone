import { User } from "../models/user.models.js";

export const authCallback = async (req, res, next) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        const user = await User.findOne({clerkId: id});

        // Checking if user exists/ signup
        if (!user){ 
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl,
            })
        }
        res.status(200).json({success:true});
        console.log("User saved in db")

    } catch (error) {
        console.log("Error in auth callback", error.message);
        next(error)
    }

}