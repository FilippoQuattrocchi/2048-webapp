import express from "express";
import AuthController from "../controllers/auth.controller";

const router = express.Router();

router.get("/health", AuthController.health);
router.post("/register", AuthController.createUser);
router.post("/login", AuthController.login);
router.get("/get/:id", AuthController.getUser);

export default router;
