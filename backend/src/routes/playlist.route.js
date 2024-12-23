import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { fetchPlaylistbyId, fetchPlaylists } from "../controllers/playlist.controller.js";

const router = Router();


router.get("/:userId", protectRoute, fetchPlaylists);
router.get("/playlist/:playlistId", protectRoute, fetchPlaylistbyId)

export default router;