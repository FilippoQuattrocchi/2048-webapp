import { prisma } from "../server";

const createScore = async (req: Request, res: Response) => {};

const selectAllScore = async () => {
	return await prisma.scoreboard.findMany();
};
const getScore = async (req: Request, res: Response) => {};
const updateScore = async (req: Request, res: Response) => {};
const deleteScore = async (req: Request, res: Response) => {};

export default {
	createScore,
	getScore,
	selectAllScore,
	updateScore,
	deleteScore,
};
