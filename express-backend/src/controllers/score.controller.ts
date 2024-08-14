import { Request, Response } from 'express';
import {prisma} from '../server';

const health = async (req: Request, res: Response) => {
    res.send("Score health is good!");
};

const createScore = async (req: Request, res: Response) => {
};

const getScores = async (req: Request, res: Response) => {
    res.send("All scores!");
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