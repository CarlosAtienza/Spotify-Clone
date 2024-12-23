import { Router } from "express";
import { getFeaturedSongs, getAllSongs, getMadeForYouSongs, getTredingSongs } from "../controllers/song.controller.js";

const router = Router();

router.get("/", getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", getMadeForYouSongs);
router.get("/trending", getTredingSongs);

export default router;