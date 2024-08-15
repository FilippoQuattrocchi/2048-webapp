import express from "express";
import ScoreController from "../controllers/score.controller";

const router = express.Router();

router.get("/health", ScoreController.health);
router.post("/create", ScoreController.createScore);
router.get("/getall", ScoreController.getScores);
router.get("/get/:id", ScoreController.getScore);
router.put("/update", ScoreController.updateScore);
router.delete("/delete/:id", ScoreController.deleteScore);

export default router;
