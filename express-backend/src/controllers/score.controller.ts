import { Request, Response } from "express";
import ScoreModel from "../models/score.model";

const health = async (req: Request, res: Response) => {
	res.send("Score health is good!");
};

const createScore = async (req: Request, res: Response) => {
	try {
		const { userId, value } = req.body;
		const newScore = await ScoreModel.createScore(userId, value);
		res.status(200).json(newScore);
	} catch (e) {
		res.status(500).json({ error: e });
	}
};

const getScores = async (req: Request, res: Response) => {
	try {
		const allScores = await ScoreModel.selectAllScore();
		res.status(200).json(allScores);
	} catch (e) {
		res.status(500).json({ error: e });
	}
};
const getScore = async (req: Request, res: Response) => {
	try {
		const scoreIdString = req.params.id;
		const scoreId = Number(scoreIdString);
		const score = await ScoreModel.getScore(scoreId);
		res.status(200).json(score);
	} catch (e) {
		res.status(500).json({ error: e });
	}
};
const updateScore = async (req: Request, res: Response) => {
	try {
		const scoreIdString = req.params.id;
		const scoreId = Number(scoreIdString);
		const scoreValueString = req.body.value;
		const scoreValue = Number(scoreValueString);
		const score = await ScoreModel.updateScore(scoreId, scoreValue);
		res.status(200).json(score);
	} catch (e) {
		res.status(500).json({ error: e });
	}
};
const deleteScore = async (req: Request, res: Response) => {
	try {
		const scoreIdString = req.params.id;
		const scoreId = Number(scoreIdString);
		const score = await ScoreModel.deleteScore(scoreId);
		res.status(200).json(score);
	} catch (e) {
		res.status(500).json({ error: e });
	}
};

export default {
	createScore,
	getScore,
	getScores,
	updateScore,
	deleteScore,
	health,
};
