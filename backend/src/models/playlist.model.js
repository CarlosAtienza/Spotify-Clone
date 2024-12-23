import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    songs:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Songs'}
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required:true
    }

    

},
    {timestamps: true},

);

export const Playlist = mongoose.model("Playlist", playlistSchema);
