import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getUserById } from "../controllers/users.controllers.js";

const router = Router();

router.get("/", protectRoute, getUserById);
router.get("/getAllUsers", protectRoute, getAllUsers)


export default router;