import { Request, Response } from 'express';
import ScoreModel from "../models/score.model";

const health = async (req: Request, res: Response) => {
    res.send("Score health is good!");
};

const createScore = async (req: Request, res: Response) => {
};

const getScores = async (req: Request, res: Response) => {
    try {
        const allScores = await ScoreModel.selectAllScore();
        res.status(200).json(allScores);
    } catch (e) {
        res.status(500).json({error: e});
    }
    
};
const getScore = async (req: Request, res: Response) => {};
const updateScore = async (req: Request, res: Response) => {};
const deleteScore = async (req: Request, res: Response) => {};

export default {
	createScore,
	getScore,
	getScores,
	updateScore,
	deleteScore,
	health,
};