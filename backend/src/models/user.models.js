import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    playlists: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}
    ],
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },

},
    {timestamps: true},
);


export const User = mongoose.model("User", userSchema);

