import { Playlist } from "../models/playlist.model.js"
import { User } from "../models/user.models.js"

export const fetchPlaylists = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const user = await User.findById(userId);
        const playlists = user.playlists;
        res.status(200).json(playlists);
    } catch (error) {
        console.log("Error in fetchPlaylists");
        next(error);
    }
}

export const fetchPlaylistbyId = async (req, res, next) => {
    try {
        const {playlistId} = req.params;
        const playlist = await Playlist.findById(playlistId).populate("songs");

        if(!playlist){
            return res.status(404).json({message: "Playlist not found"});
        }
        res.status(200).json(playlist);
    } catch (error) {
        console.log("Error in fetchPlaylistbyId");
        next(error);
    }
}

