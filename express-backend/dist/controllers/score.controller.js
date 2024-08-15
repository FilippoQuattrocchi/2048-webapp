"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const score_model_1 = __importDefault(require("../models/score.model"));
const health = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Score health is good!");
});
const createScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, value } = req.body;
        const newScore = yield score_model_1.default.createScore(userId, value);
        res.status(200).json(newScore);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const getScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allScores = yield score_model_1.default.selectAllScore();
        res.status(200).json(allScores);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const getScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scoreIdString = req.params.id;
        const scoreId = Number(scoreIdString);
        const score = yield score_model_1.default.getScore(scoreId);
        res.status(200).json(score);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const updateScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scoreIdString = req.params.id;
        const scoreId = Number(scoreIdString);
        const scoreValueString = req.body.value;
        const scoreValue = Number(scoreValueString);
        const score = yield score_model_1.default.updateScore(scoreId, scoreValue);
        res.status(200).json(score);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const deleteScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scoreIdString = req.params.id;
        const scoreId = Number(scoreIdString);
        const score = yield score_model_1.default.deleteScore(scoreId);
        res.status(200).json(score);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.default = {
    createScore,
    getScore,
    getScores,
    updateScore,
    deleteScore,
    health,
};
