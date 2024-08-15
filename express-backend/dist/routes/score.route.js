"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const score_controller_1 = __importDefault(require("../controllers/score.controller"));
const router = express_1.default.Router();
router.get("/health", score_controller_1.default.health);
router.post("/create", score_controller_1.default.createScore);
router.get("/getall", score_controller_1.default.getScores);
router.get("/get/:id", score_controller_1.default.getScore);
router.put("/update/:id", score_controller_1.default.updateScore);
router.delete("/delete/:id", score_controller_1.default.deleteScore);
exports.default = router;
